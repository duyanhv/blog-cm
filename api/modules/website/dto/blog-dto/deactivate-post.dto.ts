import { ApiModelProperty } from '@nestjs/swagger';

export class DeactivatePostDto {
  @ApiModelProperty({ description: 'deactivate' })
  readonly deactivate: boolean;

  @ApiModelProperty({ description: 'lastModifiedAt' })
  readonly lastModifiedAt?: Date;

  @ApiModelProperty({ description: 'lastModifiedBy' })
  readonly lastModifiedBy?: string;
}
