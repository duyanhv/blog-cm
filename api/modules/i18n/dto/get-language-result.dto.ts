import { ApiModelProperty } from '@nestjs/swagger';

export class GetLanguageResultDto {
  @ApiModelProperty({ description: 'get language result' })
  readonly result: any;
}
