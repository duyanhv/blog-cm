import { Component, HttpException, HttpStatus } from '@nestjs/common';
import * as path from 'path';
import * as Joi from 'joi';
import * as nodemailer from 'nodemailer';
import * as ejs from 'ejs';
import * as requestPromise from 'request-promise';
import { GetAttendanceRecordInputDto } from '../dto/get-attendance-record-input.dto';
import { VerifyCaptchaResultDto } from '../dto/verify-captcha-result.dto';

// Site key: 6Lf_SV0UAAAAABoRmARiDaHwQgC3UCNYaMO0dspa
// Secret key: 6Lf_SV0UAAAAAPUThi0szwFyrRw-Z1_L6TtuxZRI

@Component()
export class StudyResultService {
  async verifyCaptcha(captchaResponse: string, remotetip: string): Promise<VerifyCaptchaResultDto> {
    try {
      const secretKey = '6Lf_SV0UAAAAAPUThi0szwFyrRw-Z1_L6TtuxZRI';
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaResponse}&remotetip=${remotetip}`;
  
      const result = await requestPromise(verifyUrl);
    
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async sendMail(): Promise<void> {
    const smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'tienloinguyen22@gmail.com',
        pass: 'tienloi22',
      }
    });

    ejs.renderFile(path.join(__dirname, '../../../../../../static/ejs/attendance-record.ejs'), (error, str) => {
      if (error) {
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }

      const mailOptions = {
        from: 'tienloinguyen22@gmail.com',
        to : 'loinguyen@techkids.io',
        subject : 'Test Study Result',
        html: str,
      };
  
      smtpTransport.sendMail(mailOptions, (err, _response) => {
        if (err) {
          throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      });
    });
  }

  async getAttendanceRecord(
    getAttendanceRecordInput: GetAttendanceRecordInputDto,
    req: any
  ): Promise<void> {
    // Check Body
    const getAttendanceRecordSchema = Joi.object().keys({
      studentCode: Joi.string().required(),
      captchaResponse: Joi.string().required()
    });
    const validateOptions = {
      allowUnknown: false
    };
    const { error } = Joi.validate(
      getAttendanceRecordInput,
      getAttendanceRecordSchema,
      validateOptions
    );
    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    // Verify captcha
    const result = await this.verifyCaptcha(getAttendanceRecordInput.captchaResponse, req.connection.remoteAddress);
    if (!result.success) {
      throw new HttpException(result['error-codes'][0], HttpStatus.BAD_REQUEST);
    }

    // Lookup 'Attendance Infomation' in db
      //  Mock data for now

    // Generate Pdf File
      // Create a HTML template with placeholders
      // Insert info to it
      // Generate a PDF after insert info
      // Return File path ??

    // Send Email to Student's Parents
    await this.sendMail();
  }
}
