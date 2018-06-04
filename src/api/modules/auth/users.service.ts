import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { User } from './interfaces';
import { Model, Query } from 'mongoose';
import {
  FindAllUsersQueryDto,
  FindAllUsersResultDto,
  UpdateUserInputDto,
  CreateUserInputDto,
  FindAllUsersDetailDto,
} from './dto';
import * as bcrypt from 'bcrypt';
import * as Joi from 'joi';
import { UsersConst } from './constants/users.constant';
import config from '../../config';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UsersConst.UserModelToken) private readonly userModel: Model<User>,
  ) {}

  /** normalize fullname for searching */
  addFullName = (user: CreateUserInputDto) => {
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

  addRoleQuery(query: FindAllUsersQueryDto): Query<any> {
    return query.role
      ? this.userModel
          .find(
            query.name
              ? {
                  $or: [
                    { username: { $regex: `^${query.name}`, $options: 'i' } },
                    {
                      normalizedFullName: {
                        $regex: `^${query.name}`,
                        $options: 'i',
                      },
                    },
                  ],
                }
              : {},
          )
          .where({ roles: query.role })
      : this.userModel.find(
          query.name
            ? {
                $or: [
                  { username: { $regex: `^${query.name}`, $options: 'i' } },
                  {
                    normalizedFullName: {
                      $regex: `^${query.name}`,
                      $options: 'i',
                    },
                  },
                ],
              }
            : {},
        );
  }

  /** find all users */
  async find(query: FindAllUsersQueryDto): Promise<FindAllUsersResultDto> {
    const totalPromise = await this.addRoleQuery(query)
      .count()
      .exec();

    const usersPromise = await this.addRoleQuery(query)
      .sort((query.asc as any) === 'true' ? query.sortBy : `-${query.sortBy}`)
      .skip((query.pageIndex - 1) * query.itemPerPageCount)
      .limit(query.itemPerPageCount)
      .select(
        '_id username email firstName middleName lastName fullName roles permissions isActive',
      )
      .exec();

    const [total, users] = await Promise.all([totalPromise, usersPromise]);

    return {
      data: users,
      total,
    };
  }

  /** find user by user name */
  async findByUsername(username: string): Promise<User> {
    // TODO create index for username in mongo

    const user = await this.userModel
      .findOne({ username })
      .select('username firstName middleName lastName email')
      .exec();
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel
      .findOne({ email })
      .select('username firstName middleName lastName email')
      .exec();

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel
      .findById(id)
      .select('_id')
      .exec();

    return user;
  }

  async create(user: CreateUserInputDto): Promise<FindAllUsersDetailDto> {
    const validationSchema = Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(config.usersModuleConfig.passwordRegex)
        .required(),
      username: Joi.string()
        .regex(config.usersModuleConfig.usernameRegex)
        .required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    });
    const { error } = Joi.validate(user, validationSchema, {
      allowUnknown: true,
    });

    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    const existedUser = await this.userModel
      .findOne({
        $or: [{ username: user.username }, { email: user.email }],
      })
      .exec();
    if (existedUser) {
      if (existedUser.username === user.username) {
        throw new HttpException(
          'username has been used',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      } else if (existedUser.email === user.email) {
        throw new HttpException(
          'email has been used',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }

    const userWithFullName = this.addFullName(user);
    const userWithHashPassword = new this.userModel({
      ...userWithFullName,
      password: await bcrypt.hash(user.password, user.password.length),
    });
    return await userWithHashPassword.save();
  }

  async createWithExternalCredentials(
    profile: any,
    externalType: string,
  ): Promise<any> {
    if (externalType === 'facebook') {
      const newUser = new this.userModel({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        middleName: '',
        externalLogin: {
          facebook: {
            id: profile.id,
            email: profile.emails[0].value,
          },
          google: {
            id: '',
            email: '',
          },
        },
      });
      const user = await newUser.save();
      return {
        user,
        info: {
          newUser: true,
        },
      };
    }
    if (externalType === 'google') {
      const newUser = new this.userModel({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        middleName: '',
        externalLogin: {
          google: {
            id: profile.id,
            email: profile.emails[0].value,
          },
          facebook: {
            id: '',
            email: '',
          },
        },
      });
      const user = await newUser.save();
      return {
        user,
        info: {
          newUser: true,
        },
      };
    }
  }

  /** register a new user */
  async register(user: CreateUserInputDto): Promise<void> {
    await this.create(user);
  }

  async update(user: UpdateUserInputDto): Promise<void> {
    const validationSchema = Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().regex(config.usersModuleConfig.passwordRegex),
      username: Joi.string()
        .regex(config.usersModuleConfig.usernameRegex)
        .required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    });
    const { error } = Joi.validate(user, validationSchema, {
      allowUnknown: true,
    });
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    const existedUsername = await this.userModel
      .findOne({ username: user.username })
      .exec();
    if (existedUsername) {
      if (
        existedUsername.username === user.username &&
        String(existedUsername._id) !== user._id
      ) {
        throw new HttpException(
          'username has been used',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }

    const existedEmail = await this.userModel
      .findOne({ email: user.email })
      .exec();
    if (existedEmail) {
      if (
        existedEmail.email === user.email &&
        String(existedEmail._id) !== user._id
      ) {
        throw new HttpException(
          'email has been used',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }

    if (user.password) {
      await this.userModel
        .updateOne(
          { _id: user._id },
          {
            $set: {
              ...user,
              password: await bcrypt.hash(user.password, user.username.length),
            },
          },
        )
        .exec();
    } else {
      await this.userModel
        .updateOne(
          { _id: user._id },
          {
            $set: {
              ...user,
            },
          },
        )
        .exec();
    }
  }
}
