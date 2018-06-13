import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Post, HttpStatus, Body, Put, Param, Get, Patch } from '@nestjs/common';
import { ApiResponseMessageConstants } from '../../../core/constants';
import { Authorize } from '../../../core/auth/authorize.decorator';
import UserPermissions from '../../auth/constants/user-permissions.constant';
import { MenuConfigService } from '../service/menuconfig.service';
import { CreateMenuConfigDto, FindMenuConfigDto, FindAllMenuConfigDto, UpdateMenuConfigDto } from '../dto/menuconfig-dto';
import { FindAllParentIdMenuConfigDto } from '../dto/menuconfig-dto/find-all-parentid-menuconfig.dto';

@ApiUseTags('menuconfig')
@ApiBearerAuth()
@Controller('menuconfig')
export class MenuConfigController {
    public static readonly EntityName: string = 'MenuConfig';

    constructor(private readonly menuConfigService: MenuConfigService) { }

    @Get('findAllMenuConfig')
    @ApiOperation({ title: 'findAllMenuConfig', description: 'findAllMenuConfig' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Menu Config has successfully been fetched',
        type: FindAllMenuConfigDto,
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
            MenuConfigController.EntityName,
        ),
    })
    @Authorize(UserPermissions.USERS_CREATE)
    async findAllMenuConfig(): Promise<FindAllMenuConfigDto> {
        return await this.menuConfigService.findAllMenuConfig();
    }

    @Get('findMenuConfigById/:id')
    @ApiOperation({ title: 'findMenuConfigById', description: 'findMenuConfigById' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Menu Config has successfully been fetched',
        type: FindMenuConfigDto,
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
            MenuConfigController.EntityName,
        ),
    })
    @Authorize(UserPermissions.USERS_CREATE)
    async findMenuConfigById(@Param('id') menuConfigId: string): Promise<FindMenuConfigDto> {
        return await this.menuConfigService.findMenuConfigById(menuConfigId);
    }

    @Get('findparentidmenuconfig')
    @ApiOperation({ title: 'findparentidmenuconfig', description: 'findparentidmenuconfig' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Menu Config has successfully been fetched',
        type: FindAllParentIdMenuConfigDto
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
            MenuConfigController.EntityName,
        ),
    })
    @Authorize(UserPermissions.USERS_CREATE)
    async findParentIdMenuConfig(): Promise<FindAllParentIdMenuConfigDto> {
        return await this.menuConfigService.findParentIdMenuConfig();
    }

    @Post('createMenuConfig')
    @ApiOperation({ title: 'createMenuConfig', description: 'createMenuConfig' })
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
            MenuConfigController.EntityName,
        ),
    })
    @Authorize(UserPermissions.USERS_CREATE)
    async createMenuConfig(@Body() menuconfig: CreateMenuConfigDto): Promise<void> {
        await this.menuConfigService.createMenuConfig(menuconfig);
    }

    @Put('updateMenuConfig/:id')
    @ApiOperation({ title: 'updatemenuconfig', description: 'updatemenuconfig' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Menuconfig has successfully edited',
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
            MenuConfigController.EntityName,
        ),
    })
    @Authorize(UserPermissions.USERS_CREATE)
    async updateMenuConfig(
        @Param('id') menuConfigId: string,
        @Body() editedMenuConfig: UpdateMenuConfigDto
    ): Promise<void> {
        await this.menuConfigService.updateMenuConfigById(menuConfigId, editedMenuConfig);
    }

    @Patch('deactivateMenuConfig/:id')
    @ApiOperation({ title: 'deactivatemenuconfig', description: 'deactivatemenuconfig' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Menuconfig has successfully deactivated',
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
            MenuConfigController.EntityName,
        ),
    })
    @Authorize(UserPermissions.USERS_CREATE)
    async deactivateMenuConfig(
        @Param('id') menuConfigId: string
    ): Promise<void> {
        await this.menuConfigService.deactivateMenuConfig(menuConfigId);
    }

    @Patch('activateMenuConfig/:id')
    @ApiOperation({ title: 'activatemenuconfig', description: 'activatemenuconfig' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Menuconfig has successfully activated',
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
            MenuConfigController.EntityName,
        ),
    })
    @Authorize(UserPermissions.USERS_CREATE)
    async activateMenuConfig(
        @Param('id') menuConfigId: string
    ): Promise<void> {
        await this.menuConfigService.activateMenuConfig(menuConfigId);
    }
}
