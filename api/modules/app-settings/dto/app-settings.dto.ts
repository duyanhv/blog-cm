export class AppSettingsDto {
  readonly maxPageSize: number;

  readonly gridPage: {
    defaultPageSize: number;
    pageSizes: number[];
  };
}
