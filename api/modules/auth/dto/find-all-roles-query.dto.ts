import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import config from '../../../config';
import { SortableQuery, PageableQuery } from '../../../core/interfaces';

export class FindAllRolesQueryDto implements SortableQuery, PageableQuery {
  @ApiModelPropertyOptional({ description: 'role name' })
  name?: string;

  @ApiModelPropertyOptional({ description: 'role permissions' })
  permissions?: string[];

  @ApiModelProperty({ description: 'page index', default: 0 })
  pageIndex: number;

  @ApiModelProperty({
    description: 'page size',
    default: config.app.defaultItemPerPageCount,
  })
  itemPerPageCount: number;

  @ApiModelProperty({ description: 'sort field', default: 'name' })
  sortBy: string;

  @ApiModelProperty({ description: 'sort order', default: true })
  asc: boolean;
}
