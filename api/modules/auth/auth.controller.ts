import { Controller, Post, HttpStatus, Get, Body } from '@nestjs/common';
import {
  ApiUseTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { LoginUserInputDto, TokenInfoDto, RegisterUserInputDto } from './dto';
import { AuthService } from './auth.service';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiResponseMessageConstants } from '../../core/constants';
import { User } from './interfaces';
import { UsersService } from './users.service';

@Controller('auth')
@ApiUseTags('auth')
@ApiBearerAuth()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  @ApiOperation({
    title: 'Login with username & password',
    description: 'Login with username & password',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Login successfully',
    type: TokenInfoDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ApiResponseMessageConstants.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Username or password is not correct',
  })
  async login(@Body() payload: LoginUserInputDto): Promise<TokenInfoDto> {
    return await this.authService.login(payload);
  }

  @Post('refreshToken')
  @ApiOperation({
    title: 'Get new token',
    description: 'Get new token',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Refresh successfully',
    type: TokenInfoDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ApiResponseMessageConstants.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  async refreshToken(@Body() payload: RefreshTokenDto): Promise<TokenInfoDto> {
    return await this.authService.refreshToken(payload.token);
  }

  @Get('loginWithGoogle')
  @ApiOperation({
    title: 'Google Authentication',
    description: 'Authentication with your Google account',
  })
  async loginWithGoogle(): Promise<void> {
    // toto : implement
  }

  @Get('loginWithGoogleCallback')
  async loginWithGoogleCallback(): Promise<void> {
    // toto : implement
  }

  @Get('loginWithFacebook')
  @ApiOperation({
    title: 'Facebook Authentication',
    description: 'Authentication with your Facebook account',
  })
  async loginWithFacebook(): Promise<void> {
    // toto : implement
  }

  @Get('loginWithFacebookCallback')
  async loginWithFacebookCallback(): Promise<void> {
    // toto : implement
  }

  @Post('register')
  @ApiOperation({ title: 'Register user', description: 'Register a new user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ApiResponseMessageConstants.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: ApiResponseMessageConstants.EntityAlreadyExists('User'),
  })
  async register(@Body() user: RegisterUserInputDto): Promise<void> {
    await this.usersService.register(user as User);
  }
}
