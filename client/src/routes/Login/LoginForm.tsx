import * as React from 'react';
import { Form, Input, Icon, Checkbox, Button, Alert } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import './LoginForm.less';
import { TranslationFunction } from 'react-i18next';

interface NestedLoginFormProps extends FormComponentProps {
  t: TranslationFunction;
  username: string;
  errorMessage: string;
  isBusy: boolean;
  onHandleSubmit: (
    loginUserInput: {
      username: string;
      password: string;
      rememberMe: boolean;
    },
  ) => void;
}

const NestedLoginForm = (props: NestedLoginFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const loginInfo = props.form.getFieldsValue([
          'username',
          'password',
          'rememberMe',
        ]) as any;
        props.onHandleSubmit(loginInfo);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div className="login-form">
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <h2>{props.t('LoginForm.login')}</h2>
        </Form.Item>

        <Form.Item>
          {props.errorMessage && (
            <Alert showIcon={true} message={props.errorMessage} type="error" />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
            validateTrigger: 'onBlur',
            validateFirst: true,
            initialValue: props.username,
          })(
            <Input
              prefix={<Icon type="user" />}
              placeholder={props.t('LoginForm.username')}
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
            validateTrigger: 'onBlur',
            validateFirst: true,
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder={props.t('LoginForm.password')}
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('rememberMe', {
            valuePropName: 'checked',
          })(
            <Checkbox className="login-form-checkbox">
              {props.t('LoginForm.remember')}
            </Checkbox>,
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={props.isBusy}
          >
            {props.t('LoginForm.login')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const LoginForm = Form.create()(NestedLoginForm);

export default LoginForm;
