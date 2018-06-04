import i18next from 'i18next';
import { getI18nService } from '../service-proxies/service.provider';

const loadInitialLanguage = async () => {
  const i18nService = getI18nService();
  const defaultLanguage = await i18nService.getLanguage('en');

  const i18n = i18next.createInstance();
  i18n.init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: defaultLanguage.result,
      },
    },
  });

  return i18n;
};

export default loadInitialLanguage;
