import { ApiModelProperty } from '@nestjs/swagger';

export class FindCompanyDetailDto {
  @ApiModelProperty({ description: 'company name' })
  readonly companyname: string;

  @ApiModelProperty({ description: 'telephone' })
  readonly telephone: string;

  @ApiModelProperty({ description: 'streetline1' })
  readonly streetline1: string;

  @ApiModelProperty({ description: 'streetline2' })
  readonly streetline2: string;

  @ApiModelProperty({ description: 'city' })
  readonly city: string;

  @ApiModelProperty({ description: 'state' })
  readonly state: string;

  @ApiModelProperty({ description: 'zipcode' })
  readonly zipcode: string;

  @ApiModelProperty({ description: 'country' })
  readonly country: string;

  @ApiModelProperty({ description: 'logo' })
  readonly logo: string;

  @ApiModelProperty({ description: 'facebookurl' })
  readonly facebookurl: string;

  @ApiModelProperty({ description: 'twitterurl' })
  readonly twitterurl: string;

  @ApiModelProperty({ description: 'googleplusurl' })
  readonly googleplusurl: string;

  @ApiModelProperty({ description: 'linkedidurl' })
  readonly linkedidurl: string;
}
