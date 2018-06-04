import * as React from 'react';
import { Row, Col, message } from 'antd';
import {
  getUserService,
  getAuthService,
} from '../../service-proxies/service.provider';
import './RegisterPage.less';
import RegisterForm from './RegisterForm';
import RegisterFooter from './RegisterFooter';
import Logo from '../../layouts/Logo/Logo';
import { RouteComponentProps } from 'react-router';
import { RegisterUserInputDto } from '../../service-proxies/service-proxies';

interface RegisterPageProps extends RouteComponentProps<any> {}

interface RegisterPageState {
  isUsernameExist: undefined | boolean;
  isEmailExist: undefined | boolean;
  isRegisterSuccess: boolean;
  isBusy: boolean;
}

export default class RegisterPage extends React.Component<
  RegisterPageProps,
  RegisterPageState
> {
  state: RegisterPageState = {
    isUsernameExist: undefined,
    isEmailExist: undefined,
    isRegisterSuccess: false,
    isBusy: false,
  };

  handleSubmit = async (user: RegisterUserInputDto) => {
    await this.setState({
      ...this.state,
      isBusy: true,
    });
    const service = getAuthService();
    await service.register(user as any);
    this.setState(
      {
        ...this.state,
        isRegisterSuccess: true,
      },
      () => {
        message.success('Register Successfully', 0.5, () =>
          this.props.history.push('/login'),
        );
      },
    );
  };

  validateUsername = async (username: string) => {
    const service = getUserService();
    const user = await service.findByUsername(username);

    if (user.username) {
      this.setState({
        ...this.state,
        isUsernameExist: true,
      });
      return true;
    } else {
      this.setState({
        ...this.state,
        isUsernameExist: false,
      });
      return false;
    }
  };

  validateEmail = async (email: string) => {
    const service = getUserService();
    const user = await service.findByEmail(email);

    if (user.email) {
      this.setState({
        ...this.state,
        isEmailExist: true,
      });
      return true;
    } else {
      this.setState({
        ...this.state,
        isEmailExist: false,
      });
      return false;
    }
  };

  render(): JSX.Element {
    return (
      <div
        className="register-page"
        style={{
          backgroundImage: `url(${require('../../images/login-register-bg.svg')})`,
        }}
      >
        <Row>
          <Col xs={0} sm={2} lg={4} />
          <Col xs={24} sm={20} lg={16}>
            <div className="container">
              <Logo />
              <RegisterForm
                handleSubmit={this.handleSubmit}
                validateUsername={this.validateUsername}
                validateEmail={this.validateEmail}
                isUsernameExist={this.state.isUsernameExist}
                isEmailExist={this.state.isEmailExist}
                isBusy={this.state.isBusy}
                {...this.props}
              />
              <RegisterFooter />
            </div>
          </Col>
          <Col xs={0} sm={2} lg={4} />
        </Row>
      </div>
    );
  }
}
