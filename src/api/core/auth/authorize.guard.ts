import {
  Guard,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ReflectMedatataType, ApiResponseMessageConstants } from '../constants';
import * as jwt from 'jsonwebtoken';
import { AuthorizedPermission } from './authorize.decorator';
import config from '../../config';
import { Observable } from 'rxjs';

@Guard()
export class AuthorizeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>  {
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
    let payload: any;
    try {
      const token = req.headers.authorization.split(' ')[1];
      payload = jwt.verify(token, config.auth.secret) as any;
    } catch (error) {
      throw new HttpException(
        ApiResponseMessageConstants.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }

    req.username = payload.username;
    req.userId = payload.id;

    if (payload.exp < Math.round(new Date().getTime() / 1000)) {
      throw new HttpException('Token expired', HttpStatus.UNAUTHORIZED);
    }
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
