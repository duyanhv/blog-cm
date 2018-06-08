import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import * as Joi from 'joi';
import { TeacherConst } from '../constants/teacher.constant';
import { Model, Query } from 'mongoose';
import { Teacher } from '../interfaces';
import { FindTeachersResultDto, FindTeachersInputDto, CreateTeacherInputDto, FindTeachersDetailDto, UpdateTeacherInfoDto } from '../dto';
import * as _ from 'lodash';
import * as path from 'path';
import * as fs from 'fs';
import { processImage } from '../../../core/helpers';

@Component()
export class TeacherService {
  constructor(
    @Inject(TeacherConst.TeacherModelToken)
    private readonly teacherModel: Model<Teacher>,
  ) {}

  addFullName = (teacher: CreateTeacherInputDto) => {
    const normalizedFullName = [teacher.firstName, teacher.lastName]
      .join(' ')
      .toLocaleLowerCase();
    const fullName = [teacher.firstName, teacher.lastName].join(' ');
    return {
      ...teacher,
      normalizedFullName,
      fullName,
    };
  }

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
    try {
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
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
      throw new HttpException('Email Has Been Used', HttpStatus.BAD_REQUEST);
    }

    try {
      // add fullname && normalized fullname
      const teacherWithFullname = this.addFullName(body);

      // save to db
      const newTeacher = new this.teacherModel(teacherWithFullname);
      return await newTeacher.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async activateTeacher(teacherId: string): Promise<void> {
    // check teacherId
    if (!teacherId) {
      throw new HttpException('ID not found', HttpStatus.BAD_REQUEST);
    }
    
    // check if teacher exist
    const existedTeacher = await this.teacherModel.findOne({_id: teacherId}).exec();
    if (!existedTeacher) {
      throw new HttpException('Teacher Not Found', HttpStatus.BAD_REQUEST);
    }

    // activate teacher
    if (existedTeacher && existedTeacher.isActive) {
      throw new HttpException('Teacher Has Already Activated', HttpStatus.BAD_REQUEST);
    } else if (existedTeacher && !existedTeacher.isActive) {
      try {
        await this.teacherModel.updateOne({_id: teacherId}, {isActive: true}).exec();
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }  
    }
  }

  async deactivateTeacher(teacherId: string): Promise<void> {
    // check teacherId
    if (!teacherId) {
      throw new HttpException('ID not found', HttpStatus.BAD_REQUEST);
    }
    
    // check if teacher exist
    const existedTeacher = await this.teacherModel.findOne({_id: teacherId}).exec();
    if (!existedTeacher) {
      throw new HttpException('Teacher Not Found', HttpStatus.BAD_REQUEST);
    }

    // deactivate teacher
    if (existedTeacher && !existedTeacher.isActive) {
      throw new HttpException('Teacher Has Already Deactivated', HttpStatus.BAD_REQUEST);
    } else if (existedTeacher && existedTeacher.isActive) {
      try {
        await this.teacherModel.updateOne({_id: teacherId}, {isActive: false}).exec();
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  async updateTeacherInfo(body: UpdateTeacherInfoDto): Promise<void> {
    // check body
    const validationSchema = Joi.object().keys({
      _id: Joi.string().required(),
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

    // check teacherId
    if (!body._id) {
      throw new HttpException('ID not found', HttpStatus.BAD_REQUEST);
    }

    // check if teacher exist
    const existedTeacher = await this.teacherModel.findOne({_id: body._id}).exec();
    if (!existedTeacher) {
      throw new HttpException('Teacher Not Found', HttpStatus.BAD_REQUEST);
    }

    // updateinfo
    try {
      await this.teacherModel.updateOne({_id: body._id}, _.pick(body, ['firstName', 'lastName', 'email', 'phone', 'dob', 'subject'])).exec();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }  
  }

  async uploadProfilePicture(file: any, req: any): Promise<void> {
    if (!file) {
      throw new HttpException('File Not Found', HttpStatus.BAD_REQUEST);
    } else if (!req.userId) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      // Generate new filename
      const newFilePath: string = path.join(
        __dirname,
        `../../../../../static/img/teacher-profile-pictures/${req.body.teacherId}.jpg`,
      );

      // Resize image and save image to public folder
      await processImage(`${file.destination}${file.filename}`, newFilePath);

      // Delete temporary file
      fs.unlinkSync(file.path);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}