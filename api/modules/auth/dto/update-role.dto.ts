import { ApiModelProperty } from '@nestjs/swagger';
import { HasModificationAuditInfo } from '../../../core/interfaces';

export class UpdateRoleInputDto implements HasModificationAuditInfo {
  @ApiModelProperty({ description: 'role id' })
  readonly _id: string;

  @ApiModelProperty({ description: 'role name' })
  readonly name: string;

  @ApiModelProperty({ description: 'permissions' })
  readonly permissions: string[];

  @ApiModelProperty({ description: 'is default' })
  readonly isDefault: boolean;

  lastModifiedBy: string;
  lastModifiedAt: Date;
}
