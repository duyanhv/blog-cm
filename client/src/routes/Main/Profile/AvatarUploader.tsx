import React from 'react';
import { Card, Upload, Button, Icon } from 'antd';
import './AvatarUploader.less';
import { Dispatch } from 'redux';
import {
  ProfilePageState,
  uploadImageSuccess,
} from '../../../redux/ui/profile-page';
import { AppSettingsState } from '../../../redux/app-settings';
import { ProfileState } from '../../../redux/profile';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { TranslationFunction, translate } from 'react-i18next';

interface NestedAvatarUploaderProps extends I18nextProviderProps {
  profile: ProfileState;
  appSettings: AppSettingsState;
  profilePage: ProfilePageState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

const getBase64 = (imgFile, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(imgFile);
};

const NestedAvatarUploader = (props: NestedAvatarUploaderProps) => {
  const imageSrc: string = props.profilePage.imageSrc;

  return (
    <Card
      className="avatar-uploader"
      hoverable={true}
      cover={<img src={imageSrc} />}
    >
      <Upload
        name="avatar"
        action={`${props.appSettings.apiUrl}/profiles/uploadProfilePicture`}
        headers={{
          Authorization: `Bearer ${props.profile.token}`,
        }}
        onChange={info => {
          if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imgSrc =>
              props.dispatch(uploadImageSuccess(imgSrc)),
            );
          }
        }}
      >
        <Button>
          <Icon type="upload" /> {props.t('AvatarUploader.upload')}
        </Button>
      </Upload>
    </Card>
  );
};

const AvatarUploader = translate()(NestedAvatarUploader);

export { AvatarUploader };
