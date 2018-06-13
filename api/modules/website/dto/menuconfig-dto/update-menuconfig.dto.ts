import { ApiModelProperty } from '@nestjs/swagger';
import { MenuConfig } from '../../interfaces/menuconfig.interface';
import { HasModificationAuditInfo } from '../../../../core/interfaces';

export class UpdateMenuConfigDto implements HasModificationAuditInfo {
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

    lastModifiedAt: Date;
    lastModifiedBy: string;
}
