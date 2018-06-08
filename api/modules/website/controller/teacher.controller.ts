import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { TeacherService } from '../service/teacher.service';

@ApiUseTags('Teacher Controller')
@ApiBearerAuth()
@Controller('teachers')
export class UploadImagesController {
  constructor(private readonly teachersService: TeacherService) {}
}