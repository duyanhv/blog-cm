import { ApiModelProperty } from '@nestjs/swagger';
import { MenuConfig } from '../../interfaces/menuconfig.interface';

export class CreateMenuConfigDto {
    @ApiModelProperty({ description: 'order' })
    readonly order: number;

    @ApiModelProperty({ description: 'hyperlink' })
    readonly hyperlink: string;

    @ApiModelProperty({ description: 'submenu' })
    readonly submenu?: MenuConfig[];

    @ApiModelProperty({ description: 'name' })
    readonly name: string;

    @ApiModelProperty({ description: 'parentid' })
    readonly parentid?: object[];
}
