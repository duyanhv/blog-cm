import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Req
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { TeacherService } from '../service/teacher.service';
import {
  FindTeachersResultDto,
  FindTeachersInputDto,
  FindTeachersDetailDto,
  CreateTeacherInputDto,
  ActivateTeacherDto,
  UpdateTeacherInfoDto
} from '../dto';
import { Authorize } from '../../../core/auth/authorize.decorator';

@ApiUseTags('Teacher Controller')
@ApiBearerAuth()
@Controller('teachers')
export class UploadImagesController {
  constructor(private readonly teachersService: TeacherService) {}

  @Get('find')
  async findTeachers(
    @Query() query: FindTeachersInputDto
  ): Promise<FindTeachersResultDto> {
    return await this.teachersService.find(query);
  }

  @Post('create')
  async createTeacher(
    @Body() body: CreateTeacherInputDto
  ): Promise<FindTeachersDetailDto> {
    return await this.teachersService.create(body);
  }

  @Put('activate')
  async activateTeacher(@Query() query: ActivateTeacherDto): Promise<void> {
    return await this.teachersService.activateTeacher(query.teacherId);
  }

  @Put('deactivate')
  async deactivateTeacher(@Query() query: ActivateTeacherDto): Promise<void> {
    return await this.teachersService.deactivateTeacher(query.teacherId);
  }

  @Put('update')
  async updateTeacherInfo(@Body() body: UpdateTeacherInfoDto): Promise<void> {
    return await this.teachersService.updateTeacherInfo(body);
  }

  @Post('uploadProfilePicture')
  @UseInterceptors(
    FileInterceptor('teacher-profile-picture', { dest: 'temporary/' })
  )
  @Authorize()
  async uploadProfilePicture(
    @UploadedFile() file: any,
    @Req() req: any
  ): Promise<void> {
    return await this.teachersService.uploadProfilePicture(file, req);
  }
}
