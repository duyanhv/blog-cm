import { ApiModelProperty } from '@nestjs/swagger';
import { HasModificationAuditInfo } from '../../../../core/interfaces';

export class UpdateBlogDetailDto implements HasModificationAuditInfo {
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

  readonly lastModifiedAt: Date;
  readonly lastModifiedBy: string;
}
