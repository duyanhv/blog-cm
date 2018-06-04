import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateUserInputDto {
  @ApiModelProperty({ description: 'username' })
  readonly username: string;

  @ApiModelProperty({ description: 'password' })
  readonly password: string;

  @ApiModelProperty({ description: 'first name' })
  readonly firstName: string;

  @ApiModelPropertyOptional({ description: 'middle name' })
  readonly middleName: string;

  @ApiModelProperty({ description: 'last name' })
  readonly lastName: string;

  @ApiModelProperty({ description: 'email' })
  readonly email: string;

  @ApiModelProperty({ description: 'roles', type: Array })
  readonly roles: Array<string>;

  @ApiModelProperty({ description: 'permissions', type: Array })
  readonly permissions: Array<string>;
}
