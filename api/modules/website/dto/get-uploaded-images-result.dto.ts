import { ApiModelProperty } from '@nestjs/swagger';
import { GetUploadedImagesDetailDto } from './get-uploaded-images-detail.dto';

export class GetUploadedImagesResultDto {
  @ApiModelProperty({
    description: 'get all uploaded images info',
    isArray: true,
    type: GetUploadedImagesDetailDto,
  })
  readonly result: GetUploadedImagesDetailDto[];

  @ApiModelProperty({ description: 'all albums', isArray: true, type: String })
  readonly albums: string[];
}
