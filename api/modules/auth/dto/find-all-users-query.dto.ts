import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { PageableQuery } from '../../../core/interfaces';
import config from '../../../config';

export class FindAllUsersQueryDto implements PageableQuery {
  @ApiModelPropertyOptional({ description: 'username or fullname' })
  name?: string;

  @ApiModelPropertyOptional({ description: 'role' })
  role?: string;

  @ApiModelPropertyOptional({
    description: 'page index, default value is 0',
    default: 0,
  })
  readonly pageIndex: number;

  @ApiModelPropertyOptional({
    default: config.app.defaultItemPerPageCount,
    description: `request item, default value is ${
      config.app.defaultItemPerPageCount
    }`,
  })
  readonly itemPerPageCount: number;

  @ApiModelProperty({ description: 'sort field', default: 'username' })
  sortBy: string;

  @ApiModelProperty({ description: 'sort order', default: true })
  asc: boolean;
}
