import * as React from 'react';
import { Row, Col, Spin } from 'antd';
import { Dispatch, connect } from 'react-redux';
import './LoginPage.less';
import LoginFooter from './LoginFooter';
import { AppState } from '../../redux';
import {
  LoginPageState,
  LoginInProgressState,
  login,
} from '../../redux/ui/login-page';
import LoginForm from './LoginForm';
import { translate, TranslationFunction } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { getI18nService } from '../../service-proxies/service.provider';
import {
  languageChange,
  languageChangeSuccess,
  AppSettingsState,
  languageChangeFailed,
} from '../../redux/app-settings';
import _ from 'lodash';
import { getErrorMessage, message } from '../../helpers';

interface LoginPageProps extends I18nextProviderProps {
  appSettings: AppSettingsState;
  loginPage: LoginPageState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

const LoginPage = (props: LoginPageProps) => {
  const isBusy = props.loginPage.state === LoginInProgressState;

  const onLogin = (formInput: any) => {
    props.dispatch(
      login({
        ...formInput,
        callbackUrl: props.loginPage.callbackUrl,
      }),
    );
  };

  const onLanguageChange = async language => {
    props.dispatch(languageChange());

    _.delay(async () => {
      if (!props.i18n.hasResourceBundle(language, 'translation')) {
        const i18nService = getI18nService();
        const languageData = await i18nService.getLanguage(language);
        props.i18n.addResourceBundle(
          language,
          'translation',
          languageData.result,
        );
      }

      props.i18n.changeLanguage(language, (err, t) => {
        if (err) {
          message.error(getErrorMessage(err.message));
          props.dispatch(languageChangeFailed());
          return;
        }
        props.dispatch(languageChangeSuccess(language));
      });
      // tslint:disable-next-line:align
    }, 200);
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${require('../../images/login-register-bg.svg')})`,
      }}
    >
      <Row>
        <Col xs={0} sm={2} lg={4} />
        <Col xs={24} sm={20} lg={16}>
          <div className="container">
            <Spin
              size="large"
              tip="Translating ..."
              spinning={props.appSettings.isTranslating}
            >
              <LoginForm
                onHandleSubmit={onLogin}
                isBusy={isBusy}
                errorMessage={props.loginPage.errorMessage}
                username={props.loginPage.username}
                {...props}
              />
              <LoginFooter langugeChange={onLanguageChange} {...props} />
            </Spin>
          </div>
        </Col>
        <Col xs={0} sm={2} lg={4} />
      </Row>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  appSettings: state.appSettings,
  loginPage: state.ui.loginPage,
});

export default connect(mapStateToProps)(translate()(LoginPage));
