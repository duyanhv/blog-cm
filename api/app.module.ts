import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AppSettingsModule } from './modules/app-settings/appSettings.module';
import { I18nModule } from './modules/i18n/i18n.module';
import { CompanyModule } from './modules/website/company.module';
import { ELearningModule } from './modules/e-learning/e-learning.module';

@Module({
  components: [],
  controllers: [],
  imports: [AuthModule, AppSettingsModule, I18nModule, CompanyModule, ELearningModule],
})
export class AppModule {}
