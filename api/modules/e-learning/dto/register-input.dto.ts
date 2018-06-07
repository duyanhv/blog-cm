import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

class RegisterInputDto {
  @ApiModelProperty({description: 'student name'})
  readonly studentName: string;

  @ApiModelProperty({description: 'student phone number'})
  readonly studentPhoneNumber: string;

  @ApiModelProperty({description: 'student email'})
  readonly studentEmail: string;

  @ApiModelProperty({description: 'student birthday', type: Date})
  readonly studentBirthday: Date;

  @ApiModelProperty({description: 'student address'})
  readonly studentAddress: string;

  @ApiModelProperty({description: 'phone number of parents'})
  readonly parentPhoneNumber: string;

  @ApiModelProperty({description: 'register subjects', type: String, isArray: true})
  readonly registerSubjects: string[];

  @ApiModelPropertyOptional({description: 'note'})
  readonly note?: string;
}

export {
  RegisterInputDto,
};