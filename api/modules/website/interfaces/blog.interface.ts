import { IsAuditable } from '../../../core/interfaces';
import { Document } from 'mongoose';

export interface Blog extends Document, IsAuditable {
  readonly title: string;
  readonly subtitle: string;
  readonly author: string;
  readonly tags: string[];
  readonly content: string;
  readonly imageSrc: string;
  readonly viewCount: number;
  readonly postRating: number;
  readonly deactivate: boolean;
  readonly postCreatedAt: Date;
  readonly previewContent: string;
}
