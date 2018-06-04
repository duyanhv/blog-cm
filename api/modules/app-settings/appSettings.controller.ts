import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { AppSettingsService } from './appSettings.service';
import { AppSettingsDto } from './dto/app-settings.dto';

@ApiUseTags('appSettings')
@Controller('appSettings')
export class AppSettingsController {
  constructor(private readonly appSettingsService: AppSettingsService) {}

  @Get('get')
  @ApiOperation({ title: 'Get App Settings', description: 'Get App Settings' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return app settings',
    type: AppSettingsDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Settings Not Found',
  })
  async getAppSettings(): Promise<AppSettingsDto> {
    return await this.appSettingsService.getAppSettings();
  }
}
