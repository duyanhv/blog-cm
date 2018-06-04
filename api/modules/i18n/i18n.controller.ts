import { Controller, Get, Query, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { I18nService } from './i18n.service';
import { GetLanguageDto } from './dto/get-language.dto';
import { GetLanguageResultDto } from './dto/get-language-result.dto';

@ApiUseTags('I18n')
@Controller('i18n')
export class I18nController {
  constructor(private readonly i18nService: I18nService) {}

  @Get('/getLanguage')
  @ApiOperation({
    title: 'Get Language Translatation',
    description: 'Get Language Translatation',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Language Translatation',
    type: GetLanguageResultDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Language Not FOund',
  })
  async getLanguage(
    @Query() query: GetLanguageDto,
  ): Promise<GetLanguageResultDto> {
    return await this.i18nService.getLanguage(query);
  }
}
