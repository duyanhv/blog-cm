import { Document } from 'mongoose';
import { IsAuditable } from '../../../core/interfaces';

export interface User extends Document, IsAuditable {
  readonly username: string;
  readonly password: string;
  readonly firstName: string;
  readonly middleName: string;
  readonly lastName: string;
  readonly email: string;
  readonly fullName: string;
  readonly normalizedFullName: string;
  readonly externalLogin: {
    google: {
      id: string;
      email: string;
    };
    facebook: {
      id: string;
      email: string;
    };
  };
  readonly permissions: string[];
  readonly roles: string[];
  readonly isActive: boolean;
  readonly language: string;
}
