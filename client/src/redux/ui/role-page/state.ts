import { FindAllRolesDetailDto } from '../../../service-proxies/service-proxies';

interface RolePageState {
  roleModalVisible: boolean;
  isBusy: boolean;
  data: FindAllRolesDetailDto[];
  total: number;
  pageSize: number;
  pageNumber: number;
  currentRole: any;
  filter?: string[];
  search?: string;
  sortBy: string;
  asc: boolean;
  openTabKey: string;
  errorMessage: string;
}

export default RolePageState;
