import { Injectable } from '@nestjs/common';
import config from '../../config';
import { AppSettingsDto } from './dto/app-settings.dto';

@Injectable()
export class AppSettingsService {
  async getAppSettings(): Promise<AppSettingsDto> {
    return {
      maxPageSize: config.app.maxPageSize,
      gridPage: {
        defaultPageSize: config.app.gridPage.defaultPageSize,
        pageSizes: config.app.gridPage.pageSizes,
      },
    };
  }
}
