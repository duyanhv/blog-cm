import { Module } from '@nestjs/common';
import { CompanyController } from './controller/company.controller';
import { CompanyService } from './service/company.service';
import { companyProviders } from './providers/company.provider';
import { imageProviders } from './providers/image.provider';
import { DatabaseModule } from '../../core/databases/database.module';
import { UploadImagesController } from './controller/upload-images.controller';
import { UploadImageService } from './service/upload-images.service';

@Module({
  components: [
    ...companyProviders,
    ...imageProviders,
    CompanyService,
    UploadImageService,
  ],
  controllers: [CompanyController, UploadImagesController],
  imports: [DatabaseModule],
})
export class CompanyModule {}
