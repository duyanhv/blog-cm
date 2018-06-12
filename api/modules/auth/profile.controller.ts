import {
  Controller,
  Get,
  Body,
  HttpStatus,
  Patch,
  Param,
  Post,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Req,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiUseTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { GetProfileResultDto, UpdateProfileInputDto } from './dto';
import { ApiResponseMessageConstants } from '../../core/constants';
import { Authorize } from '../../core/auth/authorize.decorator';
import { ProfileService } from './profile.service';

@ApiUseTags('profiles')
@ApiBearerAuth()
@Controller('profiles')
export class ProfileController {
  private static readonly EntityName: string = 'Profile';

  constructor(private readonly profileService: ProfileService) {}

  @Get('get/:id')
  @ApiOperation({
    title: 'Get user profile',
    description: 'Get user profile',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return user profile',
    type: GetProfileResultDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ApiResponseMessageConstants.EntityNotFound(
      ProfileController.EntityName,
    ),
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  @Authorize()
  async getProfile(@Param('id') id: string): Promise<GetProfileResultDto> {
    return await this.profileService.getProfile(id);
  }

  @Patch('update')
  @ApiOperation({
    title: 'Update user profile',
    description: 'Update user profile',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ApiResponseMessageConstants.EntitySuccessfullyUpdated(
      ProfileController.EntityName,
    ),
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ApiResponseMessageConstants.EntityNotFound(
      ProfileController.EntityName,
    ),
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  @Authorize()
  async updateProfile(
    @Body() profile: UpdateProfileInputDto,
    @Req() req: any,
  ): Promise<void> {
    return await this.profileService.updateProfileInfo(req.userId, profile);
  }

  @Post('uploadProfilePicture')
  @UseInterceptors(FileInterceptor('avatar', { dest: 'temporary/' }))
  @ApiOperation({
    title: 'Upload profile picture',
    description: 'Upload profile picture',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Upload profile picture success',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: ApiResponseMessageConstants.UNAUTHORIZED,
  })
  @Authorize()
  async uploadProfilePicture(
    @UploadedFile() file: any,
    @Req() req: any,
  ): Promise<void> {
    await this.profileService.uploadProfilePicture(file, req);
  }
}
