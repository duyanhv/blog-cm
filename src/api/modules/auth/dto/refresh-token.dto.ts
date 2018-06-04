import { ApiModelProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiModelProperty({ description: 'token' })
  readonly token: string;
}
