import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { CreateUserInputDto } from './dto/create-user.dto';
import {
  ApiResponse,
  ApiUseTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  FindAllUsersQueryDto,
  FindAllUsersResultDto,
  FindAllUsersDetailDto,
} from './dto';
import { UsersService } from './users.service';
import { FindUserResultDto } from './dto/find-user-result.dto';
import { ApiResponseMessageConstants } from '../../core/constants';
import validatePagination from '../../core/helpers/validate-pagination';
import { Authorize } from '../../core/auth/authorize.decorator';
import UserPermissions from './constants/user-permissions.constant';
import { UpdateUserInputDto } from './dto/update-user.dto';

@ApiUseTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  public static readonly EntityName: string = 'User';
  constructor(private readonly usersService: UsersService) {}

  @Get('find')
  @ApiOperation({ title: 'Find users', description: 'Find users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return information of selected users',
    type: FindAllUsersResultDto,
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
  async find(
    @Query() query: FindAllUsersQueryDto,
  ): Promise<FindAllUsersResultDto> {
    const validatedQuery = validatePagination<FindAllUsersQueryDto>(query);
    return await this.usersService.find(validatedQuery);
  }

  @Get('findByUsername/:username')
  @ApiOperation({
    title: 'Find an user by username',
    description: 'Find user by username',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return information of selected users',
    type: FindUserResultDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ApiResponseMessageConstants.EntityNotFound(
      UsersController.EntityName,
    ),
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  async findByUsername(
    @Param('username') username: string,
  ): Promise<FindUserResultDto> {
    return await this.usersService.findByUsername(username);
  }

  @Get('findByEmail/:email')
  @ApiOperation({
    title: 'Find an user by email',
    description: 'Find user by email',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return information of selected users',
    type: FindUserResultDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ApiResponseMessageConstants.EntityNotFound(
      UsersController.EntityName,
    ),
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  async findByEmail(@Param('email') email: string): Promise<FindUserResultDto> {
    return await this.usersService.findByEmail(email);
  }

  @Post('create')
  @ApiOperation({ title: 'Create user', description: 'Create a new user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully created.',
    type: FindAllUsersDetailDto,
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
      UsersController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_CREATE)
  async create(
    @Body() user: CreateUserInputDto,
  ): Promise<FindAllUsersDetailDto> {
    return await this.usersService.create(user);
  }

  @Patch('update')
  @ApiOperation({ title: 'Update user', description: 'Update user info' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully updated.',
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
      UsersController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_EDIT)
  async update(@Body() user: UpdateUserInputDto): Promise<void> {
    await this.usersService.update(user);
  }

  @Patch(':username/deactivate')
  @ApiOperation({ title: 'Deactivate user', description: 'Deactivate user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully deactivated.',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  @Authorize(UserPermissions.USERS_EDIT)
  async deactivate(@Param('username') _username: string): Promise<void> {
    // TODO implement
  }

  @Patch(':username/unlock')
  @ApiOperation({ title: 'Unlock user', description: 'Unlock user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The profile has been successfully unlocked.',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ApiResponseMessageConstants.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  @Authorize(UserPermissions.USERS_EDIT)
  async unlock(@Param('username') _username: string): Promise<void> {
    // TODO implement
  }
}
