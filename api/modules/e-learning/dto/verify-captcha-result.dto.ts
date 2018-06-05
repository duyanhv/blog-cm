import { ApiModelProperty } from '@nestjs/swagger';

class VerifyCaptchaResultDto {
  @ApiModelProperty({description: 'verify captcha success or not'})
  readonly success:  boolean;

  @ApiModelProperty({description: 'short description of errors', isArray: true, type: String})
  readonly 'error-codes':  string[];
}

export {
  VerifyCaptchaResultDto
};