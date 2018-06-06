import { Module } from '@nestjs/common';
import { CompanyController } from './controller/company.controller';
import { CompanyService } from './service/company.service';
import { companyProviders } from './providers/company.provider';
import { imageProviders } from './providers/image.provider';
import { DatabaseModule } from '../../core/databases/database.module';
import { UploadImagesController } from './controller/upload-images.controller';
import { UploadImageService } from './service/upload-images.service';
import { blogProviders } from './providers/blog.provider';
import { BlogService } from './service/blog.service';
import { BlogController } from '.';

@Module({
  components: [
    ...companyProviders,
    ...imageProviders,
    ...blogProviders,
    CompanyService,
    UploadImageService,
    BlogService,
  ],
  controllers: [CompanyController, UploadImagesController, BlogController],
  imports: [DatabaseModule],
})
export class CompanyModule {}
