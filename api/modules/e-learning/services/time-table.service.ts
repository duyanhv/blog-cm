import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as GoogleSpreadsheet from 'google-spreadsheet';
import * as Joi from 'joi';
import * as moment from 'moment';
import config from '../../../config';
import { RegisterInputDto } from '../dto/register-input.dto';

@Injectable()
export class TimeTableService {
  async verifyRegisterInfo(registerInput: RegisterInputDto): Promise<void> {
    const registerSchema = Joi.object().keys({
      studentName: Joi.string().required(),
      studentEmail: Joi.string().email().required(),
      studentBirthday: Joi.date().required(),
      studentAddress: Joi.string().required(),
      parentPhoneNumber: Joi.string().required(),
      registerSubjects: Joi.array().required(),
    });
    const validateOptions = {
      allowUnknown: true
    };
    const { error } = Joi.validate(
      registerInput,
      registerSchema,
      validateOptions
    );
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }
  }

  async addToGoogleSheet(registerInput: RegisterInputDto): Promise<void> {
    const sheetKey = 1;
    const doc = new GoogleSpreadsheet('1_oDsQ5ljlVI79eOMQziwxqM3rlRR_LTpPH14sEmMkDY');
    doc.useServiceAccountAuth(config.timeTableConfig, (err) => {
      if (err) {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }

      doc.addRow(
        sheetKey,
        {
          'Họ Tên HS': registerInput.studentName,
          'SĐT Học Sinh': registerInput.parentPhoneNumber,
          'Email': registerInput.studentEmail,
          'Ngày Sinh': moment(registerInput.studentBirthday).format('DD/MM/YYYY'),
          'Địa Chỉ': registerInput.studentAddress,
          'SĐT Phụ Huynh': registerInput.parentPhoneNumber,
          'Môn Học': registerInput.registerSubjects.join(', '),
          'Ghi Chú': registerInput.note ? registerInput.note : '',
        },
        (error, _row) => {
          if (err) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
          }
        });
    });
  }

  async register(registerInput: RegisterInputDto): Promise<void> {
    // Verified Input (Postman User)
    await this.verifyRegisterInfo(registerInput);

    // Add To GoogleSheet
    await this.addToGoogleSheet(registerInput);
  }

}
