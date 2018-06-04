import { Document } from 'mongoose';
import { IsAuditable } from '../../../core/interfaces';

export interface Role extends Document, IsAuditable {
  readonly name: string;
  readonly permissions: string[];
  readonly isDefault: boolean;
}
