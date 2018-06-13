import { ApiModelProperty } from '@nestjs/swagger';
import { GetAlbumsDetailDto } from './get-album-detail.dto';

export class GetAlbumsResultDto {
  @ApiModelProperty({description: 'album name'})
  readonly albumName: string;

  @ApiModelProperty({description: 'img belong to this album', type: GetAlbumsDetailDto, isArray: true})
  imgList: GetAlbumsDetailDto[];
}