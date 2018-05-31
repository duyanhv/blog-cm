import { ApiModelProperty } from '@nestjs/swagger';

export class GetProfileResultDto {
  @ApiModelProperty() readonly username: string;

  @ApiModelProperty() readonly firstName: string;

  @ApiModelProperty() readonly middleName: string;

  @ApiModelProperty() readonly lastName: string;

  @ApiModelProperty() readonly email: string;

  @ApiModelProperty() readonly imageSrc: string;
}
