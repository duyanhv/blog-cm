import {
  Upload,
  Icon,
  Button,
  // message
} from 'antd';
import React from 'react';
import Card from 'antd/lib/card';
import { ProfileState } from '../../../redux/profile';
import { AppSettingsState } from '../../../redux/app-settings';
import { Dispatch } from 'redux';
import {
  CompanyPageState,
  uploadCompanyLogoSuccess,
} from '../../../redux/ui/company-page';
import './AvatarUploader.less';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
interface UploadButtonProps {
  profile: ProfileState;
  appSettings: AppSettingsState;
  dispatch: Dispatch<any>;
  companyPage: CompanyPageState;
}
interface UploadButtonState {
  imageSrc: string;
}

class UploadButton extends React.Component<
  UploadButtonProps,
  UploadButtonState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageSrc: '',
    };
  }
  onChangeUpload = (info: any) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageBase64Str =>
        this.props.dispatch(uploadCompanyLogoSuccess(imageBase64Str)),
      );
    }
  };
  componentDidMount(): void {
    !this.props.companyPage.imageSrc
      ? (this.props.companyPage.imageSrc = `${
          this.props.appSettings.apiUrl
        }/company/getCompanyLogo`)
      : (this.props.companyPage.imageSrc = this.props.companyPage.imageSrc);
  }
  render(): JSX.Element {
    return (
      <Card
        className="avatar-uploader"
        hoverable={true}
        cover={<img src={this.props.companyPage.imageSrc} />}
      >
        <Upload
          name="logo"
          action={`${this.props.appSettings.apiUrl}/company/upload`}
          headers={{
            Authorization: `Bearer ${this.props.profile.token}`,
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
