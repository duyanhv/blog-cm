import { IFindBlogDetailDto } from '../../../service-proxies/service-proxies';

interface BlogPageState {
  data: IFindBlogDetailDto[];
  isBusy: boolean;
  errorMessage: string;
  deactivateStatus: string;
  searchByTitleData: IFindBlogDetailDto[];
}
export default BlogPageState;
