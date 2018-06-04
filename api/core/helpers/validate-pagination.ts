import { PageableQuery } from '../interfaces';
import * as _ from 'lodash';
import config from '../../config';

const validatePagination = <T extends PageableQuery>(query: T) => {
  const pageIndex = query.pageIndex
    ? _.parseInt(query.pageIndex.toString())
    : 0;
  const itemPerPageCount = query.itemPerPageCount
    ? _.parseInt(query.itemPerPageCount.toString())
    : config.app.defaultItemPerPageCount;
  return {
    ...(query as any),
    itemPerPageCount,
    pageIndex,
  } as T;
};

export default validatePagination;
