import MenuConfigPageState from './state';
import { FetchAllMenuConfig, FetchAllMenuConfigInProgress, FetchAllMenuConfigSuccess, FetchAllMenuConfigError, FETCH_ALL_MENU_CONFIG, FETCH_ALL_MENU_CONFIG_IN_PROGRESS, FETCH_ALL_MENU_CONFIG_SUCCESS, FETCH_ALL_MENU_CONFIG_ERROR, FetchMenuConfigById, FetchMenuConfigByIdSuccess, FetchMenuConfigByIdInProgress, FetchMenuConfigByIdError, FETCH_MENU_CONFIG_BY_ID, FETCH_MENU_CONFIG_BY_ID_IN_PROGRESS, FETCH_MENU_CONFIG_BY_ID_SUCCESS, FETCH_MENU_CONFIG_BY_ID_ERROR, CloseEditMenuConfigModal, CLOSE_EDIT_MENU_CONFIG_MODAL, EditMenuConfigById, EditMenuConfigByIdInProgress, EditMenuConfigByIdSuccess, EditMenuConfigByIdError, EDIT_MENUCONFIG_BY_ID, EDIT_MENUCONFIG_BY_ID_ERROR, EDIT_MENUCONFIG_BY_ID_SUCCESS, EDIT_MENUCONFIG_BY_ID_IN_PROGRESS, ClearDropDownMenuButtonState, CLEAR_DROP_DOWN_MENU_BUTTON_STATE, SetDropDownMenuButtonState, SET_DROP_DOWN_MENU_BUTTON_STATE, SetMenuConfigStatusInProgress, SetMenuConfigStatusSuccess, SET_MENU_CONFIG_STATUS_IN_PROGRESS, SET_MENU_CONFIG_STATUS_SUCCESS, ShowAddMenuConfigModal, CloseAddMenuConfigModal, SHOW_ADD_MENU_CONFIG_MODAL, CLOSE_ADD_MENU_CONFIG_MODAL, FetchParentIdData, FetchParentIdDataInProgress, FetchParentIdDataSuccess, FetchParentIdDataError, FETCH_PARENT_ID_DATA, FETCH_PARENT_ID_DATA_IN_PROGRESS, FETCH_PARENT_ID_DATA_SUCCESS, FETCH_PARENT_ID_DATA_ERROR, CreateMenuConfig, CreateMenuConfigInProgress, CreateMenuConfigSuccess, CreateMenuConfigError, CREATE_MENUCONFIG, CREATE_MENUCONFIG_IN_PROGRESS, CREATE_MENUCONFIG_SUCCESS, CREATE_MENUCONFIG_ERROR } from './action';
import { handleActions } from 'redux-actions';
import { message } from '../../../helpers';

const initialState = {
    isBusy: false,
    errorMessage: '',
    allMenuConfigData: [],
    menuConfigData: {
        _id: '',
        name: '',
        order: 0,
        hyperlink: '',
        submenu: [],
        parentid: [],
        parentIdData: [],
        activationStatus: true,
    },
    showEditMenuConfigModal: false,
    showAddMenuConfigModal: false,
    parentIdState: {
        name: 'Choose one',
        _id: ''
    },
    parentIdData: [],
};

// ========================================================
// fetch parent id data
const fetchParentIdDataReducer = (
    state: MenuConfigPageState,
    action: FetchParentIdData,
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: ''
    };
};

const fetchParentIdDataInProgressReducer = (
    state: MenuConfigPageState,
    action: FetchParentIdDataInProgress,
) => {
    return {
        ...state,
        isBusy: true,
        errorMessage: ''
    };
};

const fetchParentIdDataSuccessReducer = (
    state: MenuConfigPageState,
    action: FetchParentIdDataSuccess,
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: '',
        parentIdData: action.payload.parentIdData
    };
};

const fetchParentIdDataErrorReducer = (
    state: MenuConfigPageState,
    action: FetchParentIdDataError,
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: action.payload.errorMessage,
    };
};

// ========================================================
// showAddMenuConfigModalReducer and closeAddMenuConfigModalReducer
const showAddMenuConfigModalReducer = (
    state: MenuConfigPageState,
    action: ShowAddMenuConfigModal,
) => {
    return {
        ...state,
        showAddMenuConfigModal: true,
    };
};

const closeAddMenuConfigModalReducer = (
    state: MenuConfigPageState,
    action: CloseAddMenuConfigModal,
) => {
    return {
        ...state,
        showAddMenuConfigModal: false,
    };
};
// ========================================================
// SET_MENU_CONFIG_STATUS
const setMenuConfigStatusInProgressReducer = (
    state: MenuConfigPageState,
    action: SetMenuConfigStatusInProgress,
) => {
    return {
        ...state,
        isBusy: true,
        errorMessage: ''
    };
};

const setMenuConfigStatusSuccessReducer = (
    state: MenuConfigPageState,
    action: SetMenuConfigStatusSuccess,
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: ''
    };
};

// ========================================================
// SET_DROP_DOWN_MENU_BUTTON_STATE
const setDropDownMenuButtonStateReducer = (
    state: MenuConfigPageState,
    action: SetDropDownMenuButtonState
) => {
    return {
        ...state,
        parentIdState: action.payload.parentIdState
    };
};

// ========================================================
// CLEAR_DROP_DOWN_MENU_BUTTON_STATE
const clearDropDownMenuButtonStateReducer = (
    state: MenuConfigPageState,
    action: ClearDropDownMenuButtonState
) => {
    return {
        ...state,
        parentIdState: initialState.parentIdState
    };
};

// ========================================================
// closeEditMenuConfigModal

const closeEditMenuConfigModalReducer = (
    state: MenuConfigPageState,
    action: CloseEditMenuConfigModal
) => {
    return {
        ...state,
        menuConfigData: {
            _id: '',
            name: '',
            order: 0,
            hyperlink: '',
            submenu: [],
            parentid: [],
            parentIdData: [],
            activationStatus: true,
        },
        showEditMenuConfigModal: false
    };
};

// ========================================================
// fetch menu config by id reducer

const fetchMenuConfigByIdReducer = (
    state: MenuConfigPageState,
    action: FetchMenuConfigById
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: '',
        showEditMenuConfigModal: true,
    };
};

const fetchMenuConfigByIdInProgressReducer = (
    state: MenuConfigPageState,
    action: FetchMenuConfigByIdInProgress
) => {
    return {
        ...state,
        isBusy: true,
        errorMessage: '',
    };
};

const fetchMenuConfigByIdSuccessReducer = (
    state: MenuConfigPageState,
    action: FetchMenuConfigByIdSuccess
) => {
    if (action.payload.menuConfigData.parentid[0]) {
        return {
            ...state,
            isBusy: false,
            errorMessage: '',
            menuConfigData: action.payload.menuConfigData,
            parentIdState: action.payload.menuConfigData.parentid[0]
        };
    } else {
        return {
            ...state,
            isBusy: false,
            errorMessage: '',
            menuConfigData: action.payload.menuConfigData,
            parentIdState: initialState.parentIdState
        };
    }
};

const fetchMenuConfigByIdErrorReducer = (
    state: MenuConfigPageState,
    action: FetchMenuConfigByIdError
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: action.payload.errorMessage,
    };
};

// ========================================================
// fetch all menu config reducer

const fetchAllMenuConfigReducer = (
    state: MenuConfigPageState,
    action: FetchAllMenuConfig
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: '',
    };
};

const fetchAllMenuConfigInProgressReducer = (
    state: MenuConfigPageState,
    action: FetchAllMenuConfigInProgress
) => {
    return {
        ...state,
        isBusy: true,
        errorMessage: '',
    };
};

const fetchAllMenuConfigSuccessReducer = (
    state: MenuConfigPageState,
    action: FetchAllMenuConfigSuccess
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: '',
        allMenuConfigData: action.payload.allMenuConfigData
    };
};

const fetchAllMenuConfigErrorReducer = (
    state: MenuConfigPageState,
    action: FetchAllMenuConfigError
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: action.payload.errorMessage,
    };
};

// ========================================================
// edit menuconfig by id reducer

const editMenuConfigByIdReducer = (
    state: MenuConfigPageState,
    action: EditMenuConfigById
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: ''
    };
};

const editMenuConfigByIdInProgressReducer = (
    state: MenuConfigPageState,
    action: EditMenuConfigByIdInProgress
) => {
    return {
        ...state,
        isBusy: true,
        errorMessage: ''
    };
};

const editMenuConfigByIdSuccessReducer = (
    state: MenuConfigPageState,
    action: EditMenuConfigByIdSuccess
) => {
    message.success(`Edit Successfully`, 1.5);
    return {
        ...state,
        isBusy: false,
        errorMessage: '',
    };
};

const editMenuConfigByIdErrorReducer = (
    state: MenuConfigPageState,
    action: EditMenuConfigByIdError
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: action.payload.errorMessage
    };
};

// ========================================================
// create new menuconfig reducer

const createMenuConfigReducer = (
    state: MenuConfigPageState,
    action: CreateMenuConfig
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: ''
    };
};

const createMenuConfigInProgressReducer = (
    state: MenuConfigPageState,
    action: CreateMenuConfigInProgress
) => {
    return {
        ...state,
        isBusy: true,
        errorMessage: ''
    };
};

const createMenuConfigSuccessReducer = (
    state: MenuConfigPageState,
    action: CreateMenuConfigSuccess
) => {
    message.success(`Create Successfully`, 1.5);
    return {
        ...state,
        isBusy: false,
        errorMessage: '',
    };
};

const createMenuConfigErrorReducer = (
    state: MenuConfigPageState,
    action: CreateMenuConfigError
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: action.payload.errorMessage
    };
};

// ========================================================

const menuConfigPageReducer = handleActions<MenuConfigPageState, any>(
    {
        [CREATE_MENUCONFIG]: createMenuConfigReducer,
        [CREATE_MENUCONFIG_IN_PROGRESS]: createMenuConfigInProgressReducer,
        [CREATE_MENUCONFIG_SUCCESS]: createMenuConfigSuccessReducer,
        [CREATE_MENUCONFIG_ERROR]: createMenuConfigErrorReducer,
        [FETCH_PARENT_ID_DATA]: fetchParentIdDataReducer,
        [FETCH_PARENT_ID_DATA_IN_PROGRESS]: fetchParentIdDataInProgressReducer,
        [FETCH_PARENT_ID_DATA_SUCCESS]: fetchParentIdDataSuccessReducer,
        [FETCH_PARENT_ID_DATA_ERROR]: fetchParentIdDataErrorReducer,
        [SHOW_ADD_MENU_CONFIG_MODAL]: showAddMenuConfigModalReducer,
        [CLOSE_ADD_MENU_CONFIG_MODAL]: closeAddMenuConfigModalReducer,
        [SET_MENU_CONFIG_STATUS_IN_PROGRESS]: setMenuConfigStatusInProgressReducer,
        [SET_MENU_CONFIG_STATUS_SUCCESS]: setMenuConfigStatusSuccessReducer,
        [SET_DROP_DOWN_MENU_BUTTON_STATE]: setDropDownMenuButtonStateReducer,
        [CLEAR_DROP_DOWN_MENU_BUTTON_STATE]: clearDropDownMenuButtonStateReducer,
        [EDIT_MENUCONFIG_BY_ID]: editMenuConfigByIdReducer,
        [EDIT_MENUCONFIG_BY_ID_IN_PROGRESS]: editMenuConfigByIdInProgressReducer,
        [EDIT_MENUCONFIG_BY_ID_SUCCESS]: editMenuConfigByIdSuccessReducer,
        [EDIT_MENUCONFIG_BY_ID_ERROR]: editMenuConfigByIdErrorReducer,
        [CLOSE_EDIT_MENU_CONFIG_MODAL]: closeEditMenuConfigModalReducer,
        [FETCH_MENU_CONFIG_BY_ID]: fetchMenuConfigByIdReducer,
        [FETCH_MENU_CONFIG_BY_ID_IN_PROGRESS]: fetchMenuConfigByIdInProgressReducer,
        [FETCH_MENU_CONFIG_BY_ID_SUCCESS]: fetchMenuConfigByIdSuccessReducer,
        [FETCH_MENU_CONFIG_BY_ID_ERROR]: fetchMenuConfigByIdErrorReducer,
        [FETCH_ALL_MENU_CONFIG]: fetchAllMenuConfigReducer,
        [FETCH_ALL_MENU_CONFIG_IN_PROGRESS]: fetchAllMenuConfigInProgressReducer,
        [FETCH_ALL_MENU_CONFIG_SUCCESS]: fetchAllMenuConfigSuccessReducer,
        [FETCH_ALL_MENU_CONFIG_ERROR]: fetchAllMenuConfigErrorReducer,
    },
    initialState
);

export default menuConfigPageReducer;
