import {
  Upload,
  Icon,
  Button,
  // message
} from 'antd';
import React from 'react';
import Card from 'antd/lib/card';
import { Dispatch } from 'redux';
import {
  uploadCompanyLogoSuccess,
} from '../../../redux/ui/company-page';
import './AvatarUploader.less';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
interface UploadButtonProps {
  apiUrl: string;
  dispatch: Dispatch<any>;
  imageSrc: string;
  token: string;
}

class UploadButton extends React.Component<UploadButtonProps> {
  constructor(props: any) {
    super(props);
  }
  onChangeUpload = (info: any) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageBase64Str =>
        this.props.dispatch(uploadCompanyLogoSuccess(imageBase64Str)),
      );
    }
  };
  render(): JSX.Element {
    return (
      <Card
        className="avatar-uploader"
        hoverable={true}
        cover={<img src={`${this.props.apiUrl}/company/getCompanyLogo`} />}
      >
        <Upload
          name="logo"
          action={`${this.props.apiUrl}/company/upload`}
          headers={{
            Authorization: `Bearer ${this.props.token}`,
          }}
          onChange={this.onChangeUpload}
        >
          <Button>
            <Icon type="upload" /> Upload
          </Button>
        </Upload>
      </Card>
    );
  }
}
export default UploadButton;
