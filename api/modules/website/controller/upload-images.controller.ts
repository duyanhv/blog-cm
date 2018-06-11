import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  FileInterceptor,
  HttpStatus,
  UploadedFile,
  Req,
  Param,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { ApiResponseMessageConstants } from '../../../core/constants';
import { Authorize } from '../../../core/auth/authorize.decorator';
import {
  GetUploadedImagesResultDto,
  GetUploadedImagesDetailDto,
  UpdateFilenameDto,
  CreateAlbumDto,
} from '../dto';
import { UploadImageService } from '../service/upload-images.service';

@ApiUseTags('Upload Images')
@ApiBearerAuth()
@Controller('uploadImages')
export class UploadImagesController {
  constructor(private readonly uploadImagesService: UploadImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('images', { dest: 'temporary/' }))
  @ApiOperation({
    title: 'Upload images',
    description: 'Upload images',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Upload images success',
    type: GetUploadedImagesDetailDto,
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
  async uploadImage(
    @UploadedFile() file: any,
    @Req() req: any,
  ): Promise<GetUploadedImagesDetailDto> {
    return await this.uploadImagesService.uploadImage(file, req);
  }

  @Get('get/:id')
  @ApiOperation({
    title: 'Get user uploaded images',
    description: 'Get user uploaded images',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return user uploaded images',
    type: GetUploadedImagesResultDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  async getUploadedImages(
    @Param('id') id: string,
    @Query('search') search: string,
  ): Promise<GetUploadedImagesResultDto> {
    return await this.uploadImagesService.getUploadedImage(id, search);
  }

  @Post('updateFilename')
  @ApiOperation({
    title: 'Upload image filename',
    description: 'Upload image filename',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Upload image filename',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Image Not Found',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  async uploadImageFilename(@Body() body: UpdateFilenameDto): Promise<void> {
    return await this.uploadImagesService.updateFilename(
      body.imageId,
      body.newName,
    );
  }

  @Delete('deleteImage/:imageId')
  @ApiOperation({
    title: 'Delete image',
    description: 'Delete image',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Delete image success',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Image Not Found',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  async deleteImage(@Param('imageId') imageId: string): Promise<void> {
    return await this.uploadImagesService.deleteImage(imageId);
  }

  @Post('createAlbum')
  @ApiOperation({
    title: 'Create a new album',
    description: 'Create a new album',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create album success',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  async createAlbum(@Body() body: CreateAlbumDto): Promise<void> {
    return await this.uploadImagesService.createAlbum(body.albumName);
  }
}
