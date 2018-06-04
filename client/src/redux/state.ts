import { ProfileState } from './profile';
import { AppSettingsState } from './app-settings';
import { LoginPageState } from './ui/login-page';
import { MainPageState } from './ui/main-page';
import { RolePageState } from './ui/role-page';
import { UserListPageState } from './ui/user-list-page';
import { CompanyPageState } from './ui/company-page';
import { ProfilePageState } from './ui/profile-page';
import { UploadImagePageState } from './ui/upload-image-page';
import BlogPageState from './ui/blog-page/state';

interface AppState {
  appSettings: AppSettingsState;
  profile: ProfileState;
  ui: {
    loginPage: LoginPageState;
    mainPage: MainPageState;
    rolePage: RolePageState;
    userListPage: UserListPageState;
    companyPage: CompanyPageState;
    profilePage: ProfilePageState;
    uploadImgPage: UploadImagePageState;
    blogPage: BlogPageState;
  };
}

export { AppState };
