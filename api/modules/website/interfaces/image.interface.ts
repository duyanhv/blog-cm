import { Document } from 'mongoose';

export interface Image extends Document {
  readonly user: string;
  readonly filename: string;
  readonly extension: string;
  readonly album: string;
}
