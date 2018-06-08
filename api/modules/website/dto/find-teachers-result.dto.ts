import { ApiModelProperty } from '@nestjs/swagger';
import { FindTeachersDetailDto } from './find-teachers-detail.dto';

export class FindTeachersResultDto {
  @ApiModelProperty({ description: 'all the result', type: FindTeachersDetailDto, isArray: true })
  readonly data: FindTeachersDetailDto[];

  @ApiModelProperty({ description: 'total record' })
  readonly total: number;

}