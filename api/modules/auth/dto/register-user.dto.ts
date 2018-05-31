import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterUserInputDto {
  @ApiModelProperty() readonly username: string;

  @ApiModelProperty() readonly password: string;

  @ApiModelProperty() readonly firstName: string;

  @ApiModelProperty() readonly middleName: string;

  @ApiModelProperty() readonly lastName: string;

  @ApiModelProperty() readonly email: string;
}
