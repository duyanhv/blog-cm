import * as React from 'react';
import { Form, Input, Icon, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import {
  UserListPageState,
  userInfoChange,
} from '../../../../redux/ui/user-list-page';
import { Dispatch } from 'redux';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { TranslationFunction } from 'react-i18next';

interface NestedAddNewUserFormProps
  extends FormComponentProps,
    I18nextProviderProps {
  userListPage: UserListPageState;
  dispatch: Dispatch<any>;
  closeModal: () => void;
  t: TranslationFunction;
}

class NestedAddNewUserForm extends React.Component<
  NestedAddNewUserFormProps,
  any
> {
  onUserInfoChange = (e: any) => {
    const propertyName = (e.target as any).name;

    this.props.dispatch(
      userInfoChange({
        [propertyName]:
          propertyName === 'isActive'
            ? (e.target as any).checked
            : (e.target as any).value,
      }),
    );
  };

  render(): JSX.Element {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 14 },
      },
    };

    return (
      <div className="add-new-user-form">
        <Form>
          <Form.Item
            {...formItemLayout}
            label={this.props.t('AddNewUserForm.username')}
          >
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' },
                {
                  pattern: /^[a-zA-Z0-9]{6,30}$/,
                  message: 'Username must be at least 6 characters',
                },
              ],
              validateTrigger: 'onBlur',
              validateFirst: true,
              initialValue: this.props.userListPage.currentUser.username,
            })(
              <Input
                prefix={<Icon type="user" />}
                name="userName"
                placeholder={this.props.t('AddNewUserForm.username')}
                onChange={this.onUserInfoChange}
              />,
            )}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label={this.props.t('AddNewUserForm.password')}
          >
            {getFieldDecorator('password', {
              rules: [
                {
                  required: this.props.userListPage.currentUser._id
                    ? false
                    : true,
                  message: 'Please input your Password!',
                },
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
                placeholder={this.props.t('AddNewUserForm.password')}
                onChange={this.onUserInfoChange}
              />,
            )}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label={this.props.t('AddNewUserForm.email')}
          >
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please Fill in Your Email Address',
                },
                { type: 'email', message: 'Invalid Email Address' },
              ],
              validateTrigger: 'onBlur',
              validateFirst: true,
              initialValue: this.props.userListPage.currentUser.email,
            })(
              <Input
                name="email"
                prefix={<Icon type="mail" />}
                placeholder={this.props.t('AddNewUserForm.email')}
                onChange={this.onUserInfoChange}
              />,
            )}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label={this.props.t('AddNewUserForm.firstName')}
          >
            {getFieldDecorator('firstName', {
              rules: [
                { required: true, message: 'Please Fill in Your First Name' },
              ],
              validateTrigger: 'onBlur',
              validateFirst: true,
              initialValue: this.props.userListPage.currentUser.firstName,
            })(
              <Input
                name="firstName"
                prefix={<Icon type="user" />}
                placeholder={this.props.t('AddNewUserForm.firstName')}
                onChange={this.onUserInfoChange}
              />,
            )}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label={this.props.t('AddNewUserForm.middleName')}
          >
            {getFieldDecorator('middleName', {
              initialValue: this.props.userListPage.currentUser.middleName,
            })(
              <Input
                name="middleName"
                prefix={<Icon type="user" />}
                placeholder={this.props.t('AddNewUserForm.middleName')}
                onChange={this.onUserInfoChange}
              />,
            )}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label={this.props.t('AddNewUserForm.lastName')}
          >
            {getFieldDecorator('lastName', {
              rules: [
                { required: true, message: 'Please Fill in Your Last Name' },
              ],
              validateTrigger: 'onBlur',
              validateFirst: true,
              initialValue: this.props.userListPage.currentUser.lastName,
            })(
              <Input
                name="lastName"
                prefix={<Icon type="user" />}
                placeholder={this.props.t('AddNewUserForm.lastName')}
                onChange={this.onUserInfoChange}
              />,
            )}
          </Form.Item>

          <Form.Item
            wrapperCol={{
              xs: { span: 14, offset: 7 },
            }}
          >
            {getFieldDecorator('isActive', {
              validateTrigger: 'onBlur',
              validateFirst: true,
              initialValue: this.props.userListPage.currentUser.isActive,
            })(
              <Checkbox
                name="isActive"
                defaultChecked={this.props.userListPage.currentUser.isActive}
                onChange={this.onUserInfoChange}
              >
                {this.props.t('AddNewUserForm.isActive')}
              </Checkbox>,
            )}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const AddNewUserForm = Form.create()(NestedAddNewUserForm);

export { AddNewUserForm };
