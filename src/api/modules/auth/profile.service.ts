import { Injectable, HttpStatus, Inject, HttpException } from '@nestjs/common';
import { UsersConst } from './constants/users.constant';
import { Model } from 'mongoose';
import { User } from './interfaces';
import { GetProfileResultDto, UpdateProfileInputDto } from './dto';
import * as fs from 'fs';
import * as Joi from 'joi';
import * as bcrypt from 'bcrypt';
import config from '../../config';

@Injectable()
export class ProfileService {
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
        const profilePictureSrc = `uploads/profile-pictures/${id}`;
        profileInfo.imageSrc = fs.existsSync(profilePictureSrc)
          ? profilePictureSrc + `/${id}.jpg`
          : undefined;
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
      middleName: Joi.string(),
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
}
