import { Connection } from 'mongoose';
import config from '../../../config';
import { MenuConfigConst } from '../constants/menuconfig.constant';
import { MenuConfigSchema } from '../schema/menuconfig.schema';

export const menuConfigProviders = [
  {
    provide: MenuConfigConst.MenuConfigModelToken,
    useFactory: (connection: Connection) =>
      connection.model('menuconfig', MenuConfigSchema),
    inject: [config.database.mongoConnectionToken],
  },
];
