import React from 'react';
import { Upload, Icon } from 'antd';
import { Dispatch } from 'redux';
import {
  uploadImgSuccess,
  UploadImagePageState,
} from '../../../redux/ui/upload-image-page';
import './ImageUploader.less';

interface ImageUploaderProps extends UploadImagePageState {
  apiUrl: string;
  token: string;
  dispatch: Dispatch<any>;
}

const ImageUploader = (props: ImageUploaderProps) => {
  return (
    <div className="upload-images-uploader">
      <Upload.Dragger
        name="images"
        multiple={true}
        action={`${props.apiUrl}/uploadImages/upload`}
        headers={{
          Authorization: `Bearer ${props.token}`,
        }}
        data={{ album: props.currentAlbum }}
        onChange={info => {
          if (info.file.status === 'done') {
            props.dispatch(uploadImgSuccess(info.file.response));
          }
        }}
      >
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          {`Click or drag image here to upload to "${
            props.currentAlbum
          }" album`}
        </p>
      </Upload.Dragger>
    </div>
  );
};

export default ImageUploader;
