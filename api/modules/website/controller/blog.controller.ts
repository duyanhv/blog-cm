import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import {
  Controller,
  Post,
  HttpStatus,
  Body,
  Param,
  Put,
  Patch,
  Get,
} from '@nestjs/common';
import { ApiResponseMessageConstants } from '../../../core/constants';
import UserPermissions from '../../auth/constants/user-permissions.constant';
import { Authorize } from '../../../core/auth/authorize.decorator';
import { BlogService } from '../service/blog.service';
import { CreateBlogInputDto, UpdateBlogDetailDto, SearchInputDto } from '../dto/blog-dto';
import { FindAllBlogPostsDto } from '../dto/blog-dto/find-all-blog-posts.dto';
import { DateRangeInputDto } from '../dto/blog-dto/daterange-input-dto';
@ApiUseTags('blog')
@ApiBearerAuth()
@Controller('blog')
export class BlogController {
  public static readonly EntityName: string = 'Blog';

  constructor(private readonly blogService: BlogService) { }

  @Post('newpost')
  @ApiOperation({ title: 'Add new post', description: 'Add new post' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'A new post has been successfully created.',
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_CREATE)
  async create(@Body() blog: CreateBlogInputDto): Promise<void> {
    await this.blogService.create(blog);
  }

  @Put('edit/:id')
  @ApiOperation({ title: 'Edit Post', description: 'Edit post by ID' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `Post has been successfully edited.`,
    type: UpdateBlogDetailDto,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_EDIT)
  async edit(
    @Body() editedPost: UpdateBlogDetailDto,
    @Param('id') postId: string,
  ): Promise<void> {
    await this.blogService.edit(editedPost, postId);
  }

  @Put('delete/:id')
  @ApiOperation({ title: 'Delete Post', description: 'Delete post by ID' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `Post has been successfully deleted.`,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_EDIT)
  async delete(@Param('id') postId: string): Promise<void> {
    await this.blogService.delete(postId);
  }

  @Patch('deactivate-post/:id')
  @ApiOperation({
    title: 'Deactivate Post',
    description: 'Deactivate post by ID',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `Post has been successfully Deactivated.`,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_EDIT)
  async deactivate(@Param('id') postId: string): Promise<void> {
    await this.blogService.deactivate(postId);
  }

  @Patch('activate-post/:id')
  @ApiOperation({ title: 'Activate Post', description: 'Activate post by ID' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `Post has been successfully Activated.`,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_EDIT)
  async activate(@Param('id') postId: string): Promise<void> {
    await this.blogService.activate(postId);
  }

  @Get('getpost')
  @ApiOperation({ title: 'Get All Post', description: 'Get All Post' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `Posts has been fetched successfully.`,
    type: FindAllBlogPostsDto,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_VIEW)
  async getAllPost(): Promise<FindAllBlogPostsDto> {
    return await this.blogService.getAllPost();
  }

  @Get('getAllPostTitle')
  @ApiOperation({
    title: 'Get all post title',
    description: 'Get all post title',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `Post title has been successfully fetched.`,
    type: Array,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_VIEW)
  async getAllPostTitle(): Promise<Array<string>> {
    return await this.blogService.getAllPostTitle();
  }

  @Post('findPostByTitle')
  @ApiOperation({
    title: 'findPostByTitle',
    description: 'findPostByTitle',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `Post title has been successfully fetched.`,
    type: FindAllBlogPostsDto,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_VIEW)
  async findPostByTitle(@Body() data: SearchInputDto): Promise<FindAllBlogPostsDto> {
    return await this.blogService.findPostByTitle(data.searchInput);
  }

  @Post('findPostByDate')
  @ApiOperation({
    title: 'findPostByDate',
    description: 'findPostByDate',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `Post title has been successfully fetched.`,
    type: FindAllBlogPostsDto,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_VIEW)
  async findPostByDate(@Body() data: DateRangeInputDto): Promise<FindAllBlogPostsDto> {
    return await this.blogService.findPostByDate(data.dateRangeInput);
  }

  @Get('getActivePost')
  @ApiOperation({ title: 'getActivePost', description: 'getActivePost' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `Posts has been fetched successfully.`,
    type: FindAllBlogPostsDto,
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
      BlogController.EntityName,
    ),
  })
  @Authorize(UserPermissions.USERS_VIEW)
  async getActivePost(): Promise<FindAllBlogPostsDto> {
    return await this.blogService.getActivePost();
  }
}
