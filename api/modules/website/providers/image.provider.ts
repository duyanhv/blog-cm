import { Connection } from 'mongoose';
import { ImagesSchema } from '../schema/images.schema';
import { ImageConst } from '../constants/image.constant';
import config from '../../../config';

export const imageProviders = [
  {
    provide: ImageConst.ImageModelToken,
    useFactory: (connection: Connection) =>
      connection.model('image', ImagesSchema),
    inject: [config.database.mongoConnectionToken],
  },
];
