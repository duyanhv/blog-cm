import { ApiModelProperty } from '@nestjs/swagger';
import { HasCreationAuditInfo } from '../../../core/interfaces';

export class CreateRoleInputDto implements HasCreationAuditInfo {
  @ApiModelProperty({ description: 'role name' })
  readonly name: string;

  @ApiModelProperty({ description: 'is default' })
  readonly isDefault: boolean;

  @ApiModelProperty({ description: 'permissions' })
  readonly permissions: string[];

  readonly createdBy: string;

  readonly createdAt: Date;
}
