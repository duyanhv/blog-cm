import { ApiModelProperty } from '@nestjs/swagger';

export class FindAllUsersDetailDto {
  @ApiModelProperty({ description: 'user id' })
  readonly _id: string;

  @ApiModelProperty({ description: 'username' })
  readonly username: string;

  @ApiModelProperty({ description: 'first name' })
  readonly firstName: string;

  @ApiModelProperty({ description: 'middle name', required: false })
  readonly middleName: string;

  @ApiModelProperty({ description: 'last name' })
  readonly lastName: string;

  @ApiModelProperty({ description: 'full name' })
  readonly fullName: string;

  @ApiModelProperty({ description: 'email' })
  readonly email: string;

  @ApiModelProperty({ description: 'role', type: Array })
  readonly roles: string[];

  @ApiModelProperty({ description: 'permissions', type: Array })
  readonly permissions: string[];

  @ApiModelProperty({ description: 'is active' })
  readonly isActive: boolean;
}
