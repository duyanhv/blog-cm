import * as mongoose from 'mongoose';

const TeachersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  fullName: String,
  normalizedFullname: String,
  email: String,
  phone: String,
  dob: Date,
  subject: String,
  isActive: Boolean,
  description: String,
  imgSrc: String,
});

export { TeachersSchema };