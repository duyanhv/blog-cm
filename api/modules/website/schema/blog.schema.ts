import * as mongoose from 'mongoose';
import { addAuditSchema } from '../../../core/helpers';

const BlogSchema = new mongoose.Schema(
  addAuditSchema({
    title: String,
    subtitle: String,
    author: String,
    tags: Array,
    content: String,
    imageSrc: String,
    viewCount: Number,
    postRating: Number,
    deactivate: {
      type: Boolean,
      default: false,
    },
    postCreatedAt: {
      type: Date,
      default: Date.now(),
    }
  }),
);

export { BlogSchema };
