import { IFindBlogDetailDto } from '../../../service-proxies/service-proxies';

interface BlogPageState {
  data: IFindBlogDetailDto[];
  isBusy: boolean;
  errorMessage: string;
  deactivateStatus: string;
}
export default BlogPageState;
