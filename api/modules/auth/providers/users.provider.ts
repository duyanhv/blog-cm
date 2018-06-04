import { Connection } from 'mongoose';
import { UsersSchema } from '../schemas/users.schema';
import { UsersConst } from '../constants/users.constant';
import config from '../../../config';

export const usersProviders = [
  {
    provide: UsersConst.UserModelToken,
    useFactory: (connection: Connection) =>
      connection.model('user', UsersSchema),
    inject: [config.database.mongoConnectionToken],
  },
];
