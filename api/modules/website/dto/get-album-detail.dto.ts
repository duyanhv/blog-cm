import { ApiModelProperty } from '@nestjs/swagger';

export class GetAlbumsDetailDto {
  @ApiModelProperty({description: 'image id'})
  readonly _id: string;

  @ApiModelProperty({description: 'file name'})
  readonly filename: string;
  
  @ApiModelProperty({description: 'hyperlink'})
  readonly hyperlink: string;
}