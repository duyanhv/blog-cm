import { Component, Inject } from '@nestjs/common';
import { TeacherConst } from '../constants/teacher.constant';
import { Model } from 'mongoose';
import { Teacher } from '../interfaces';

@Component()
export class TeacherService {
  constructor(
    @Inject(TeacherConst.TeacherModelToken)
    private readonly teacherModel: Model<Teacher>,
  ) {}
}