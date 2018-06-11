import { ApiModelProperty } from '@nestjs/swagger';

export class FindTeachersDetailDto {
  @ApiModelProperty({ description: 'teacher id' })
  readonly _id: string;

  @ApiModelProperty({ description: 'teacher first name' })
  readonly firstName: string;

  @ApiModelProperty({ description: 'teacher last name' })
  readonly lastName: string;

  @ApiModelProperty({ description: 'teacher full name' })
  readonly fullName: string;

  @ApiModelProperty({ description: 'teacher email' })
  readonly email: string;

  @ApiModelProperty({ description: 'teacher phone number' })
  readonly phone: string;

  @ApiModelProperty({ description: 'teacher date of birth', type: Date })
  readonly dob: Date;

  @ApiModelProperty({ description: 'subject that the teacher teach'})
  readonly subject: string;

  @ApiModelProperty({ description: 'is the teacher active ?', type: Boolean })
  readonly isActive: Boolean;
}