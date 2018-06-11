import { Module } from '@nestjs/common';
import { AppSettingsController } from './appSettings.controller';
import { AppSettingsService } from './appSettings.service';

@Module({
  providers: [AppSettingsService],
  controllers: [AppSettingsController],
  imports: [],
  exports: [],
})
export class AppSettingsModule {}
