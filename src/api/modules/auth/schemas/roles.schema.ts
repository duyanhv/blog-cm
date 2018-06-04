import * as mongoose from 'mongoose';
import { addAuditSchema } from '../../../core/helpers';

const RolesSchema = new mongoose.Schema(
  addAuditSchema({
    name: String,
    normalizedName: String,
    permissions: Array,
    isDefault: Boolean,
  }),
);

export { RolesSchema };
