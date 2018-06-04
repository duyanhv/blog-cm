import { ApiModelProperty } from '@nestjs/swagger';

export class DeleteRoleDto {
  @ApiModelProperty({ description: 'role id' })
  readonly id: string;
}
