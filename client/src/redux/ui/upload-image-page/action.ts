import { createAction } from 'redux-actions';
import {
  UpdateFilenameDto,
  GetUploadedImagesResultDto,
  GetUploadedImagesDetailDto,
} from '../../../service-proxies/service-proxies';

export const UPLOAD_IMG_SUCCESS = 'UPLOAD_IMAGE_PAGE/UPLOAD_IMG_SUCCESS';
export type UPLOAD_IMG_SUCCESS = typeof UPLOAD_IMG_SUCCESS;

export const FETCH_IMG_LIST = 'UPLOAD_IMAGE_PAGE/FETCH_IMG_LIST';
export type FETCH_IMG_LIST = typeof FETCH_IMG_LIST;

export const STARTING = 'UPLOAD_IMAGE_PAGE/STARTING';
export type STARTING = typeof STARTING;

export const FETCH_IMG_LIST_SUCCESS =
  'UPLOAD_IMAGE_PAGE/FETCH_IMG_LIST_SUCCESS';
export type FETCH_IMG_LIST_SUCCESS = typeof FETCH_IMG_LIST_SUCCESS;

export const OPEN_EDIT_FILENAME = 'UPLOAD_IMAGE_PAGE/OPEN_EDIT_FILENAME';
export type OPEN_EDIT_FILENAME = typeof OPEN_EDIT_FILENAME;

export const CLOSE_EDIT_FILENAME = 'UPLOAD_IMAGE_PAGE/CLOSE_EDIT_FILENAME';
export type CLOSE_EDIT_FILENAME = typeof CLOSE_EDIT_FILENAME;

export const INPUT_CHANGE = 'UPLOAD_IMAGE_PAGE/INPUT_CHANGE';
export type INPUT_CHANGE = typeof INPUT_CHANGE;

export const UPDATE_FILENAME = 'UPLOAD_IMAGE_PAGE/UPDATE_FILENAME';
export type UPDATE_FILENAME = typeof UPDATE_FILENAME;

export const UPDATE_FILENAME_SUCCESS =
  'UPLOAD_IMAGE_PAGE/UPDATE_FILENAME_SUCCESS';
export type UPDATE_FILENAME_SUCCESS = typeof UPDATE_FILENAME_SUCCESS;

export const DELETE_IMG = 'UPLOAD_IMAGE_PAGE/DELETE_IMG';
export type DELETE_IMG = typeof DELETE_IMG;

export const DELETE_IMG_SUCCESS = 'UPLOAD_IMAGE_PAGE/DELETE_IMG_SUCCESS';
export type DELETE_IMG_SUCCESS = typeof DELETE_IMG_SUCCESS;

export const OPEN_ADDING_ALBUM = 'UPLOAD_IMAGE_PAGE/OPEN_ADDING_ALBUM';
export type OPEN_ADDING_ALBUM = typeof OPEN_ADDING_ALBUM;

export const CLOSE_ADDING_ALBUM = 'UPLOAD_IMAGE_PAGE/CLOSE_ADDING_ALBUM';
export type CLOSE_ADDING_ALBUM = typeof CLOSE_ADDING_ALBUM;

export const SUBMIT_NEW_ALBUM = 'UPLOAD_IMAGE_PAGE/SUBMIT_NEW_ALBUM';
export type SUBMIT_NEW_ALBUM = typeof SUBMIT_NEW_ALBUM;

export const SUBMIT_NEW_ALBUM_SUCCESS =
  'UPLOAD_IMAGE_PAGE/SUBMIT_NEW_ALBUM_SUCCESS';
export type SUBMIT_NEW_ALBUM_SUCCESS = typeof SUBMIT_NEW_ALBUM_SUCCESS;

export interface UploadImgSuccess {
  type: UPLOAD_IMG_SUCCESS;
  payload: {
    imgInfo: GetUploadedImagesDetailDto;
  };
}

export interface FetchImgList {
  type: FETCH_IMG_LIST;
  payload: {
    id: string;
    search: string;
  };
}

export interface Starting {
  type: STARTING;
}

export interface FetchImgListSuccess {
  type: FETCH_IMG_LIST_SUCCESS;
  payload: GetUploadedImagesResultDto;
}

export interface OpenEditFilename {
  type: OPEN_EDIT_FILENAME;
  payload: {
    imageId: string;
  };
}

export interface CloseEditFilename {
  type: CLOSE_EDIT_FILENAME;
}

export interface InputChange {
  type: INPUT_CHANGE;
  payload: {
    info: any;
  };
}

export interface UpdateFilename {
  type: UPDATE_FILENAME;
  payload: {
    updateFilenameInfo: UpdateFilenameDto;
  };
}

export interface UpdateFilenameSuccess {
  type: UPDATE_FILENAME_SUCCESS;
  payload: {
    newName: string;
  };
}

export interface DeleteImg {
  type: DELETE_IMG;
  payload: {
    imageId: string;
  };
}

export interface DeleteImgSuccess {
  type: DELETE_IMG_SUCCESS;
  payload: {
    imageId: string;
  };
}

export interface OpenAddingAlbum {
  type: OPEN_ADDING_ALBUM;
}

export interface CloseAddingAlbum {
  type: CLOSE_ADDING_ALBUM;
}

export interface SubmitNewAlbum {
  type: SUBMIT_NEW_ALBUM;
  payload: {
    albumName: string;
  };
}

export interface SubmitNewAlbumSuccess {
  type: SUBMIT_NEW_ALBUM_SUCCESS;
  payload: {
    albumName: string;
  };
}

export const uploadImgSuccess = createAction(
  UPLOAD_IMG_SUCCESS,
  (imgInfo: GetUploadedImagesDetailDto) => ({
    imgInfo,
  }),
);

export const fetchImgList = createAction(
  FETCH_IMG_LIST,
  (id: string, search: string) => ({
    id,
    search,
  }),
);

export const starting = createAction(STARTING);

export const fetchImgListSuccess = createAction(
  FETCH_IMG_LIST_SUCCESS,
  ({ result, albums }: GetUploadedImagesResultDto) => ({
    result,
    albums,
  }),
);

export const openEditFilename = createAction(
  OPEN_EDIT_FILENAME,
  (imageId: string) => ({
    imageId,
  }),
);

export const closeEditFilename = createAction(CLOSE_EDIT_FILENAME);

export const inputChange = createAction(INPUT_CHANGE, (info: any) => ({
  info,
}));

export const updateFilename = createAction(
  UPDATE_FILENAME,
  (updateFilenameInfo: UpdateFilenameDto) => ({
    updateFilenameInfo,
  }),
);

export const updateFilenameSuccess = createAction(
  UPDATE_FILENAME_SUCCESS,
  (newName: string) => ({
    newName,
  }),
);

export const deleteImg = createAction(DELETE_IMG, (imageId: string) => ({
  imageId,
}));

export const deleteImgSuccess = createAction(
  DELETE_IMG_SUCCESS,
  (imageId: string) => ({
    imageId,
  }),
);

export const openAddingAlbum = createAction(OPEN_ADDING_ALBUM);

export const closeAddingAlbum = createAction(CLOSE_ADDING_ALBUM);

export const submitNewAlbum = createAction(
  SUBMIT_NEW_ALBUM,
  (albumName: string) => ({
    albumName,
  }),
);

export const submitNewAlbumSuccess = createAction(
  SUBMIT_NEW_ALBUM_SUCCESS,
  (albumName: string) => ({
    albumName,
  }),
);
