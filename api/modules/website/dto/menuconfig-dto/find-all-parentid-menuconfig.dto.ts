import { ApiModelProperty } from '@nestjs/swagger';
import { FindParentIdMenuConfigDto } from './find-parentid-menuconfig.dto';

export class FindAllParentIdMenuConfigDto {
    @ApiModelProperty({
        description: 'list of parent id',
        isArray: true,
        type: FindParentIdMenuConfigDto,
    })
    readonly parentIdData: FindParentIdMenuConfigDto[];
}
