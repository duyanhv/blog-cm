import {
  Controller,
  HttpStatus,
  Body,
  Get,
  Post,
  Delete,
  Req,
  Patch,
  Query,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiUseTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { RolesService } from './roles.service';
import {
  FindAllRolesResultDto,
  CreateRoleInputDto,
  FindAllRolesQueryDto,
  FindAllRolesDetailDto,
} from './dto';
import { ApiResponseMessageConstants } from '../../core/constants';
import { Authorize } from '../../core/auth/authorize.decorator';
import UserPermissions from './constants/user-permissions.constant';
import { UpdateRoleInputDto } from './dto';
import {
  addCreationAuditInfo,
  addModificationAuditInfo,
  validatePagination,
} from '../../core/helpers';

import { DeleteRoleDto } from './dto/delete-role.dto';

@ApiUseTags('roles')
@ApiBearerAuth()
@Controller('roles')
export class RolesController {
  public static readonly EntityName: string = 'Role';

  constructor(private readonly rolesService: RolesService) {}

  @Get('find')
  @ApiOperation({ title: 'Find roles', description: 'Find roles' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return information of selected roles',
    type: FindAllRolesResultDto,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  @Authorize(UserPermissions.ROLES_VIEW)
  async find(
    @Query() query: FindAllRolesQueryDto,
  ): Promise<FindAllRolesResultDto> {
    const validatedQuery = validatePagination<FindAllRolesQueryDto>(query);
    return await this.rolesService.find(validatedQuery);
  }

  @Post('create')
  @ApiOperation({ title: 'Create role', description: 'Create a new role' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Return information of new created role',
    type: FindAllRolesDetailDto,
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
      RolesController.EntityName,
    ),
  })
  @Authorize(UserPermissions.ROLES_CREATE)
  async create(
    @Req() req: any,
    @Body() role: CreateRoleInputDto,
  ): Promise<FindAllRolesDetailDto> {
    return await this.rolesService.create(addCreationAuditInfo(req, role));
  }

  @Patch('update')
  @ApiOperation({
    title: 'Update role',
    description: 'Update role name and permissions',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update Role Success',
    type: FindAllRolesDetailDto,
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
      RolesController.EntityName,
    ),
  })
  @Authorize(UserPermissions.ROLES_EDIT)
  async update(
    @Req() req: any,
    @Body() updateInfo: UpdateRoleInputDto,
  ): Promise<void> {
    await this.rolesService.update(addModificationAuditInfo(req, updateInfo));
  }

  @ApiOperation({ title: 'Delete role', description: 'Delete a role' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Delete Success',
    type: FindAllRolesDetailDto,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @Authorize(UserPermissions.ROLES_DELETE)
  @Delete('delete')
  async delete(@Body() deleteInfo: DeleteRoleDto): Promise<void> {
    await this.rolesService.delete(deleteInfo.id);
  }
}
