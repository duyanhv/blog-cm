import { Connection } from 'mongoose';
import { CompanySchema } from '../schema/company.schema';
import { CompanyConst } from '../constants/company.constant';
import config from '../../../config';

export const companyProviders = [
  {
    provide: CompanyConst.CompanyModelToken,
    useFactory: (connection: Connection) =>
      connection.model('company', CompanySchema),
    inject: [config.database.mongoConnectionToken],
  },
];
