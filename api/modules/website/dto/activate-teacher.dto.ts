import { ApiModelProperty } from '@nestjs/swagger';

export class ActivateTeacherDto {
  @ApiModelProperty({description: 'teacher id'})
  readonly teacherId: string;
}