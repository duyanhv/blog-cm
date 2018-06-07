import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { TimeTableService } from '../services/time-table.service';
import { RegisterInputDto } from '../dto/register-input.dto';

@ApiUseTags('Time Table')
@Controller('time-table')
export class TimeTableController {
  constructor(private readonly timeTableService: TimeTableService) {}

  @Post('register')
  @ApiOperation({
    title: 'Register Class',
    description: 'Register for 1/more Class',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Register Class Success',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  async register(@Body() body: RegisterInputDto): Promise<void> {
    await this.timeTableService.register(body);
  }
}