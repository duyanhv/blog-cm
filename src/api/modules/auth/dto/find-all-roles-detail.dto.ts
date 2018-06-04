import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class FindAllRolesDetailDto {
  @ApiModelProperty({ description: 'role id' })
  readonly _id: string;

  @ApiModelProperty({ description: 'role name' })
  readonly name: string;

  @ApiModelProperty({ description: 'is default' })
  readonly isDefault: boolean;

  @ApiModelProperty({ description: 'permissions', isArray: true, type: String })
  readonly permissions: string[];

  @ApiModelProperty({ description: 'created by' })
  readonly createdBy: string;

  @ApiModelProperty({
    description: 'created at',
    type: String,
    format: 'date-time',
  })
  readonly createdAt: Date;

  @ApiModelPropertyOptional({ description: 'last modified by' })
  readonly lastModifiedBy: string;

  @ApiModelPropertyOptional({
    description: 'last modified at',
    type: String,
    format: 'date-time',
  })
  readonly lastModifiedAt: Date;
}
