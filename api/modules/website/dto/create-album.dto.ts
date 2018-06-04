import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAlbumDto {
  @ApiModelProperty({ description: 'album name' })
  readonly albumName: string;
}
