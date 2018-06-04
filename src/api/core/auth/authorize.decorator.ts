import { ReflectMetadata } from '@nestjs/common';
import { ReflectMedatataType } from '../constants';

export const AuthorizedPermission = 'Authorized';
export const Authorize = (permission?: string) =>
  ReflectMetadata(
    ReflectMedatataType.Permission,
    permission || AuthorizedPermission,
  );
