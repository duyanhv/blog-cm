import { TokenKey } from './redux';
import { getAuthService } from './service-proxies/service.provider';
// import { RefreshTokenDto } from './service-proxies/service-proxies';
import { updateUrlSettings, loadAppSettings } from './redux/app-settings';
import { updateUserProfile } from './redux/profile';
import { store } from './redux/store';
import loadInitialLanguage from './i18n';
import { RefreshTokenDto } from './service-proxies/service-proxies';

const bootstrap = async () => {
  try {
    // get api address
    const config = await (await fetch('/admin-config.json')).json();
    store.dispatch(updateUrlSettings(config.apiUrl, config.appBaseUrl));
    store.dispatch(loadAppSettings());
    const i18n = await loadInitialLanguage();

    // get token from local storage
    if (localStorage) {
      const currentToken = localStorage.getItem(TokenKey);
      if (currentToken) {
        try {
          const authService = getAuthService();
          const { token } = await authService.refreshToken(
            new RefreshTokenDto({ token: currentToken }),
          );
          store.dispatch(updateUserProfile(token, true));
        } catch (err) {
          // do nothing if token is not valid
        }
      }
    }

    return i18n;
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log('can not load configuration', err);
    return;
  }
};

export default bootstrap;
