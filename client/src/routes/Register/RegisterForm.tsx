import * as React from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import './RegisterForm.less';
import { RouteComponentProps } from 'react-router';

interface NestedRegisterFormProps
  extends RouteComponentProps<any>,
    FormComponentProps {
  handleSubmit: Function;
  validateUsername: Function;
  validateEmail: Function;
  isUsernameExist: undefined | boolean;
  isEmailExist: undefined | boolean;
  isBusy: boolean;
}

const NestedRegisterForm = (props: NestedRegisterFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const user = props.form.getFieldsValue([
          'username',
          'email',
          'password',
          'firstName',
          'middleName',
          'lastName',
        ]);
        props.handleSubmit(user);
      }
    });
  };

  const asyncValidateUsername = async (
    rule: any,
    value: any,
    callback: any,
  ) => {
    const username = props.form.getFieldValue('username');
    const isUsernameExist = await props.validateUsername(username);

    if (isUsernameExist) {
      callback('This Username Has Been Used');
    } else {
      callback();
    }
  };

  const asyncValidateEmail = async (rule: any, value: any, callback: any) => {
    const email = props.form.getFieldValue('email');
    const isEmailExist = await props.validateEmail(email);

    if (isEmailExist) {
      callback('This Email Has Been Used');
    } else {
      callback();
    }
  };

  const validateConfirmPassword = (rule: any, value: any, callback: any) => {
    if (value !== props.form.getFieldValue('password')) {
      callback('Confirm Password Didnt Match');
    }
    callback();
  };

  const { getFieldDecorator } = props.form;
  return (
    <div className="register-form">
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <h2>Register</h2>
        </Form.Item>

        <Form.Item
          hasFeedback={props.isUsernameExist === undefined ? false : true}
          validateStatus={
            props.isUsernameExist === undefined
              ? undefined
              : props.isUsernameExist === false
                ? 'success'
                : 'error'
          }
        >
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: 'Please input your username!' },
              {
                pattern: /^[a-zA-Z0-9]{6,30}$/,
                message: 'Username must be at least 6 characters',
              },
              { validator: asyncValidateUsername },
            ],
            validateTrigger: 'onBlur',
            validateFirst: true,
          })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please input your Password!' },
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
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('confirmPassword', {
            rules: [
              { required: true, message: 'Please Confirm your Password!' },
              { validator: validateConfirmPassword },
            ],
            validateTrigger: 'onBlur',
            validateFirst: true,
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Confirm Password"
            />,
          )}
        </Form.Item>

        <Form.Item
          hasFeedback={props.isEmailExist === undefined ? false : true}
          validateStatus={
            props.isEmailExist === undefined
              ? undefined
              : props.isEmailExist === false
                ? 'success'
                : 'error'
          }
        >
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Please Fill in Your Email Address',
              },
              { type: 'email', message: 'Invalid Email Address' },
              { validator: asyncValidateEmail },
            ],
            validateTrigger: 'onBlur',
            validateFirst: true,
          })(
            <Input prefix={<Icon type="mail" />} placeholder="Email Address" />,
          )}
        </Form.Item>

        <Form.Item className="name">
          {getFieldDecorator('firstName')(
            <Input prefix={<Icon type="user" />} placeholder="First Name" />,
          )}
        </Form.Item>

        <Form.Item className="name">
          {getFieldDecorator('middleName')(
            <Input prefix={<Icon type="user" />} placeholder="Middle Name" />,
          )}
        </Form.Item>

        <Form.Item className="name">
          {getFieldDecorator('lastName', {
            rules: [
              { required: true, message: 'Please Fill in Your Last Name' },
            ],
            validateTrigger: 'onBlur',
            validateFirst: true,
          })(<Input prefix={<Icon type="user" />} placeholder="Last Name" />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('agree', {
            rules: [
              {
                required: true,
                message: 'You Have To Agree to The Lisience',
              },
            ],
          })(
            <Checkbox className="register-form-checkbox">
              I Accept the Terms and Conditions
            </Checkbox>,
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
            loading={props.isBusy}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const RegisterForm = Form.create()(NestedRegisterForm);

export default RegisterForm;
