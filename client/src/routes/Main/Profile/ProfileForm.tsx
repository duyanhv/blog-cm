import React from 'react';
import { Row, Col, Form, Input, Button, Icon } from 'antd';
import './ProfileForm.less';
import { FormComponentProps } from 'antd/lib/form';
import {
  ProfilePageState,
  profileInfoChange,
  updateProfile,
} from '../../../redux/ui/profile-page';
import { ProfileState } from '../../../redux/profile';
import { Dispatch } from 'redux';
import { translate, TranslationFunction } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';

interface NestedProfileFormProps
  extends FormComponentProps,
    I18nextProviderProps {
  profilePage: ProfilePageState;
  profile: ProfileState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

const NestedProfileForm = (props: NestedProfileFormProps) => {
  const validateConfirmPassword = (rule: any, value: any, callback: any) => {
    if (value !== props.form.getFieldValue('password')) {
      callback('Confirm Password Didnt Match');
    }
    callback();
  };

  const onProfileInfoChange = e => {
    props.dispatch(
      profileInfoChange({
        [e.target.name]: e.target.value,
      }),
    );
  };

  const handleUpdateProfile = (e: any) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        props.dispatch(updateProfile(values));
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
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
  );
};

const ProfileForm = Form.create()(translate()(NestedProfileForm));

export { ProfileForm };
