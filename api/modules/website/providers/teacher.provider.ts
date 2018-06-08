import { Connection } from 'mongoose';
import { TeachersSchema } from '../schema/teacher.schema';
import { TeacherConst } from '../constants/teacher.constant';
import config from '../../../config';

export const teacherProviders = [
  {
    provide: TeacherConst.TeacherModelToken,
    useFactory: (connection: Connection) =>
      connection.model('teacher', TeachersSchema),
    inject: [config.database.mongoConnectionToken],
  },
];