import { Inject, HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { Model, Query } from 'mongoose';
import * as Joi from 'joi';
import { Role } from './interfaces';
import { RolesConst } from './constants/roles.constant';
import {
  FindAllRolesResultDto,
  CreateRoleInputDto,
  FindAllRolesQueryDto,
  FindAllRolesDetailDto,
} from './dto';
import { UpdateRoleInputDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @Inject(RolesConst.RoleModelToken) private readonly roleModel: Model<Role>,
  ) {}

  addNormalizedName = (role: CreateRoleInputDto) => {
    const normalizedName = role.name.toLocaleLowerCase();
    return {
      ...role,
      normalizedName,
    };
  }

  addPermissionsQuery(query: FindAllRolesQueryDto): Query<any> {
    return query.permissions
      ? this.roleModel
          .find(
            query.name
              ? { name: { $regex: `^${query.name}`, $options: 'i' } }
              : {},
          )
          .where({ permissions: { $all: query.permissions } })
      : this.roleModel.find(
          query.name
            ? { name: { $regex: `^${query.name}`, $options: 'i' } }
            : {},
        );
  }

  async find(query: FindAllRolesQueryDto): Promise<FindAllRolesResultDto> {
    const totalPromise: any = this.addPermissionsQuery(query)
      .count()
      .exec();

    const dataPromise: any = this.addPermissionsQuery(query)
      .sort((query.asc as any) === 'true' ? query.sortBy : `-${query.sortBy}`)
      .skip((query.pageIndex - 1) * query.itemPerPageCount)
      .limit(Number(query.itemPerPageCount))
      .exec();

    const [total, data] = await Promise.all([totalPromise, dataPromise]);

    return {
      total,
      data,
    };
  }

  async create(role: CreateRoleInputDto): Promise<FindAllRolesDetailDto> {
    const validateRoleSchema = Joi.object().keys({
      name: Joi.string().required(),
      isDefault: Joi.boolean().required(),
      permissions: Joi.required(),
      createdAt: Joi.date(),
    });
    const { error } = Joi.validate(role, validateRoleSchema, {
      allowUnknown: true,
    });
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    const existedRole = await this.roleModel
      .findOne({ name: role.name })
      .exec();
    if (existedRole) {
      throw new HttpException(
        'role name has been used',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newRole = new this.roleModel(this.addNormalizedName(role));
    return await newRole.save();
  }

  async update(updateInfo: UpdateRoleInputDto): Promise<void> {
    const validateRoleSchema = Joi.object().keys({
      _id: Joi.string().required(),
      name: Joi.string().required(),
      isDefault: Joi.boolean().required(),
      permissions: Joi.required(),
    });
    const { error } = Joi.validate(updateInfo, validateRoleSchema, {
      allowUnknown: true,
    });
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    const existedRole = await this.roleModel
      .findOne({ name: updateInfo.name })
      .exec();
    if (existedRole && String(existedRole._id) !== updateInfo._id) {
      throw new HttpException(
        'role name has been used',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    await this.roleModel
      .updateOne(
        { _id: updateInfo._id },
        {
          $set: {
            name: updateInfo.name,
            normalizedName: updateInfo.name.toLocaleLowerCase(),
            permissions: updateInfo.permissions,
            isDefault: updateInfo.isDefault,
            lastModifiedBy: updateInfo.lastModifiedBy,
            lastModifiedAt: updateInfo.lastModifiedAt,
          },
        },
      )
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.roleModel.findByIdAndRemove(id).exec();
  }
}
