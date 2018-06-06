import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Form, Input, Icon, Button, Row, Col } from 'antd';
import {
  CreateCompanyInputDto,
} from '../../../service-proxies/service-proxies';
import InputCountry from './InputCountry';

interface CompanyFormProps extends FormComponentProps {
  isBusy: boolean;
  data: CreateCompanyInputDto;
  countriesname: {};
  handleSubmit: (company: CreateCompanyInputDto) => void;
}

const CompanyForm = (props: CompanyFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const company = props.form.getFieldsValue();
        props.handleSubmit(company as CreateCompanyInputDto);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <div className="create-company-form">
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <h2>Company Info</h2>
        </Form.Item>

        <Row>
          <Col lg={10}>
            <Form.Item {...formItemLayout} label="Company name">
              {getFieldDecorator('companyname', {
                rules: [
                  { required: true, message: 'Please input company name' },
                  {
                    pattern: /^[a-zA-Z0-9]{6,30}$/,
                    message: 'Company name must be atleast 6 characters',
                  },
                ],
                validateTrigger: 'onBlur',
                validateFirst: true,
                initialValue: props.data.companyname,
              })(
                <Input
                  prefix={<Icon type="meh-o" />}
                  placeholder="Company name"
                />,
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} label="Phone">
              {getFieldDecorator('telephone', {
                rules: [
                  { required: true, message: 'Please input telephone number' },
                  {
                    pattern: /^[\s()+-]*([0-9][\s()+-]*){6,20}$/,
                    message: '6 < Telephone number < 20',
                  },
                ],
                validateTrigger: 'onBlur',
                validateFirst: true,
                initialValue: props.data.telephone,
              })(
                <Input
                  prefix={<Icon type="phone" />}
                  placeholder="Telephone"
                />,
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} label="Streetline 1">
              {getFieldDecorator('streetline1', {
                rules: [
                  { required: true, message: 'Please input streetline 1' },
                  {
                    pattern: /^[a-zA-Z0-9]{6,30}$/,
                    message: 'streetline 1 must be atleast 6 characters',
                  },
                ],
                validateTrigger: 'onBlur',
                validateFirst: true,
                initialValue: props.data.streetline1,
              })(
                <Input
                  prefix={<Icon type="idcard" />}
                  placeholder="Streetline1"
                />,
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} label="Streetline 2">
              {getFieldDecorator('streetline2', {
                rules: [
                  { required: true, message: 'Please input streetline 2' },
                  {
                    pattern: /^[a-zA-Z0-9]{6,30}$/,
                    message: 'streetline 2 must be atleast 6 characters',
                  },
                ],
                validateTrigger: 'onBlur',
                validateFirst: true,
                initialValue: props.data.streetline2,
              })(
                <Input
                  prefix={<Icon type="idcard" />}
                  placeholder="Streetline2"
                />,
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} label="City">
              {getFieldDecorator('city', {
                rules: [
                  { required: true, message: 'Please input city name' },
                  {
                    pattern: /^[a-zA-Z0-9]{6,30}$/,
                    message: 'city name must be atleast 6 characters',
                  },
                ],
                validateTrigger: 'onBlur',
                validateFirst: true,
                initialValue: props.data.streetline2,
              })(<Input prefix={<Icon type="global" />} placeholder="City" />)}
            </Form.Item>

            <Form.Item {...formItemLayout} label="State">
              {getFieldDecorator('state', {
                rules: [
                  { required: true, message: 'Please input state' },
                  {
                    pattern: /^[a-zA-Z0-9]{6,30}$/,
                    message: 'state name must be atleast 6 characters',
                  },
                ],
                validateTrigger: 'onBlur',
                validateFirst: true,
                initialValue: props.data.state,
              })(<Input prefix={<Icon type="qq" />} placeholder="State" />)}
            </Form.Item>
          </Col>

          <Col lg={10}>
            <Form.Item {...formItemLayout} label="Zipcode">
              {getFieldDecorator('zipcode', {
                rules: [
                  { required: true, message: 'Please input Zipcode' },
                  {
                    pattern: /^\d{5}(?:[-\s]\d{4})?$/,
                    message: 'zip code is not valid',
                  },
                ],
                validateTrigger: 'onBlur',
                validateFirst: true,
                initialValue: props.data.zipcode,
              })(
                <Input prefix={<Icon type="slack" />} placeholder="Zipcode" />,
              )}
            </Form.Item>

            <InputCountry {...props} />

            <Form.Item {...formItemLayout} label="Facebook">
              {getFieldDecorator('facebookurl', {
                rules: [{ required: false }],
                initialValue: props.data.facebookurl,
              })(
                <Input
                  prefix={<Icon type="facebook" />}
                  placeholder="Facebook"
                />,
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} label="Twitter">
              {getFieldDecorator('twitterurl', {
                rules: [{ required: false }],
                initialValue: props.data.twitterurl,
              })(
                <Input
                  prefix={<Icon type="twitter" />}
                  placeholder="Twitter"
                />,
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} label="Googleplus">
              {getFieldDecorator('googleplusurl', {
                rules: [{ required: false }],
                initialValue: props.data.googleplusurl,
              })(
                <Input
                  prefix={<Icon type="google-plus" />}
                  placeholder="GooglePlus"
                />,
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} label="LinkedIn">
              {getFieldDecorator('linkedidurl', {
                rules: [{ required: false }],
                initialValue: props.data.linkedidurl,
              })(
                <Input
                  prefix={<Icon type="linkedin" />}
                  placeholder="Linkedin"
                />,
              )}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="create-company-form-button"
                loading={props.isBusy}
              >
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Form.create()(CompanyForm);
