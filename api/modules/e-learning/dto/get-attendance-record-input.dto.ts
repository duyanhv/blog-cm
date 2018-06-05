import { ApiModelProperty } from '@nestjs/swagger';

class GetAttendanceRecordInputDto {
  @ApiModelProperty({ description: 'student code'})
  readonly studentCode: string;

  @ApiModelProperty({ description: 'recaptcha response'})
  readonly captchaResponse: string;
}

export {
  GetAttendanceRecordInputDto
};