import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { TeacherService } from '../service/teacher.service';
import { FindTeachersResultDto, FindTeachersInputDto, FindTeachersDetailDto, CreateTeacherInputDto } from '../dto';

@ApiUseTags('Teacher Controller')
@ApiBearerAuth()
@Controller('teachers')
export class UploadImagesController {
  constructor(private readonly teachersService: TeacherService) {}

  @Get('find')
  async findTeachers(@Query() query: FindTeachersInputDto): Promise<FindTeachersResultDto> {
    return await this.teachersService.find(query);
  }

  @Post('create')
  async createTeacher(@Body() body: CreateTeacherInputDto): Promise<FindTeachersDetailDto> {
    return await this.teachersService.create(body);
  }
}