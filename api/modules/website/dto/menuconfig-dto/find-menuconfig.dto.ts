import { ApiModelProperty } from '@nestjs/swagger';
import { MenuConfig } from '../../interfaces/menuconfig.interface';

export class FindMenuConfigDto {
    @ApiModelProperty({ description: 'id' })
    readonly _id: string;

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

    @ApiModelProperty({ description: 'parentIdData' })
    readonly parentIdData?: object[];

    @ApiModelProperty({ description: 'activationStatus' })
    readonly activationStatus: boolean;
}
