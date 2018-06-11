import { Inject, HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { BlogConst } from '../constants/blog.constant';
import { Model } from 'mongoose';
import * as Joi from 'joi';
import { ObjectId, ObjectID } from 'bson';
import { CreateBlogInputDto, UpdateBlogDetailDto } from '../dto/blog-dto';
import { FindAllBlogPostsDto } from '../dto/blog-dto/find-all-blog-posts.dto';
import { Blog } from '../interfaces/blog.interface';
import { FindBlogDetailDto } from 'client/src/service-proxies/service-proxies';

@Injectable()
export class BlogService {
  constructor(
    @Inject(BlogConst.BlogModelToken) private blogModel: Model<Blog>,
  ) { }

  async findPostByTitle(searchInput: string): Promise<FindAllBlogPostsDto> {
    const data = await this.blogModel
      .find(
        {
          title: {
            $regex: searchInput,
            $options: 'i',
          }
        }
      )
      .exec();
    return {
      data,
    };
  }

  async findPostByDate(dateRangeInput: string[]): Promise<FindAllBlogPostsDto> {
    if (dateRangeInput[0] && dateRangeInput[1]) {
      const data = await this.blogModel
        .find({
          postCreatedAt: {
            $gte: dateRangeInput[0],
            $lt: dateRangeInput[1]
          }
        }).exec();
      return {
        data,
      };
    }
    return await this.getAllPost();
  }

  async getAllPostTitle(): Promise<Array<string>> {
    const listTitle: [string] = [''];
    const data = await this.blogModel
      .find(
        {},
        {
          title: 1,
          _id: 0,
        },
    )
      .exec();
    data.map(item => listTitle.push(item.title));
    return listTitle;
  }

  async getAllPost(): Promise<FindAllBlogPostsDto> {
    const data = await this.blogModel
      .find({
        // deactivate: false
      })
      .exec();
    return {
      data,
    };
  }

  async getActivePost(): Promise<FindAllBlogPostsDto> {
    const data = await this.blogModel
      .find({
        deactivate: false
      })
      .exec();
    return {
      data,
    };
  }

  async activate(postId: string): Promise<void> {
    await this.blogModel
      .findByIdAndUpdate(postId, {
        $set: {
          deactivate: false,
        },
      })
      .exec();
  }

  async deactivate(postId: string): Promise<void> {
    await this.blogModel
      .findByIdAndUpdate(postId, {
        $set: {
          deactivate: true,
        },
      })
      .exec();
  }

  async edit(editedPost: UpdateBlogDetailDto, postId: string): Promise<void> {
    return await this.blogModel.update(
      { _id: new ObjectId(postId) },
      {
        ...editedPost,
        $set: {
          previewContent: editedPost.content.length > 345 ?
            editedPost.content.match(/.{1,345}/g)![0] :
            editedPost.content,
          lastModifiedBy: editedPost.lastModifiedBy,
          lastModifiedAt: editedPost.lastModifiedAt,
        },
      },
      {
        upsert: true,
      },
    );
  }

  async create(blog: CreateBlogInputDto): Promise<void> {
    const validationSchema = Joi.object().keys({
      title: Joi.string().required(),
      subtitle: Joi.string().required(),
      author: Joi.string().required(),
      content: Joi.string().required(),
      imageSrc: Joi.string().required(),
      viewCount: Joi.number().required(),
      postRating: Joi.number().required(),
    });
    const { error } = Joi.validate(blog, validationSchema, {
      allowUnknown: true,
    });

    if (error) {
      throw new HttpException(error.details[0].message, HttpStatus.BAD_REQUEST);
    }

    const existedPost = await this.blogModel
      .findOne({
        $or: [
          { title: blog.title },
          { subtitle: blog.subtitle },
          { content: blog.content },
        ],
      })
      .exec();

    if (existedPost) {
      if (existedPost.title === blog.title) {
        throw new HttpException(
          'title has been used',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      } else if (existedPost.subtitle === blog.subtitle) {
        throw new HttpException(
          'subtitle has been used',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      } else if (existedPost.content === blog.content) {
        throw new HttpException(
          'content has been used',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }
    const newpost = new this.blogModel({
      previewContent: blog.content.length > 345 ?
        blog.content.match(/.{1,345}/g)![0] :
        blog.content,
      ...blog,
    });
    await newpost.save();
  }

  async delete(postId: string): Promise<void> {
    await this.blogModel.findByIdAndRemove(new ObjectID(postId)).exec();
  }

  async getActiveAndPreviewContent(): Promise<FindAllBlogPostsDto> {
    const data = await this.blogModel
      .find(
        {
          deactivate: false
        },
        {
          title: 1,
          previewContent: 1,
          author: 1,
          imageSrc: 1,
          postCreatedAt: 1,
        }
      )
      .sort({
        postCreatedAt: -1,
      })
      .exec();
    return {
      data,
    };
  }

  async getpostbyid(postId: string): Promise<FindBlogDetailDto> {
    const data = await this.blogModel
      .findOne(
        {
          deactivate: false,
          _id: postId,
        },
        {
          title: 1,
          content: 1,
          author: 1,
          imageSrc: 1,
          postCreatedAt: 1,
          subtitle: 1,
        }
      )
      .exec();
    return data!;
  }
}
