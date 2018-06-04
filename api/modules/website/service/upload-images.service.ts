import { Component, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { ImageConst } from '../constants/image.constant';
import { Model } from 'mongoose';
import { Image } from '../interfaces';
import { GetUploadedImagesDetailDto, GetUploadedImagesResultDto } from '../dto';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';

@Component()
export class UploadImageService {
  private readonly baseHyperlink: string = `/static/images/upload`;

  constructor(
    @Inject(ImageConst.ImageModelToken)
    private readonly imageModel: Model<Image>,
  ) {}

  async uploadImage(file: any, req: any): Promise<GetUploadedImagesDetailDto> {
    if (!file) {
      throw new HttpException('File Not Found', HttpStatus.BAD_REQUEST);
    }
    if (!req.userId) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      // If user upload folder is not exist => create one
      const uploadFolder = path.join(
        __dirname,
        `../../../../../../static/images/upload/${req.body.album}`,
      );
      if (!fs.existsSync(uploadFolder)) {
        const mkdir = promisify(fs.mkdir);
        await mkdir(uploadFolder);
      }

      // Move file from temporary folder to public folder
      const temporaryFolder = path.join(__dirname, `../../../../../../${file.path}`);
      const targetFolder = path.join(
        __dirname,
        `../../../../../../static/images/upload/${req.body.album}/${
          file.originalname
        }`,
      );
      const rename = promisify(fs.rename);
      await rename(temporaryFolder, targetFolder);

      // Save a record to db
      const image = new this.imageModel({
        filename: file.originalname,
        user: req.userId,
        album: req.body.album,
        extension: file.originalname.split('.')[
          file.originalname.split('.').length - 1
        ],
      });
      await image.save();

      return {
        _id: image._id,
        filename: image.filename,
        hyperlink: `${this.baseHyperlink}/${image.album}/${image.filename}`,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUploadedImage(
    userId: string,
    search: string,
  ): Promise<GetUploadedImagesResultDto> {
    if (!userId) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      // const imageList = await this.imageModel.find({user: userId}).lean().exec();
      let imageList;
      if (search) {
        imageList = await this.imageModel
          .find({ filename: { $regex: `^${search}`, $options: 'i' } })
          .lean()
          .exec();
      } else {
        imageList = await this.imageModel
          .find({})
          .lean()
          .exec();
      }

      const result = imageList.map(item => ({
        _id: item._id,
        filename: item.filename,
        hyperlink: `${this.baseHyperlink}/${item.album}/${item.filename}`,
      }));

      const readdir = promisify(fs.readdir);
      const albumList = await readdir(
        path.join(__dirname, `../../../../../../static/images/upload`),
      );

      return { result, albums: albumList };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateFilename(imageId: string, newName: string): Promise<void> {
    if (!imageId) {
      throw new HttpException('File Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      // Update filename in db
      const imageInfo = await this.imageModel
        .findOneAndUpdate({ _id: imageId }, { $set: { filename: newName } })
        .exec();

      // Update filename in public folder
      const oldFile = path.join(
        __dirname,
        `../../../../../../static/images/upload/${imageInfo.album}/${
          imageInfo.filename
        }`,
      );
      const newFile = path.join(
        __dirname,
        `../../../../../../static/images/upload/${imageInfo.album}/${newName}`,
      );
      const rename = promisify(fs.rename);
      await rename(oldFile, newFile);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteImage(imageId: string): Promise<void> {
    if (!imageId) {
      throw new HttpException('File Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      // Delete from db
      const imageInfo = await this.imageModel
        .findOneAndRemove({ _id: imageId })
        .exec();

      // Delete from public folder
      const filePath = path.join(
        __dirname,
        `../../../../../../static/images/upload/default/${imageInfo.filename}`,
      );
      const unlink = promisify(fs.unlink);
      await unlink(filePath);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createAlbum(albumName: string): Promise<void> {
    if (!albumName) {
      throw new HttpException('Album Name Cant Empty', HttpStatus.BAD_REQUEST);
    }

    try {
      const albumFolder = path.join(
        __dirname,
        `../../../../../../static/images/upload/${albumName}`,
      );

      if (fs.existsSync(albumFolder)) {
        throw new HttpException(
          'Album Name Already Used',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        const mkdir = promisify(fs.mkdir);
        await mkdir(albumFolder);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
