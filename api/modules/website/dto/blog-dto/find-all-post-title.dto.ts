import { ApiModelProperty } from '@nestjs/swagger';

export class FindAllPostTitleDto {
  @ApiModelProperty({ description: 'Arrays of Post Title', isArray: true })
  readonly titles: string[];
}
