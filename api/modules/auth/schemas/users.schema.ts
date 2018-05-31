import * as mongoose from 'mongoose';
import { addAuditSchema } from '../../../core/helpers';

const UsersSchema = new mongoose.Schema(
  addAuditSchema({
    username: String,
    password: String,
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    fullName: String,
    normalizedFullName: String,
    externalLogin: {
      google: {
        id: String,
        email: String,
      },
      facebook: {
        id: String,
        email: String,
      },
    },
    permissions: Array,
    roles: Array,
    isActive: Boolean,
    isLocked: Boolean,
    failLoginTryCount: Number,
    emailConfirmed: Boolean,
    lastLoginTime: Date,
    language: String,
  }),
);

UsersSchema.index({ username: 1 });
UsersSchema.index({ email: 1 });

export { UsersSchema };
