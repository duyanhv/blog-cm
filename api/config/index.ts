import * as _ from 'lodash';
import defaultConfig from './default.config';
import usersModuleConfig from './modules/users.config';
import developmentConfig from './development.config';
import productionConfig from './production.config';
import eLearningConfig from './modules/e-learning.config';

const environmentConfig = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
// const environmentConfig = require('./' +
//   (process.env.NODE_ENV || 'development') +
//   '.config').default;
const config = _.merge({}, defaultConfig, usersModuleConfig, eLearningConfig, environmentConfig);
export default config;
