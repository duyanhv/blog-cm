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
  HttpException,
  Res,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiUseTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import { GetProfileResultDto, UpdateProfileInputDto } from './dto';
import { ApiResponseMessageConstants } from '../../core/constants';
import { Authorize } from '../../core/auth/authorize.decorator';
import { ProfileService } from './profile.service';
import { processImage } from '../../core/helpers';
import { Response } from 'express';

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

  @Get('getProfilePicture/:id')
  @ApiOperation({
    title: 'Get user profile picture',
    description: 'Get user profile picture',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return user profile picture',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Profile picture not found',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  async getProfilePicture(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    if (!id) {
      throw new HttpException('User ID Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      const filePath = path.join(
        __dirname,
        `../../../public/profile-pictures/${id}.jpg`,
      );
      const defaultProfilePicturePath = path.join(
        __dirname,
        `../../../public/profile-pictures/default-avatar.png`,
      );

      if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
      } else {
        res.sendFile(defaultProfilePicturePath);
      }
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
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
    if (!file) {
      throw new HttpException('File Not Found', HttpStatus.BAD_REQUEST);
    } else if (!req.userId) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }

    try {
      // Generate new filename
      const newFilePath: string = path.join(
        __dirname,
        `../../../public/profile-pictures/${req.userId}.jpg`,
      );

      // Resize image
      await processImage(`${file.destination}${file.filename}`, newFilePath);

      // Delete temporary file
      fs.unlinkSync(file.path);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
