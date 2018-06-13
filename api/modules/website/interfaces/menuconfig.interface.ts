import { IsAuditable } from '../../../core/interfaces';
import { Document } from 'mongoose';

export interface MenuConfig extends Document, IsAuditable {
    readonly order: number;
    readonly hyperlink: string;
    readonly submenu?: MenuConfig[];
    readonly name: string;
    readonly parentid?: object[];
    readonly activationStatus: boolean;
}
