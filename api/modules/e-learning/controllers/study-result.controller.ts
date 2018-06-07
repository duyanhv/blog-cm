import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Post, Body, Req, HttpStatus } from '@nestjs/common';
import { StudyResultService } from '../services/study-result.service';
import { GetAttendanceRecordInputDto } from '../dto/get-attendance-record-input.dto';

@ApiUseTags('Study Result')
@Controller('study-result')
export class StudyResultController {
  constructor(private readonly studyResultService: StudyResultService) {}

  @Post('attendance-record')
  @ApiOperation({
    title: 'Get Attendance Record',
    description: 'Get Attendance Record of student based on Student Code',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Get Attendance Record Success',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  async getAttendanceRecord(@Body() body: GetAttendanceRecordInputDto, @Req() req: any): Promise<void> {
    await this.studyResultService.getAttendanceRecord(body, req);
  }

  @Post('grade-book')
  async getGradeBook(): Promise<void> {
    //
  }
}