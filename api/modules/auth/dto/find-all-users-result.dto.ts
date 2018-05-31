import { ApiModelProperty } from '@nestjs/swagger';
import { FindAllUsersDetailDto } from './find-all-users-detail.dto';
import { PageableResult } from '../../../core/interfaces';

export class FindAllUsersResultDto
  implements PageableResult<FindAllUsersDetailDto> {
  @ApiModelProperty({
    description: 'data of users',
    isArray: true,
    type: FindAllUsersDetailDto,
  })
  readonly data: FindAllUsersDetailDto[];

  @ApiModelProperty({ description: 'total number of users' })
  readonly total: number;
}
