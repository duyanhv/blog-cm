import { IFindMenuConfigDto, IFindParentIdMenuConfigDto } from '../../../service-proxies/service-proxies';

export default interface MenuConfigPageState {
    isBusy: boolean;
    errorMessage: string;
    allMenuConfigData: IFindMenuConfigDto[];
    menuConfigData: IFindMenuConfigDto;
    showEditMenuConfigModal: boolean;
    showAddMenuConfigModal: boolean;
    parentIdState: {
        name: string,
        _id: string
    };
    parentIdData: IFindParentIdMenuConfigDto[];
}
