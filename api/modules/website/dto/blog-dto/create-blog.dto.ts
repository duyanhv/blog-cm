import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBlogInputDto {
  @ApiModelProperty({ description: 'title' })
  readonly title: string;

  @ApiModelProperty({ description: 'subtitle' })
  readonly subtitle: string;

  @ApiModelProperty({ description: 'author' })
  readonly author: string;

  @ApiModelProperty({ description: 'tags' })
  readonly tags: Array<string>;

  @ApiModelProperty({ description: 'content' })
  readonly content: string;

  @ApiModelProperty({ description: 'imageSrc' })
  readonly imageSrc: string;

  @ApiModelProperty({ description: 'viewCount' })
  readonly viewCount: number;

  @ApiModelProperty({ description: 'postRating' })
  readonly postRating: number;

  @ApiModelProperty({ description: 'postRating' })
  readonly previewContent: string;
}
