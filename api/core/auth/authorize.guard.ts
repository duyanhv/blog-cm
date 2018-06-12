import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ReflectMedatataType, ApiResponseMessageConstants } from '../constants';
import * as jwt from 'jsonwebtoken';
import { Token } from '../../modules/auth/interfaces/token.interface';
import { AuthorizedPermission } from './authorize.decorator';
import config from '../../config';

@Injectable()
export class AuthorizeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const handler = context.getHandler();
  
    const permission = this.reflector.get<string>(
      ReflectMedatataType.Permission,
      handler,
    );
    if (!permission) {
      return true;
    }

    if (!req.headers.authorization) {
      throw new HttpException(
        ApiResponseMessageConstants.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
    let payload: Token;
    try {
      const token = req.headers.authorization.split(' ')[1];
      payload = jwt.verify(token, config.auth.secret) as any;
    } catch (error) {
      throw new HttpException(
        ApiResponseMessageConstants.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (payload && payload.exp && payload.exp < Math.round(new Date().getTime() / 1000)) {
      throw new HttpException('Token expired', HttpStatus.UNAUTHORIZED);
    }

    req.username = payload.username;
    req.userId = payload.id;

    if (permission === AuthorizedPermission) {
      return true;
    }

    if (
      !payload.permissions ||
      payload.permissions.indexOf(permission) === -1
    ) {
      return false;
    }
    return true;
  }
}
