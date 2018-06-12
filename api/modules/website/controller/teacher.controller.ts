import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Req,
  HttpStatus,
  Patch,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TeachersService } from '../service/teacher.service';
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
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get('find')
  @ApiOperation({
    title: 'Find Teachers',
    description: 'Find Teachers by Name or Subject',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return user uploaded images',
    type: FindTeachersResultDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  async findTeachers(
    @Query() query: FindTeachersInputDto
  ): Promise<FindTeachersResultDto> {
    return await this.teachersService.find(query);
  }

  @Get('getTeacherDetail/:teacherId')
  @ApiOperation({
    title: 'Get Teacher Info',
    description: 'Get Teacher Info',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return Teacher Info',
    type: FindTeachersDetailDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not Found',
  })
  async getTeacherDetail(
    @Param('teacherId') teacherId: string
  ): Promise<FindTeachersDetailDto> {
    return await this.teachersService.getTeacherDetail(teacherId);
  }

  @Post('create')
  @ApiOperation({
    title: 'Create Teacher',
    description: 'Create A New Teacher',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create Teacher Success',
    type: FindTeachersDetailDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  async createTeacher(
    @Body() body: CreateTeacherInputDto
  ): Promise<FindTeachersDetailDto> {
    return await this.teachersService.create(body);
  }

  @Patch('activate')
  @ApiOperation({
    title: 'Active Teacher',
    description: 'Active Teacher',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Active Teacher Success',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  async activateTeacher(@Query() query: ActivateTeacherDto): Promise<void> {
    return await this.teachersService.activateTeacher(query.teacherId);
  }

  @Patch('deactivate')
  @ApiOperation({
    title: 'Deactive Teacher',
    description: 'Deactive Teacher',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Deactive Teacher Success',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  async deactivateTeacher(@Query() query: ActivateTeacherDto): Promise<void> {
    return await this.teachersService.deactivateTeacher(query.teacherId);
  }

  @Patch('update')
  @ApiOperation({
    title: 'Update Teacher Info',
    description: 'Update Teacher Info',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update Teacher Info Success',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  async updateTeacherInfo(@Body() body: UpdateTeacherInfoDto): Promise<void> {
    return await this.teachersService.updateTeacherInfo(body);
  }

  @Post('uploadProfilePicture')
  @ApiOperation({
    title: 'Update Teacher Profile Picture',
    description: 'Update Teacher Profile Picture',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update Teacher Profile Picture Success',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @UseInterceptors(
    FileInterceptor('teacherProfilePicture', { dest: 'temporary/' })
  )
  @Authorize()
  async uploadProfilePicture(
    @UploadedFile() file: any,
    @Req() req: any
  ): Promise<void> {
    return await this.teachersService.uploadProfilePicture(file, req);
  }
}
