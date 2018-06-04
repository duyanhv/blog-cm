import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { GetLanguageResultDto } from './dto/get-language-result.dto';
import { en } from './languages/en';
import { vi } from './languages/vi';

@Component()
export class I18nService {
  async getLanguage(query: any): Promise<GetLanguageResultDto> {
    try {
      return { result: query.lng === 'vi' ? vi : en };
    } catch (error) {
      throw new HttpException('Language Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
