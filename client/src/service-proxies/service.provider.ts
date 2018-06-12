import {
  UsersServiceProxy,
  RolesServiceProxy,
  AuthServiceProxy,
  AppSettingsServiceProxy,
  CompanyServiceProxy,
  I18nServiceProxy,
  ProfilesServiceProxy,
  UploadImagesServiceProxy,
  BlogServiceProxy,
  TeachersServiceProxy,
} from './service-proxies';
import { store } from '../redux/store';

const getAuthHttp = (): any => {
  return {
    fetch: (url, option): Promise<Response> => {
      if (store.getState().profile.isLoggedIn) {
        // option.headers.set(
        //   'Authorization',
        //   `Bearer ${store.getState().profile.token}`,
        // );

        option.headers.Authorization = `Bearer ${store.getState().profile.token}`;
      }
      return window.fetch(url, option);
    },
  };
};

const getUserService = (): UsersServiceProxy => {
  return new UsersServiceProxy(
    store.getState().appSettings.apiUrl,
    getAuthHttp(),
  );
};

const getAuthService = () => {
  return new AuthServiceProxy(
    store.getState().appSettings.apiUrl,
    getAuthHttp(),
  );
};

const getRoleService = (): RolesServiceProxy => {
  return new RolesServiceProxy(
    store.getState().appSettings.apiUrl,
    getAuthHttp(),
  );
};

const getCompanyService = (): CompanyServiceProxy => {
  return new CompanyServiceProxy(
    store.getState().appSettings.apiUrl,
    getAuthHttp(),
  );
};

const getProfileService = (): ProfilesServiceProxy => {
  return new ProfilesServiceProxy(
    store.getState().appSettings.apiUrl,
    getAuthHttp(),
  );
};

const getUploadImageService = (): UploadImagesServiceProxy => {
  return new UploadImagesServiceProxy(
    store.getState().appSettings.apiUrl,
    getAuthHttp(),
  );
};

const getBlogService = (): BlogServiceProxy => {
  return new BlogServiceProxy(
    store.getState().appSettings.apiUrl,
    getAuthHttp(),
  );
};

const getTeacherService = (): TeachersServiceProxy => {
  return new TeachersServiceProxy(
    store.getState().appSettings.apiUrl,
    getAuthHttp(),
  );
};

const getI18nService = (): I18nServiceProxy => {
  return new I18nServiceProxy(store.getState().appSettings.apiUrl);
};

const getAppSettingService = (): AppSettingsServiceProxy => {
  return new AppSettingsServiceProxy(store.getState().appSettings.apiUrl);
};

export {
  getUserService,
  getAuthService,
  getRoleService,
  getAppSettingService,
  getCompanyService,
  getI18nService,
  getProfileService,
  getUploadImageService,
  getBlogService,
  getTeacherService,
};
