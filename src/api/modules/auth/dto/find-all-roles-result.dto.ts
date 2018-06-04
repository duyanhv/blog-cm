import { ApiModelProperty } from '@nestjs/swagger';
import { FindAllRolesDetailDto } from './find-all-roles-detail.dto';

export class FindAllRolesResultDto {
  @ApiModelProperty({
    description: 'data of roles',
    isArray: true,
    type: FindAllRolesDetailDto,
  })
  readonly data: FindAllRolesDetailDto[];

  @ApiModelProperty({ description: 'total number of roles' })
  readonly total: number;
}
