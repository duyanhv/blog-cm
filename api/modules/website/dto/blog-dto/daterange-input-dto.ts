import { ApiModelProperty } from '@nestjs/swagger';

export class DateRangeInputDto {
    @ApiModelProperty({ description: 'DateRangeInputDto' })
    readonly dateRangeInput: string[];
}
