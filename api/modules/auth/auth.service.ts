import * as jwt from 'jsonwebtoken';
import { Component, HttpStatus, Inject, HttpException } from '@nestjs/common';
import { User } from './interfaces';
import { TokenInfo } from './interfaces/token-info.interface';
import { Token } from './interfaces/token.interface';
import { UsersConst } from './constants/users.constant';
import { Model } from 'mongoose';
import * as Joi from 'joi';
import * as bcrypt from 'bcrypt';
import config from '../../config';

@Component()
export class AuthService {
  constructor(
    @Inject(UsersConst.UserModelToken) private readonly userModel: Model<User>,
  ) {}

  /** login using user name & password */
  async login(payload: {
    username: string;
    password: string;
  }): Promise<TokenInfo> {
    const validationSchema = Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const { error } = Joi.validate(payload, validationSchema);
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    const existedUser = await this.userModel
      .findOne({ username: payload.username })
      .exec();
    if (!existedUser) {
      throw new HttpException(
        'Username or password is not correct',
        HttpStatus.NOT_FOUND,
      );
    } else {
      const comparePasswordResult = await bcrypt.compare(
        payload.password,
        existedUser.password,
      );
      if (!comparePasswordResult) {
        throw new HttpException(
          'Username or password is not correct',
          HttpStatus.NOT_FOUND,
        );
      }

      return await this.createToken(existedUser);
    }
  }

  /** refresh token */
  async refreshToken(token: string): Promise<TokenInfo> {
    let oldTokenData: Token;
    try {
      oldTokenData = jwt.verify(token, config.auth.secret) as any;
    } catch {
      throw new HttpException('Invalid token', HttpStatus.BAD_REQUEST);
    }

    if (oldTokenData && oldTokenData.exp && oldTokenData.exp < Math.round(new Date().getTime() / 1000)) {
      throw new HttpException('Token expired', HttpStatus.UNAUTHORIZED);
    }

    const user = await this.userModel
      .findOne({ username: oldTokenData.username })
      .select(
        ['_id username', 'email', 'fullName', 'permissions', 'language'].join(
          ' ',
        ),
      )
      .exec();
    
    return this.createToken(user as User);
  }

  /** create a new token */
  private async createToken(user: User): Promise<TokenInfo> {
    // todo: get permissions from roles
    const permissions = user.permissions;

    const tokenData: Token = {
      id: user._id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      permissions,
      language: user.language,
    };
    const expiresIn = config.auth.expiresIn;
    const token = jwt.sign(tokenData, config.auth.secret, { expiresIn });
    return {
      expiresIn,
      token,
    };
  }
}
