import {
  Controller,
  HttpStatus,
  Body,
  Post,
  Req,
  Patch,
  Get,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { CreateCompanyInputDto } from '../dto/create-company.dto';
import {
  ApiResponse,
  ApiUseTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { ApiResponseMessageConstants } from '../../../core/constants';

import { Authorize } from '../../../core/auth/authorize.decorator';

import { CompanyService } from '../service/company.service';
import UserPermissions from '../../auth/constants/user-permissions.constant';
import { UpdateCompanyInputDto } from '../dto/update-company.dto';
import { addModificationAuditInfo } from '../../../core/helpers';

@ApiUseTags('company')
@ApiBearerAuth()
@Controller('company')
export class CompanyController {
  public static readonly EntityName: string = 'Company';

  constructor(private readonly companyService: CompanyService) {}

  @Post('create')
  @ApiOperation({ title: 'Create company', description: 'Create new company' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The company has been successfully created.',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ApiResponseMessageConstants.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: ApiResponseMessageConstants.EntityAlreadyExists(
      CompanyController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_CREATE)
  async create(@Body() company: CreateCompanyInputDto): Promise<void> {
    await this.companyService.create(company as CreateCompanyInputDto);
  }

  @Patch('update')
  @ApiOperation({
    title: 'Update company infomation',
    description: 'Update company infomation',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Update company infomation Success',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ApiResponseMessageConstants.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ApiResponseMessageConstants.EntityNotFound(
      CompanyController.EntityName,
    ),
  })
  @Authorize(UserPermissions.ROLES_EDIT)
  async update(
    @Req() req: any,
    @Body() updateInfo: UpdateCompanyInputDto,
  ): Promise<void> {
    await this.companyService.update(addModificationAuditInfo(req, updateInfo));
  }

  @Get('find')
  @ApiOperation({ title: 'Find company', description: 'Find company' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return information of company',
    type: 'any',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  @Authorize(UserPermissions.USERS_VIEW)
  async find(): Promise<any> {
    return await this.companyService.find();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('logo', { dest: 'temporary/' }))
  @ApiOperation({ title: 'Upload Image', description: 'Upload Image' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Upload Successful',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  @Authorize()
  async upload(@UploadedFile() file: any, @Req() req: any): Promise<void> {
    await this.companyService.upload(file, req);
  }

  @Get('getCompanyLogo')
  @ApiOperation({ title: 'Upload Image', description: 'Upload Image' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Upload Successful',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  async getCompanyLogo(@Res() res: any): Promise<any> {
    return await this.companyService.getCompanyLogo(res);
  }
}
