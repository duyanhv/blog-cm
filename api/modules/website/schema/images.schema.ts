import * as mongoose from 'mongoose';

const ImagesSchema = new mongoose.Schema({
  user: { type: String, ref: 'User' },
  filename: String,
  extension: String,
  album: String,
});

export { ImagesSchema };
