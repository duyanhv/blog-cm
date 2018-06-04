import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateUserInputDto {
  @ApiModelProperty({ description: 'user id' })
  readonly _id: string;

  @ApiModelProperty({ description: 'username' })
  readonly username: string;

  @ApiModelPropertyOptional({ description: 'password' })
  readonly password: string;

  @ApiModelProperty({ description: 'email' })
  readonly email: string;

  @ApiModelProperty({ description: 'firstName' })
  readonly firstName: string;

  @ApiModelProperty({ description: 'middleName' })
  readonly middleName: string;

  @ApiModelProperty({ description: 'lastName' })
  readonly lastName: string;

  @ApiModelProperty({ description: 'roles', type: Array })
  readonly roles: string[];

  @ApiModelProperty({ description: 'permissions', type: Array })
  readonly permissions: string[];

  @ApiModelProperty({ description: 'is active' })
  readonly isActive: boolean;
}
