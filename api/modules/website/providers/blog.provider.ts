import { BlogConst } from '../constants/blog.constant';
import { Connection } from 'mongoose';
import { BlogSchema } from '../schema/blog.schema';
import config from '../../../config';

export const blogProviders = [
  {
    provide: BlogConst.BlogModelToken,
    useFactory: (connection: Connection) =>
      connection.model('blog', BlogSchema),
    inject: [config.database.mongoConnectionToken],
  },
];
