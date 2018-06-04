import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateFilenameDto {
  @ApiModelProperty({ description: 'image id' })
  readonly imageId: string;

  @ApiModelProperty({ description: 'new filename' })
  readonly newName: string;
}
