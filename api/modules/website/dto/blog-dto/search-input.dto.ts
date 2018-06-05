import { ApiModelProperty } from '@nestjs/swagger';

export class SearchInputDto {
    @ApiModelProperty({ description: 'searchInput' })
    readonly searchInput: string;
}
