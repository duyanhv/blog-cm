import { ApiModelProperty } from '@nestjs/swagger';
import { FindBlogDetailDto } from '.';

export class FindAllBlogPostsDto {
  @ApiModelProperty({
    description: 'Arrays of FindBlogDetailDto',
    isArray: true,
    type: FindBlogDetailDto,
  })
  readonly data: FindBlogDetailDto[];
}
