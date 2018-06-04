import {
  FindAllUsersDetailDto,
  FindAllRolesDetailDto,
} from '../../../service-proxies/service-proxies';

interface UserListPageState {
  addUserModalVisible: boolean;
  isBusy: boolean;
  data: FindAllUsersDetailDto[];
  total: number;
  pageNumber: number;
  pageSize: number;
  filter?: string;
  search?: string;
  sortBy: string;
  asc: boolean;
  roles: FindAllRolesDetailDto[];
  errorMessage: string;
  openTabKey: string;
  isUsernameExist: boolean | undefined;
  isEmailExist: boolean | undefined;
  currentUser: any;
}

export default UserListPageState;
