interface UploadImagePageState {
  isBusy: boolean;
  imgList: any[];
  isEditFilename: boolean;
  currentImage: any;
  search: string;
  isAddingAlbum: boolean;
  currentAlbum: string;
  newAlbumname: string;
  albumList: string[];
}

export { UploadImagePageState };
