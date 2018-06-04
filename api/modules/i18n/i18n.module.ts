import { Module } from '@nestjs/common';
import { I18nController } from './i18n.controller';
import { I18nService } from './i18n.service';

@Module({
  components: [I18nService],
  controllers: [I18nController],
  imports: [],
  exports: [],
})
export class I18nModule {}
