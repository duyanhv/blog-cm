import { ApiModelProperty } from '@nestjs/swagger';
import { FindMenuConfigDto } from './find-menuconfig.dto';

export class FindAllMenuConfigDto {
  @ApiModelProperty({
    description: 'Arrays of FindBlogDetailDto',
    isArray: true,
    type: FindMenuConfigDto,
  })
  readonly allMenuConfigData: FindMenuConfigDto[];
}
