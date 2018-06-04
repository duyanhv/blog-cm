import { ApiModelProperty } from '@nestjs/swagger';

export class GetLanguageDto {
  @ApiModelProperty({ description: 'language' })
  readonly lng: string;
}
