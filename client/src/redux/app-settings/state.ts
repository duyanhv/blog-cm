interface AppSettingsState {
  language: string;
  isTranslating: boolean;
  apiUrl: string;
  appBaseUrl: string;
  maxPageSize: number;
  gridPage: {
    defaultPageSize: number;
    pageSizes: number[];
  };
}

export default AppSettingsState;
