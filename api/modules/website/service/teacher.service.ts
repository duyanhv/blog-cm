import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import * as Joi from 'joi';
import { TeacherConst } from '../constants/teacher.constant';
import { Model, Query } from 'mongoose';
import { Teacher } from '../interfaces';
import { FindTeachersResultDto, FindTeachersInputDto, CreateTeacherInputDto, FindTeachersDetailDto } from '../dto';

@Component()
export class TeacherService {
  constructor(
    @Inject(TeacherConst.TeacherModelToken)
    private readonly teacherModel: Model<Teacher>,
  ) {}

  addQuery(query: FindTeachersInputDto): Query<any> {
    return query.subject
      ? this.teacherModel
          .find(
            query.name
              ? {  
                  normalizedFullName: {$regex: `^${query.name}`, $options: 'i'},
                }
              : {},
          )
          .where({ subject: query.subject })
      : this.teacherModel.find(
          query.name
            ? {
                normalizedFullName: {
                  $regex: `^${query.name}`,
                  $options: 'i',
                },
              }
            : {},
        );
  }

  async find(query: FindTeachersInputDto): Promise<FindTeachersResultDto> {
    const totalPromise = await this.addQuery(query)
      .count()
      .exec();

    const teachersPromise = await this.addQuery(query)
      .sort((query.asc as any) === 'true' ? query.sortBy : `-${query.sortBy}`)
      .skip((query.pageNumber - 1) * query.pageSize)
      .limit(query.pageSize)
      .select('_id firstName lastName email phone dob subject isActive')
      .exec();

    const [total, data] = await Promise.all([totalPromise, teachersPromise]);
    
    return {
      total,
      data,
    };
  }

  async create(body: CreateTeacherInputDto): Promise<FindTeachersDetailDto> {
    // validate body
    const validationSchema = Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      dob: Joi.string().required(),
      subject: Joi.string().required(),
    });
    const { error } = Joi.validate(body, validationSchema, {
      allowUnknown: true,
    });
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    // check email exist
    const existedEmail = await this.teacherModel
      .findOne({
        email: body.email,
      })
      .exec();
    if (existedEmail) {
      throw new HttpException('Email Has Been Used', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    // add fullname && normalized fullname

    // save to db

    // return result
    return;
  }
}