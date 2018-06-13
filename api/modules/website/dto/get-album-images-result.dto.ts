import { ApiModelProperty } from '@nestjs/swagger';
import { GetAlbumsDetailDto } from '.';

export class GetAlbumImagesResultDto {
  @ApiModelProperty({description: 'all images of an album', type: GetAlbumsDetailDto, isArray: true})
  readonly data: GetAlbumsDetailDto[];
}