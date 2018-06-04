import * as mongoose from 'mongoose';
import config from '../../config';

export const databaseProviders = [
  {
    provide: config.database.mongoConnectionToken,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect(config.database.mongoConnectionString);
    },
  },
];
