import { ApiModelProperty } from '@nestjs/swagger';

export class LoginUserInputDto {
  @ApiModelProperty({ description: 'user name' })
  readonly username: string;

  @ApiModelProperty({ description: 'password' })
  readonly password: string;
}
