import { ApiModelProperty } from '@nestjs/swagger';

export class TokenInfoDto {
  @ApiModelProperty({ description: 'token' })
  readonly token: string;

  @ApiModelProperty({ description: 'expires in (seconds)' })
  readonly expiresIn: number;
}
