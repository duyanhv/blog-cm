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
import { TeachersController } from './controller/teacher.controller';
import { TeachersService } from './service/teacher.service';
import { teacherProviders } from './providers/teacher.provider';
import { menuConfigProviders } from './providers/menuconfig.provider';
import { MenuConfigService } from './service/menuconfig.service';
import { MenuConfigController } from './controller/menuconfig.controller';

@Module({
  providers: [
    ...companyProviders,
    ...imageProviders,
    ...blogProviders,
    ...teacherProviders,
    ...menuConfigProviders,
    CompanyService,
    UploadImageService,
    BlogService,
    TeachersService,
    MenuConfigService,
  ],
  controllers: [CompanyController, UploadImagesController, BlogController, TeachersController, MenuConfigController],
  imports: [DatabaseModule],
  exports: [],
})
export class CompanyModule {}
