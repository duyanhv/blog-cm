import { Document } from 'mongoose';
import { IsAuditable } from '../../../core/interfaces';

export interface Company extends Document, IsAuditable {
  readonly companyname: string;
  readonly telephone: string;
  readonly streetline1: string;
  readonly streetline2: string;
  readonly city: string;
  readonly state: string;
  readonly zipcode: string;
  readonly country: string;
  readonly logo: string;
  readonly facebookurl: string;
  readonly twitterurl: string;
  readonly googleplusurl: string;
  readonly linkedidurl: string;
}
