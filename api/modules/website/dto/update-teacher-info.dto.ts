import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateTeacherInfoDto {
  @ApiModelProperty({description: 'teacher id'})
  readonly _id: string;

  @ApiModelProperty({description: 'first name'})
  readonly firstName: string;

  @ApiModelProperty({description: 'last name'})
  readonly lastName: string;

  @ApiModelProperty({description: 'email'})
  readonly email: string;

  @ApiModelProperty({description: 'phone number'})
  readonly phone: string;

  @ApiModelProperty({description: 'date of birth', type: Date})
  readonly dob: Date;

  @ApiModelProperty({description: 'subject'})
  readonly subject: string;
}