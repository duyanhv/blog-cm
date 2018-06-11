import { Document } from 'mongoose';

export interface Teacher extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullName: string;
  readonly normalizedFullname: string;
  readonly email: string;
  readonly phone: string;
  readonly dob: Date;
  readonly subject: string;
  readonly isActive: Boolean;
}