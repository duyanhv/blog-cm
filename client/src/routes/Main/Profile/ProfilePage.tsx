import * as React from 'react';
import './ProfilePage.less';
import { Row, Col } from 'antd';
import { AvatarUploader } from './AvatarUploader';
import { ProfileForm } from './ProfileForm';
import { ProfilePageState, fetchProfile } from '../../../redux/ui/profile-page';
import { ProfileState } from '../../../redux/profile';
import { AppState } from '../../../redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppSettingsState } from '../../../redux/app-settings';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { TranslationFunction, translate } from 'react-i18next';

interface ProfilePageProps extends I18nextProviderProps {
  appSettings: AppSettingsState;
  profilePage: ProfilePageState;
  profile: ProfileState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

class ProfilePage extends React.Component<ProfilePageProps, any> {
  componentDidMount(): void {
    this.props.dispatch(fetchProfile(this.props.profile.id));
  }

  render(): JSX.Element {
    return (
      <div className="profile-page">
        <Row style={{ width: '95%', margin: '0 auto', padding: '12px 0' }}>
          <Col xl={6} xs={24}>
            <AvatarUploader {...this.props} />
          </Col>

          <Col xl={18} xs={24}>
            <ProfileForm {...this.props} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    profile: state.profile,
    profilePage: state.ui.profilePage,
    appSettings: state.appSettings,
  };
};

export default connect(mapStateToProps)(translate()(ProfilePage));
