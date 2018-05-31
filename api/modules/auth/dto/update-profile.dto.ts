import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileInputDto {
  @ApiModelPropertyOptional() readonly firstName: string;

  @ApiModelPropertyOptional() readonly middleName: string;

  @ApiModelPropertyOptional() readonly lastName: string;

  @ApiModelPropertyOptional() readonly password: string;
}
