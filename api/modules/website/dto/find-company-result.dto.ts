import { ApiModelProperty } from '@nestjs/swagger';
import { FindCompanyDetailDto } from './find-company-detail.dto';

export class FindCompanyResultDto {
  @ApiModelProperty({
    description: 'data of company',
    isArray: false,
    type: FindCompanyDetailDto,
  })
  readonly data: FindCompanyDetailDto;
}
