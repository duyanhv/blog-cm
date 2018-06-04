import { handleActions } from 'redux-actions';
import { UploadImagePageState } from './state';
import {
  UploadImgSuccess,
  UPLOAD_IMG_SUCCESS,
  FetchImgListSuccess,
  FETCH_IMG_LIST_SUCCESS,
  Starting,
  STARTING,
  InputChange,
  INPUT_CHANGE,
  UpdateFilenameSuccess,
  UPDATE_FILENAME_SUCCESS,
  DeleteImgSuccess,
  DELETE_IMG_SUCCESS,
  OpenEditFilename,
  OPEN_EDIT_FILENAME,
  CloseEditFilename,
  CLOSE_EDIT_FILENAME,
  OpenAddingAlbum,
  CloseAddingAlbum,
  OPEN_ADDING_ALBUM,
  CLOSE_ADDING_ALBUM,
  SubmitNewAlbumSuccess,
  SUBMIT_NEW_ALBUM_SUCCESS,
} from './action';

const initialState = {
  isBusy: true,
  imgList: [],
  isEditFilename: false,
  search: '',
  isAddingAlbum: false,
  currentAlbum: 'default',
  newAlbumname: '',
  albumList: [],
  currentImage: {
    _id: '',
    filename: '',
    hyperlink: '',
  },
};

const uploadImageSuccessReducer = (
  state: UploadImagePageState,
  action: UploadImgSuccess,
) => {
  return {
    ...state,
    imgList: [action.payload.imgInfo, ...state.imgList],
  };
};

const startingReducer = (state: UploadImagePageState, action: Starting) => {
  return {
    ...state,
    isBusy: true,
  };
};

const fetchImgListSuccessReducer = (
  state: UploadImagePageState,
  action: FetchImgListSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    imgList: action.payload.result,
    albumList: action.payload.albums,
  };
};

const openEditFilenameReducer = (
  state: UploadImagePageState,
  action: OpenEditFilename,
) => {
  return {
    ...state,
    isEditFilename: true,
    currentImage: state.imgList.filter(
      item => item._id === action.payload.imageId,
    )[0],
  };
};

const closeEditFilenameReducer = (
  state: UploadImagePageState,
  action: CloseEditFilename,
) => {
  return {
    ...state,
    isEditFilename: false,
    currentImage: {
      _id: '',
      filename: '',
      hyperlink: '',
    },
  };
};

const inputChangeReducer = (
  state: UploadImagePageState,
  action: InputChange,
) => {
  const key = Object.keys(action.payload.info)[0];
  if (Object.keys(state.currentImage).indexOf(key) > -1) {
    return {
      ...state,
      currentImage: {
        ...state.currentImage,
        ...action.payload.info,
      },
    };
  } else {
    return {
      ...state,
      ...action.payload.info,
    };
  }
};

const updateFilenameSuccessReducer = (
  state: UploadImagePageState,
  action: UpdateFilenameSuccess,
) => {
  const hyperlinkArray = state.currentImage.hyperlink.split('/');
  hyperlinkArray[hyperlinkArray.length - 1] = action.payload.newName;
  const newHyperlink = hyperlinkArray.join('/');

  const newImageInfo = {
    _id: state.currentImage._id,
    filename: action.payload.newName,
    hyperlink: newHyperlink,
  };

  return {
    ...state,
    isBusy: false,
    isEditFilename: false,
    imgList: state.imgList.map(item => {
      if (item._id === state.currentImage._id) {
        return newImageInfo;
      } else {
        return item;
      }
    }),
    currentImage: {
      _id: '',
      filename: '',
      hyperlink: '',
    },
  };
};

const deleteImgSuccessReducer = (
  state: UploadImagePageState,
  action: DeleteImgSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    isEditFilename: false,
    imgList: state.imgList.filter(item => item._id !== action.payload.imageId),
  };
};

const openAddingAlbumReducer = (
  state: UploadImagePageState,
  action: OpenAddingAlbum,
) => {
  return {
    ...state,
    isAddingAlbum: true,
  };
};

const closeAddingAlbumReducer = (
  state: UploadImagePageState,
  action: CloseAddingAlbum,
) => {
  return {
    ...state,
    isAddingAlbum: false,
    newAlbumname: '',
  };
};

const submitNewAlbumSuccessReducer = (
  state: UploadImagePageState,
  action: SubmitNewAlbumSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    isAddingAlbum: false,
    newAlbumname: '',
    albumList: [action.payload.albumName, ...state.albumList],
  };
};

const uploadImgPageReducer = handleActions<UploadImagePageState, any>(
  {
    [UPLOAD_IMG_SUCCESS]: uploadImageSuccessReducer,
    [STARTING]: startingReducer,
    [FETCH_IMG_LIST_SUCCESS]: fetchImgListSuccessReducer,
    [OPEN_EDIT_FILENAME]: openEditFilenameReducer,
    [CLOSE_EDIT_FILENAME]: closeEditFilenameReducer,
    [INPUT_CHANGE]: inputChangeReducer,
    [UPDATE_FILENAME_SUCCESS]: updateFilenameSuccessReducer,
    [DELETE_IMG_SUCCESS]: deleteImgSuccessReducer,
    [OPEN_ADDING_ALBUM]: openAddingAlbumReducer,
    [CLOSE_ADDING_ALBUM]: closeAddingAlbumReducer,
    [SUBMIT_NEW_ALBUM_SUCCESS]: submitNewAlbumSuccessReducer,
  },
  initialState,
);

export { uploadImgPageReducer };
