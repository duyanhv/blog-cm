import { Inject, HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { Company } from '../interfaces';
import { Model } from 'mongoose';
import * as Joi from 'joi';
import { CompanyConst } from '../constants/company.constant';
import * as fs from 'fs';
import * as path from 'path';
import { processImage } from '../../../core/helpers';
import { CreateCompanyInputDto, UpdateCompanyInputDto } from '../dto';
const countrynames = path.join(
  __dirname,
  '../../../../client/src/resources/country-names.json'
);
@Injectable()
export class CompanyService {
  constructor(
    @Inject(CompanyConst.CompanyModelToken)
    private readonly companyModel: Model<Company>,
  ) { }

  async upload(file: any, req: any): Promise<void> {
    if (!file) {
      throw new HttpException('File Not Found', HttpStatus.BAD_REQUEST);
    } else if (!req.userId) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      // Generate new filename
      const newFilePath: string = path.join(
        __dirname,
        `../../../../public/logo-company/company-logo.jpg`,
      );

      // Resize image
      await processImage(`${file.destination}${file.filename}`, newFilePath);

      // Delete temporary file
      fs.unlinkSync(file.path);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getCompanyLogo(res: any): Promise<any> {
    try {
      const filePath = path.join(
        __dirname,
        `../../../../public/logo-company/company-logo.jpg`,
      );

      const defaultProfilePicturePath = path.join(
        __dirname,
        `../../../../public/profile-pictures/default-avatar.png`,
      );

      if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
      } else {
        res.sendFile(defaultProfilePicturePath);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async create(company: CreateCompanyInputDto): Promise<void> {
    const existedCompany = await this.companyModel.find().exec();

    if (existedCompany.length) {
      await this.companyModel
        .update(
          {},
          {
            $set: {
              companyname: company.companyname,

              telephone: company.telephone,

              streetline1: company.streetline1,

              streetline2: company.streetline2,

              city: company.city,

              state: company.state,

              zipcode: company.zipcode,

              country: company.country,

              logo: company.logo,

              facebookurl: company.facebookurl,

              twitterurl: company.twitterurl,

              googleplusurl: company.googleplusurl,

              linkedidurl: company.linkedidurl,
            },
          },
      )
        .exec();
    }
    const validationSchema = Joi.object().keys({
      companyname: Joi.string().required(),
      telephone: Joi.string().required(),
      streetline1: Joi.string().required(),
      streetline2: Joi.string(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipcode: Joi.string().required(),
      country: Joi.string().required(),
    });

    const { error } = Joi.validate(company, validationSchema, {
      allowUnknown: true,
    });
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    const newCompany = new this.companyModel({
      ...company,
    });
    await newCompany.save();
  }

  async update(updateInfo: UpdateCompanyInputDto): Promise<void> {
    const validateRoleSchema = Joi.object().keys({
      companyname: Joi.string().required(),
      telephone: Joi.string().required(),
      streetline1: Joi.string().required(),
      streetline2: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipcode: Joi.string().required(),
      country: Joi.string().required(),
    });
    const { error } = Joi.validate(updateInfo, validateRoleSchema, {
      allowUnknown: true,
    });
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    await this.companyModel
      .update(
        {},
        {
          $set: {
            ...updateInfo,
          },
        },
        {
          upsert: true,
        },
    )
      .exec();
  }

  async find(): Promise<any> {
    const company = await this.companyModel.findOne({}).exec();
    return {
      data: company,
      countrynames,
    };
  }
}
