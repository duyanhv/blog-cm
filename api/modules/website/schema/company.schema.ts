import * as mongoose from 'mongoose';
import { addAuditSchema } from '../../../core/helpers';

const CompanySchema = new mongoose.Schema(
  addAuditSchema({
    companyname: String,
    telephone: String,
    streetline1: String,
    streetline2: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    logo: String,
    facebookurl: String,
    twitterurl: String,
    googleplusurl: String,
    linkedidurl: String,
  }),
);

export { CompanySchema };
