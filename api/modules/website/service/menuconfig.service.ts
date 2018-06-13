import { Inject, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMenuConfigDto, FindMenuConfigDto } from '../dto/menuconfig-dto';
import { MenuConfigConst } from '../constants/menuconfig.constant';
import { Model } from 'mongoose';
import * as Joi from 'joi';
import { MenuConfig } from '../interfaces/menuconfig.interface';
import { UpdateMenuConfigDto } from '../dto/menuconfig-dto/update-menuconfig.dto';
import { ObjectId } from 'bson';
import { FindAllMenuConfigDto } from '../dto/menuconfig-dto/find-all-menuconfig.dto';
import { FindAllParentIdMenuConfigDto } from '../dto/menuconfig-dto/find-all-parentid-menuconfig.dto';
// const fs = require('fs');
// const path = require('path');

// TODO: move fixedPath to config
// const fixedMenuConfigPath = path.join(__dirname, '..', '..', '..', '..', 'public', 'menu-config', 'menu-config.json');
// '../../../../public/menu-config/menu-config.json';
@Injectable()
export class MenuConfigService {
    constructor(
        @Inject(MenuConfigConst.MenuConfigModelToken) private menuConfigModel: Model<MenuConfig>,
    ) { }

    async findAllMenuConfig(): Promise<FindAllMenuConfigDto> {
        const allMenuConfigData = await this.menuConfigModel
            .find()
            .exec();
        return {
            allMenuConfigData
        };
    }

    async createMenuConfig(menuConfig: CreateMenuConfigDto): Promise<void> {
        // await fs.writeFile(fixedMenuConfigPath, JSON.stringify(menuConfig, null, 2), (error) => {
        //     if (error) {
        //         // tslint:disable-next-line:no-console
        //         console.log(error);
        //     }
        // });

        const validationSchema = Joi.object().keys({
            order: Joi.number().required(),
            hyperlink: Joi.string().required(),
            name: Joi.string().required(),
        });

        const { error } = Joi.validate(menuConfig, validationSchema, {
            allowUnknown: true,
        });
        if (error) {
            throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
        }

        const newMenuConfig = new this.menuConfigModel({
            ...menuConfig,
        });
        await newMenuConfig.save();
    }

    async findParentIdMenuConfig(): Promise<FindAllParentIdMenuConfigDto> {
        const parentIdData = await this.menuConfigModel
            .find(
                {
                    parentid: [],
                },
                {
                    name: 1
                }
            )
            .exec();
        return { parentIdData };
    }

    async findMenuConfigById(menuConfigId: string): Promise<FindMenuConfigDto> {
        const menuConfigData = await this.menuConfigModel.findById({
            _id: new ObjectId(menuConfigId),
        });

        const parentIdData = await this.menuConfigModel
            .find(
                {
                    parentid: [],
                    _id: {
                        $ne: new ObjectId(menuConfigId)
                    }

                },
                { name: 1 }
            )
            .exec();

        return {
            _id: menuConfigData!._id,
            name: menuConfigData!.name,
            hyperlink: menuConfigData!.hyperlink,
            submenu: menuConfigData!.submenu,
            order: menuConfigData!.order,
            parentid: menuConfigData!.parentid,
            activationStatus: menuConfigData!.activationStatus,
            parentIdData,
        };
    }

    async deactivateMenuConfig(menuConfigId: string): Promise<void> {
        await this.menuConfigModel
            .update(
                { _id: new ObjectId(menuConfigId) },
                {
                    $set: {
                        activationStatus: false,
                    },
                },
                {
                    upsert: true,
                },
        )
            .exec();
    }

    async activateMenuConfig(menuConfigId: string): Promise<void> {
        await this.menuConfigModel
            .update(
                { _id: new ObjectId(menuConfigId) },
                {
                    $set: {
                        activationStatus: true,
                    },
                },
                {
                    upsert: true,
                },
        )
            .exec();
    }

    async updateMenuConfigById(menuConfigId: string, editedMenuConfig: UpdateMenuConfigDto): Promise<void> {
        // const validateRoleSchema = Joi.object().keys({
        //     order: Joi.number().required(),
        //     hyperlink: Joi.string().required(),
        //     name: Joi.string().required(),
        // });
        // const { error } = Joi.validate(editedMenuConfig, validateRoleSchema, {
        //     allowUnknown: true,
        // });
        // if (error) {
        //     throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
        // }

        await this.menuConfigModel
            .update(
                { _id: new ObjectId(menuConfigId) },
                {
                    $set: {
                        ...editedMenuConfig,
                        activationStatus: true,
                    },
                },
                {
                    upsert: true,
                },
        )
            .exec();
    }
}
