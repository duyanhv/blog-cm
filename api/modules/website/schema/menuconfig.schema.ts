import * as mongoose from 'mongoose';
import { addAuditSchema } from '../../../core/helpers';

const MenuConfigSchema = new mongoose.Schema(
    addAuditSchema({
        order: Number,
        hyperlink: String,
        submenu: {
            type: Array,
            default: [],
        },
        name: String,
        parentid: {
            type: Array,
            default: [],
        },
        activationStatus: {
            type: Boolean,
            default: true,
        }
    }),
);

export { MenuConfigSchema };
