import { ApiUseTags } from '@nestjs/swagger';
import { Controller, Post, Body, Req } from '@nestjs/common';
import { StudyResultService } from '../services/study-result.service';
import { GetAttendanceRecordInputDto } from '../dto/get-attendance-record-input.dto';

@ApiUseTags('Study Result')
@Controller('study-result')
export class StudyResultController {
  constructor(private readonly studyResultService: StudyResultService) {}

  @Post('attendance-record')
  async getAttendanceRecord(@Body() body: GetAttendanceRecordInputDto, @Req() req: any): Promise<void> {
    await this.studyResultService.getAttendanceRecord(body, req);
  }

  @Post('grade-book')
  async getGradeBook(): Promise<void> {
    //
  }
}