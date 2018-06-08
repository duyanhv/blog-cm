import * as React from 'react';
import { Modal, Card, Upload, Button, Icon, Row, Col, Form, Input } from 'antd';
import TeacherFilter from './TeacherFilter';
import TeacherTable from './TeacherTable';
import { TranslationFunction, translate } from 'react-i18next';
import './TeacherPage.less';
import { AppSettingsState } from '../../../redux/app-settings';
import { AppState } from '../../../redux';
import { connect } from 'react-redux';

interface TeacherPageProps {
  appSettings: AppSettingsState;
  t: TranslationFunction;
}

class TeacherPage extends React.Component<TeacherPageProps, any> {
  handleSearchChange = (value: string) => {
    // tslint:disable-next-line:no-console
    console.log(value);
  }

  handleFilterChange = (value: string) => {
    // tslint:disable-next-line:no-console
    console.log(value);
  }

  showAddTeacherModal = (currentTeacher: any) => {
    // tslint:disable-next-line:no-console
    console.log(currentTeacher);
  }

  handleTableChange = (_pagination: any, _filters: any, _sorter: any) => {
    // tslint:disable-next-line:no-console
    console.log('Table Change');
  }

  render(): JSX.Element {
    return (
      <div className="teacher-page">
        <TeacherFilter
          handleSearchChange={this.handleSearchChange}
          showAddTeacherModal={this.showAddTeacherModal}
          handleFilterChange={this.handleFilterChange}
          {...this.props}
        />

        <TeacherTable
          handleTableChange={this.handleTableChange}
          showAddTeacherModal={this.showAddTeacherModal}
          {...this.props}
        />

        <Modal
          title={this.props.t('UserListPage.add')}
          okText={this.props.t('UserListPage.ok')}
          cancelText={this.props.t('UserListPage.cancel')}
          onOk={this.handleCreateUserFormSubmit}
          onCancel={this.closeAddUserModal}
          visible={this.props.userListPage.addUserModalVisible}
        >
          <Card
            className="avatar-uploader"
            hoverable={true}
            cover={<img src={imageSrc} />}
          >
            <Upload
              name="avatar"
              action={`${props.appSettings.apiUrl}/teachers/uploadProfilePicture`}
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


          <Form onSubmit={(e: any) => handleUpdateProfile(e)}>
            <Row>
              <Col xl={8} xs={24}>
                <Form.Item label={props.t('firstName')} className="form-item-small">
                  {getFieldDecorator('firstName', {
                    rules: [
                      { required: true, message: 'Please Fill in Your First Name' },
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                    initialValue: props.profilePage.firstName,
                  })(
                    <Input
                      name="firstName"
                      prefix={<Icon type="idcard" />}
                      placeholder={props.t('firstName')}
                      onChange={onProfileInfoChange}
                    />,
                  )}
                </Form.Item>
              </Col>

              <Col xl={8} xs={24}>
                <Form.Item label={props.t('middleName')} className="form-item-small">
                  {getFieldDecorator('middleName', {
                    initialValue: props.profilePage.middleName,
                  })(
                    <Input
                      name="middleName"
                      prefix={<Icon type="idcard" />}
                      placeholder={props.t('middleName')}
                      onChange={onProfileInfoChange}
                    />,
                  )}
                </Form.Item>
              </Col>

              <Col xl={8} xs={24}>
                <Form.Item label={props.t('lastName')} className="form-item-small">
                  {getFieldDecorator('lastName', {
                    rules: [
                      { required: true, message: 'Please Fill in Your Last Name' },
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                    initialValue: props.profilePage.lastName,
                  })(
                    <Input
                      name="lastName"
                      prefix={<Icon type="idcard" />}
                      placeholder={props.t('lastName')}
                      onChange={onProfileInfoChange}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('username')} className="form-item-normal">
                  <Input
                    prefix={<Icon type="user" />}
                    name="username"
                    placeholder={props.t('username')}
                    value={props.profilePage.username}
                    disabled={true}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('email')} className="form-item-normal">
                  <Input
                    prefix={<Icon type="mail" />}
                    name="email"
                    placeholder={props.t('email')}
                    value={props.profilePage.email}
                    disabled={true}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('password')} className="form-item-normal">
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                        message:
                          'Password must be at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character',
                      },
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                  })(
                    <Input
                      prefix={<Icon type="lock" />}
                      type="password"
                      name="password"
                      placeholder={props.t('password')}
                      onChange={onProfileInfoChange}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item
                  label={props.t('confirmPassword')}
                  className="form-item-normal"
                >
                  {getFieldDecorator('confirmPassword', {
                    rules: [
                      {
                        required: props.profilePage.password ? true : false,
                        message: 'Please Confirm your Password!',
                      },
                      { validator: validateConfirmPassword },
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                  })(
                    <Input
                      prefix={<Icon type="lock" />}
                      type="password"
                      placeholder={props.t('confirmPassword')}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item className="form-item-normal">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={props.profilePage.isBusy}
                  >
                    {props.t('save')}
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    appSettings: state.appSettings
  };
};

export default connect(mapStateToProps)(translate()(TeacherPage));
