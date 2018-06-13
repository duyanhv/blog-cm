import { ApiModelProperty } from '@nestjs/swagger';

export class FindParentIdMenuConfigDto {
    @ApiModelProperty({
        description: '_id',
    })
    readonly _id: string;

    @ApiModelProperty({
        description: 'name',
    })
    readonly name: string;
}
