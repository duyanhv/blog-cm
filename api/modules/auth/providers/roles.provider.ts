import { Connection } from 'mongoose';
import { RolesSchema } from '../schemas/roles.schema';
import { RolesConst } from '../constants/roles.constant';
import config from '../../../config';

export const rolesProviders = [
  {
    provide: RolesConst.RoleModelToken,
    useFactory: (connection: Connection) =>
      connection.model('role', RolesSchema),
    inject: [config.database.mongoConnectionToken],
  },
];
