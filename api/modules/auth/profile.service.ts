import { Component, HttpStatus, Inject, HttpException } from '@nestjs/common';
import { UsersConst } from './constants/users.constant';
import { Model } from 'mongoose';
import { User } from './interfaces';
import { GetProfileResultDto, UpdateProfileInputDto } from './dto';
import { processImage } from '../../core/helpers';
import * as fs from 'fs';
import * as path from 'path';
import * as Joi from 'joi';
import * as bcrypt from 'bcrypt';
import config from '../../config';

@Component()
export class ProfileService {
  private readonly baseHyperlink: string = `/static/img/profile-pictures`;

  constructor(
    @Inject(UsersConst.UserModelToken) private readonly userModel: Model<User>,
  ) {}

  addFullName = (user: UpdateProfileInputDto) => {
    const normalizedFullName = [user.lastName, user.middleName, user.firstName]
      .join(' ')
      .toLocaleLowerCase();
    const fullName = [user.lastName, user.middleName, user.firstName].join(' ');
    return {
      ...user,
      normalizedFullName,
      fullName,
    };
  }

  async getProfile(id: string): Promise<GetProfileResultDto> {
    try {
      if (!id) {
        throw new HttpException('Invalid User ID', HttpStatus.BAD_REQUEST);
      }

      const profileInfo = await this.userModel
        .findOne({ _id: id })
        .select('username firstName middleName lastName email')
        .lean()
        .exec();

      if (profileInfo) {
        const defaultAvatarHyperlink = `${
          this.baseHyperlink
        }/default-avatar.png`;
        const profilePictureHyperlink = `${this.baseHyperlink}/${id}.jpg`;
        const profilePictureLocation = path.join(
          __dirname,
          `../../../../../static/img/profile-pictures/${id}.jpg`,
        );

        profileInfo.imageSrc = fs.existsSync(profilePictureLocation)
          ? profilePictureHyperlink
          : defaultAvatarHyperlink;

        return profileInfo;
      } else {
        throw new HttpException('User Not Founnd', HttpStatus.NOT_FOUND);
      }
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async updateProfileInfo(
    id: string,
    profile: UpdateProfileInputDto,
  ): Promise<void> {
    const validateUpdateProfileSchema = Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().regex(config.usersModuleConfig.passwordRegex),
    });
    const { error } = Joi.validate(profile, validateUpdateProfileSchema, {
      allowUnknown: true,
    });
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    const profileWithFullName = this.addFullName(profile);

    try {
      if (profile.password) {
        return await this.userModel.updateOne(
          { _id: id },
          {
            $set: {
              ...profileWithFullName,
              password: await bcrypt.hash(
                profile.password,
                profile.password.length,
              ),
            },
          },
        );
      } else {
        return await this.userModel.updateOne(
          { _id: id },
          {
            $set: {
              ...profileWithFullName,
            },
          },
        );
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async uploadProfilePicture(file: any, req: any): Promise<string> {
    if (!file) {
      throw new HttpException('File Not Found', HttpStatus.BAD_REQUEST);
    } else if (!req.userId) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      // Generate new filename
      const newFilePath: string = path.join(
        __dirname,
        `../../../../../static/img/profile-pictures/${req.userId}.jpg`,
      );

      // Resize image and save image to public folder
      await processImage(`${file.destination}${file.filename}`, newFilePath);

      // Delete temporary file
      fs.unlinkSync(file.path);

      return `${this.baseHyperlink}/${req.userId}.jpg`;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
