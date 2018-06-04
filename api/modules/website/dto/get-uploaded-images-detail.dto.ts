import { ApiModelProperty } from '@nestjs/swagger';

export class GetUploadedImagesDetailDto {
  @ApiModelProperty({ description: 'image id' })
  readonly _id: string;

  @ApiModelProperty({ description: 'hyperlink' })
  readonly hyperlink: string;

  @ApiModelProperty({ description: 'file name' })
  readonly filename: string;
}
