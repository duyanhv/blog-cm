import { SwaggerException } from '../service-proxies/service-proxies';
import _ from 'lodash';

const getErrorMessage = (error: SwaggerException): string => {
  if (Number.isInteger(error.status)) {
    return _.startCase(error.response);
  }
  return _.startCase(error.message);
};

export default getErrorMessage;
