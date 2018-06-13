import { IFindMenuConfigDto, IUpdateMenuConfigDto, IFindParentIdMenuConfigDto, ICreateMenuConfigDto } from '../../../service-proxies/service-proxies';
import { createAction } from 'redux-actions';

// ========================================================
// Create menuconfig
export const CREATE_MENUCONFIG = 'MAIN_PAGE/CREATE_MENUCONFIG';
export type CREATE_MENUCONFIG = typeof CREATE_MENUCONFIG;

export const CREATE_MENUCONFIG_IN_PROGRESS = 'MAIN_PAGE/CREATE_MENUCONFIG_IN_PROGRESS';
export type CREATE_MENUCONFIG_IN_PROGRESS = typeof CREATE_MENUCONFIG_IN_PROGRESS;

export const CREATE_MENUCONFIG_SUCCESS = 'MAIN_PAGE/CREATE_MENUCONFIG_SUCCESS';
export type CREATE_MENUCONFIG_SUCCESS = typeof CREATE_MENUCONFIG_SUCCESS;

export const CREATE_MENUCONFIG_ERROR = 'MAIN_PAGE/CREATE_MENUCONFIG_ERROR';
export type CREATE_MENUCONFIG_ERROR = typeof CREATE_MENUCONFIG_ERROR;

export interface CreateMenuConfig {
    type: CREATE_MENUCONFIG;
    payload: {
        newMenuConfig: ICreateMenuConfigDto;
    };
}

export interface CreateMenuConfigInProgress {
    type: CREATE_MENUCONFIG_IN_PROGRESS;
}

export interface CreateMenuConfigSuccess {
    type: CREATE_MENUCONFIG_SUCCESS;
}

export interface CreateMenuConfigError {
    type: CREATE_MENUCONFIG_ERROR;
    payload: {
        errorMessage: string
    };
}

export const createMenuConfig = createAction(
    CREATE_MENUCONFIG,
    (newMenuConfig: ICreateMenuConfigDto) => ({
        newMenuConfig,
    })
);
export const createMenuConfigInProgress = createAction(CREATE_MENUCONFIG_IN_PROGRESS);
export const createMenuConfigSuccess = createAction(
    CREATE_MENUCONFIG_SUCCESS
);
export const createMenuConfigError = createAction(
    CREATE_MENUCONFIG_ERROR,
    (errorMessage: string) => ({
        errorMessage,
    })
);

// ========================================================
// fetch parentid menuconfig data
export const FETCH_PARENT_ID_DATA = 'MAIN_PAGE/FETCH_PARENT_ID_DATA';
export type FETCH_PARENT_ID_DATA = typeof FETCH_PARENT_ID_DATA;

export const FETCH_PARENT_ID_DATA_IN_PROGRESS = 'MAIN_PAGE/FETCH_PARENT_ID_DATA_IN_PROGRESS';
export type FETCH_PARENT_ID_DATA_IN_PROGRESS = typeof FETCH_PARENT_ID_DATA_IN_PROGRESS;

export const FETCH_PARENT_ID_DATA_SUCCESS = 'MAIN_PAGE/FETCH_PARENT_ID_DATA_SUCCESS';
export type FETCH_PARENT_ID_DATA_SUCCESS = typeof FETCH_PARENT_ID_DATA_SUCCESS;

export const FETCH_PARENT_ID_DATA_ERROR = 'MAIN_PAGE/FETCH_PARENT_ID_DATA_ERROR';
export type FETCH_PARENT_ID_DATA_ERROR = typeof FETCH_PARENT_ID_DATA_ERROR;

export interface FetchParentIdData {
    type: FETCH_PARENT_ID_DATA;
}

export interface FetchParentIdDataInProgress {
    type: FETCH_PARENT_ID_DATA_IN_PROGRESS;
}

export interface FetchParentIdDataSuccess {
    type: FETCH_PARENT_ID_DATA_SUCCESS;
    payload: {
        parentIdData: IFindParentIdMenuConfigDto[]
    };
}

export interface FetchParentIdDataError {
    type: FETCH_PARENT_ID_DATA_ERROR;
    payload: {
        errorMessage: string;
    };
}

export const fetchParentIdData = createAction(
    FETCH_PARENT_ID_DATA,
);

export const fetchParentIdDataInProgress = createAction(FETCH_PARENT_ID_DATA_IN_PROGRESS);

export const fetchParentIdDataSuccess = createAction(
    FETCH_PARENT_ID_DATA_SUCCESS,
    (parentIdData: any) => ({
        parentIdData,
    })
);

// ========================================================
// setMenuConfigStatus
export const SET_MENU_CONFIG_STATUS = 'MAIN_PAGE/SET_MENU_CONFIG_STATUS';
export type SET_MENU_CONFIG_STATUS = typeof SET_MENU_CONFIG_STATUS;

export const SET_MENU_CONFIG_STATUS_IN_PROGRESS = 'MAIN_PAGE/SET_MENU_CONFIG_STATUS_IN_PROGRESS';
export type SET_MENU_CONFIG_STATUS_IN_PROGRESS = typeof SET_MENU_CONFIG_STATUS_IN_PROGRESS;

export const SET_MENU_CONFIG_STATUS_SUCCESS = 'MAIN_PAGE/SET_MENU_CONFIG_STATUS_SUCCESS';
export type SET_MENU_CONFIG_STATUS_SUCCESS = typeof SET_MENU_CONFIG_STATUS_SUCCESS;

export const SET_MENU_CONFIG_STATUS_ERROR = 'MAIN_PAGE/SET_MENU_CONFIG_STATUS_ERROR';
export type SET_MENU_CONFIG_STATUS_ERROR = typeof SET_MENU_CONFIG_STATUS_ERROR;
export interface SetMenuConfigStatus {
    type: SET_MENU_CONFIG_STATUS;
    payload: {
        id: string,
        activationStatus: boolean,
    };
}

export interface SetMenuConfigStatusInProgress {
    type: SET_MENU_CONFIG_STATUS_IN_PROGRESS;
}

export interface SetMenuConfigStatusSuccess {
    type: SET_MENU_CONFIG_STATUS_SUCCESS;
}

export interface SetMenuConfigStatusError {
    type: SET_MENU_CONFIG_STATUS_ERROR;
    payload: {
        errorMessage: string,
    };
}

export const setMenuConfigStatus = createAction(
    SET_MENU_CONFIG_STATUS,
    (id: string, activationStatus: boolean) => ({
        id,
        activationStatus,
    })
);

export const setMenuConfigStatusInProgress = createAction(
    SET_MENU_CONFIG_STATUS_IN_PROGRESS,
);

export const setMenuConfigStatusSuccess = createAction(
    SET_MENU_CONFIG_STATUS_SUCCESS,
);

export const setMenuConfigStatusError = createAction(
    SET_MENU_CONFIG_STATUS_IN_PROGRESS,
    (errorMessage: string) => ({
        errorMessage,
    })
);

// ========================================================
// setDropDownMenuButtonState
export const SET_DROP_DOWN_MENU_BUTTON_STATE = 'MAIN_PAGE/SET_DROP_DOWN_MENU_BUTTON_STATE';
export type SET_DROP_DOWN_MENU_BUTTON_STATE = typeof SET_DROP_DOWN_MENU_BUTTON_STATE;
export interface SetDropDownMenuButtonState {
    type: SET_DROP_DOWN_MENU_BUTTON_STATE;
    payload: {
        parentIdState: {
            name: string,
            _id: string
        }
    };
}

export const setDropDownMenuButtonState = createAction(
    SET_DROP_DOWN_MENU_BUTTON_STATE,
    (
        parentIdState: {
            name: string,
            _id: string
        }
    ) => ({
        parentIdState,
    })
);

// ========================================================
// clearDropDownMenuButtonState
export const CLEAR_DROP_DOWN_MENU_BUTTON_STATE = 'MAIN_PAGE/CLEAR_DROP_DOWN_MENU_BUTTON_STATE';
export type CLEAR_DROP_DOWN_MENU_BUTTON_STATE = typeof CLEAR_DROP_DOWN_MENU_BUTTON_STATE;

export interface ClearDropDownMenuButtonState {
    type: CLEAR_DROP_DOWN_MENU_BUTTON_STATE;
}
export const clearDropDownMenuButtonState = createAction(CLEAR_DROP_DOWN_MENU_BUTTON_STATE);
// ========================================================
// Edit menuconfig by id
export const EDIT_MENUCONFIG_BY_ID = 'MAIN_PAGE/EDIT_MENUCONFIG_BY_ID';
export type EDIT_MENUCONFIG_BY_ID = typeof EDIT_MENUCONFIG_BY_ID;

export const EDIT_MENUCONFIG_BY_ID_IN_PROGRESS = 'MAIN_PAGE/EDIT_MENUCONFIG_BY_ID_IN_PROGRESS';
export type EDIT_MENUCONFIG_BY_ID_IN_PROGRESS = typeof EDIT_MENUCONFIG_BY_ID_IN_PROGRESS;

export const EDIT_MENUCONFIG_BY_ID_SUCCESS = 'MAIN_PAGE/EDIT_MENUCONFIG_BY_ID_SUCCESS';
export type EDIT_MENUCONFIG_BY_ID_SUCCESS = typeof EDIT_MENUCONFIG_BY_ID_SUCCESS;

export const EDIT_MENUCONFIG_BY_ID_ERROR = 'MAIN_PAGE/EDIT_MENUCONFIG_BY_ID_ERROR';
export type EDIT_MENUCONFIG_BY_ID_ERROR = typeof EDIT_MENUCONFIG_BY_ID_ERROR;

export interface EditMenuConfigById {
    type: EDIT_MENUCONFIG_BY_ID;
    payload: {
        menuConfigId: string;
        editedMenuConfig: IUpdateMenuConfigDto;
    };
}

export interface EditMenuConfigByIdInProgress {
    type: EDIT_MENUCONFIG_BY_ID_IN_PROGRESS;
}

export interface EditMenuConfigByIdSuccess {
    type: EDIT_MENUCONFIG_BY_ID_SUCCESS;
}

export interface EditMenuConfigByIdError {
    type: EDIT_MENUCONFIG_BY_ID_ERROR;
    payload: {
        errorMessage: string
    };
}

export const editMenuConfigById = createAction(
    EDIT_MENUCONFIG_BY_ID,
    (menuConfigId: string, editedMenuConfig: IUpdateMenuConfigDto) => ({
        menuConfigId,
        editedMenuConfig,
    })
);
export const editMenuConfigByIdInProgress = createAction(EDIT_MENUCONFIG_BY_ID_IN_PROGRESS);
export const editMenuConfigByIdSuccess = createAction(
    EDIT_MENUCONFIG_BY_ID_SUCCESS
);
export const editMenuConfigByIdError = createAction(
    EDIT_MENUCONFIG_BY_ID_ERROR,
    (errorMessage: string) => ({
        errorMessage,
    })
);

// ========================================================
// showAddMenuConfigModal
export const SHOW_ADD_MENU_CONFIG_MODAL = 'MAIN_PAGE/SHOW_ADD_MENU_CONFIG_MODAL';
export type SHOW_ADD_MENU_CONFIG_MODAL = typeof SHOW_ADD_MENU_CONFIG_MODAL;
export const CLOSE_ADD_MENU_CONFIG_MODAL = 'MAIN_PAGE/CLOSE_ADD_MENU_CONFIG_MODAL';
export type CLOSE_ADD_MENU_CONFIG_MODAL = typeof CLOSE_ADD_MENU_CONFIG_MODAL;

export interface ShowAddMenuConfigModal {
    type: SHOW_ADD_MENU_CONFIG_MODAL;
}

export interface CloseAddMenuConfigModal {
    type: CLOSE_ADD_MENU_CONFIG_MODAL;
}

export const showAddMenuConfigModal = createAction(SHOW_ADD_MENU_CONFIG_MODAL);
export const closeAddMenuConfigModal = createAction(CLOSE_ADD_MENU_CONFIG_MODAL);

// ========================================================
// closeEditMenuConfigModal
export const CLOSE_EDIT_MENU_CONFIG_MODAL = 'MAIN_PAGE/CLOSE_EDIT_MENU_CONFIG_MODAL';
export type CLOSE_EDIT_MENU_CONFIG_MODAL = typeof CLOSE_EDIT_MENU_CONFIG_MODAL;

export interface CloseEditMenuConfigModal {
    type: CLOSE_EDIT_MENU_CONFIG_MODAL;
}

export const closeEditMenuConfigModal = createAction(CLOSE_EDIT_MENU_CONFIG_MODAL);
// ========================================================
// Find menuconfig by id
export const FETCH_MENU_CONFIG_BY_ID = 'MAIN_PAGE/FETCH_MENU_CONFIG_BY_ID';
export type FETCH_MENU_CONFIG_BY_ID = typeof FETCH_MENU_CONFIG_BY_ID;

export const FETCH_MENU_CONFIG_BY_ID_IN_PROGRESS = 'MAIN_PAGE/FETCH_MENU_CONFIG_BY_ID_IN_PROGRESS';
export type FETCH_MENU_CONFIG_BY_ID_PROGRESS = typeof FETCH_MENU_CONFIG_BY_ID_IN_PROGRESS;

export const FETCH_MENU_CONFIG_BY_ID_SUCCESS = 'MAIN_PAGE/FETCH_MENU_CONFIG_BY_ID_SUCCESS';
export type FETCH_MENU_CONFIG_BY_ID_SUCCESS = typeof FETCH_MENU_CONFIG_BY_ID_SUCCESS;

export const FETCH_MENU_CONFIG_BY_ID_ERROR = 'MAIN_PAGE/FETCH_MENU_CONFIG_BY_ID_ERROR';
export type FETCH_MENU_CONFIG_BY_ID_ERROR = typeof FETCH_MENU_CONFIG_BY_ID_ERROR;

export interface FetchMenuConfigById {
    type: FETCH_MENU_CONFIG_BY_ID;
    payload: {
        menuConfigId: string;
    };
}

export interface FetchMenuConfigByIdInProgress {
    type: FETCH_MENU_CONFIG_BY_ID_PROGRESS;
}

export interface FetchMenuConfigByIdSuccess {
    type: FETCH_MENU_CONFIG_BY_ID_SUCCESS;
    payload: {
        menuConfigData: IFindMenuConfigDto;
    };
}

export interface FetchMenuConfigByIdError {
    type: FETCH_MENU_CONFIG_BY_ID_ERROR;
    payload: {
        errorMessage: string
    };
}

export const fetchMenuConfigById = createAction(
    FETCH_MENU_CONFIG_BY_ID,
    (menuConfigId: string) => ({
        menuConfigId,
    })
);
export const fetchMenuConfigByIdInProgress = createAction(FETCH_MENU_CONFIG_BY_ID_IN_PROGRESS);
export const fetchMenuConfigByIdSuccess = createAction(
    FETCH_MENU_CONFIG_BY_ID_SUCCESS,
    (menuConfigData: IFindMenuConfigDto) => ({
        menuConfigData,
    })
);
export const fetchMenuConfigByIdError = createAction(
    FETCH_MENU_CONFIG_BY_ID_ERROR,
    (errorMessage: string) => ({
        errorMessage,
    })
);

// ========================================================
// Fetch All MenuConfig Action

export const FETCH_ALL_MENU_CONFIG = 'MAIN_PAGE/FETCH_ALL_MENU_CONFIG';
export type FETCH_ALL_MENU_CONFIG = typeof FETCH_ALL_MENU_CONFIG;

export const FETCH_ALL_MENU_CONFIG_IN_PROGRESS = 'MAIN_PAGE/FETCH_ALL_MENU_CONFIG_IN_PROGRESS';
export type FETCH_ALL_MENU_CONFIG_IN_PROGRESS = typeof FETCH_ALL_MENU_CONFIG_IN_PROGRESS;

export const FETCH_ALL_MENU_CONFIG_SUCCESS = 'MAIN_PAGE/FETCH_ALL_MENU_CONFIG_SUCCESS';
export type FETCH_ALL_MENU_CONFIG_SUCCESS = typeof FETCH_ALL_MENU_CONFIG_SUCCESS;

export const FETCH_ALL_MENU_CONFIG_ERROR = 'MAIN_PAGE/FETCH_ALL_MENU_CONFIG_ERROR';
export type FETCH_ALL_MENU_CONFIG_ERROR = typeof FETCH_ALL_MENU_CONFIG_ERROR;

export interface FetchAllMenuConfig {
    type: FETCH_ALL_MENU_CONFIG;
}

export interface FetchAllMenuConfigInProgress {
    type: FETCH_ALL_MENU_CONFIG_IN_PROGRESS;
}

export interface FetchAllMenuConfigSuccess {
    type: FETCH_ALL_MENU_CONFIG_SUCCESS;
    payload: {
        allMenuConfigData: IFindMenuConfigDto[];
    };
}

export interface FetchAllMenuConfigError {
    type: FETCH_ALL_MENU_CONFIG_ERROR;
    payload: {
        errorMessage: string
    };
}

export const fetchAllMenuConfig = createAction(FETCH_ALL_MENU_CONFIG);
export const fetchAllMenuConfigInProgress = createAction(FETCH_ALL_MENU_CONFIG_IN_PROGRESS);
export const fetchAllMenuConfigSuccess = createAction(
    FETCH_ALL_MENU_CONFIG_SUCCESS,
    (allMenuConfigData: IFindMenuConfigDto[]) => ({
        allMenuConfigData,
    })
);
export const fetchAllMenuConfigError = createAction(
    FETCH_ALL_MENU_CONFIG_ERROR,
    (errorMessage: string) => ({
        errorMessage,
    })
);

// ========================================================
export type MenuConfigPageActions =
    | FetchAllMenuConfig
    | FetchAllMenuConfigInProgress
    | FetchAllMenuConfigSuccess
    | FetchAllMenuConfigError
    | FetchMenuConfigById
    | FetchMenuConfigByIdInProgress
    | FetchMenuConfigByIdSuccess
    | FetchMenuConfigByIdError
    | CloseEditMenuConfigModal
    | EditMenuConfigById
    | EditMenuConfigByIdInProgress
    | EditMenuConfigByIdSuccess
    | EditMenuConfigByIdError
    | ClearDropDownMenuButtonState
    | SetDropDownMenuButtonState
    | SetMenuConfigStatus
    | SetMenuConfigStatusInProgress
    | SetMenuConfigStatusSuccess
    | SetMenuConfigStatusError
    | ShowAddMenuConfigModal
    | CloseAddMenuConfigModal
    | FetchParentIdData
    | FetchParentIdDataInProgress
    | FetchParentIdDataSuccess
    | FetchParentIdDataError
    | CreateMenuConfig
    | CreateMenuConfigInProgress
    | CreateMenuConfigSuccess
    | CreateMenuConfigError;
