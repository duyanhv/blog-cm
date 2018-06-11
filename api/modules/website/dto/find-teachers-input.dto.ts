import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class FindTeachersInputDto {
  @ApiModelPropertyOptional({ description: 'search by name' })
  readonly name?: string;

  @ApiModelPropertyOptional({ description: 'filter by subject' })
  readonly subject?: string;

  @ApiModelProperty({ description: 'page number', default: 1 })
  readonly pageNumber: number;

  @ApiModelProperty({ description: 'page size', default: 10 })
  readonly pageSize: number;

  @ApiModelProperty({ description: 'sort by', default: 'fullName'})
  readonly sortBy: string;

  @ApiModelProperty({ description: 'sort order asc', default: true})
  readonly asc: Boolean;
}