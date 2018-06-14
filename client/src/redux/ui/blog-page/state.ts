import { IFindBlogDetailDto } from '../../../service-proxies/service-proxies';

interface BlogPageState {
  data: IFindBlogDetailDto[];
  isBusy: boolean;
  errorMessage: string;
  deactivateStatus: string;
  searchByTitleData: IFindBlogDetailDto[];
  showComponent: string;
  showEditModal: boolean;
}
export default BlogPageState;
