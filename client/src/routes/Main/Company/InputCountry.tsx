import { AutoComplete, Icon, Form } from 'antd';
import React from 'react';
import Input from 'antd/lib/input/Input';
import { FormComponentProps } from 'antd/lib/form';
import { CreateCompanyInputDto } from '../../../service-proxies/service-proxies';

const dataSource: string[] = [];

const logCountryNames = (names: {}) => {
  // for (let i = 0; i <= names.length; i++) {
  //     dataSource.push(names[i]);
  //     // tslint:disable-next-line:no-console
  //     console.log(names[i]);
  // }

  if (names) {
    for (const key of Object.keys(names)) {
      dataSource.push(names[key]);
    }
  }
  return dataSource;
};

interface InputCountryProps extends FormComponentProps {
  data: CreateCompanyInputDto;
  countriesname: {};
}

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

const filerOption = (inputValue, option) => {
  return (
    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  );
};

const onSearch = value => {
  // tslint:disable-next-line:no-console
  console.log(value);
};

const InputCountry = (props: InputCountryProps) => {
  const countryNamesArray = logCountryNames(props.countriesname);
  const { getFieldDecorator } = props.form;
  return (
    <Form.Item {...formItemLayout} label="Country">
      {getFieldDecorator('country', {
        rules: [
          { required: true, message: 'Please input country' },
          {
            pattern: /^[a-zA-Z0-9]{3,30}$/,
            message: 'Country name must be atleast 3 characters',
          },
        ],
        validateTrigger: 'onBlur',
        validateFirst: true,
        initialValue: props.data.country,
      })(
        <AutoComplete
          dataSource={countryNamesArray}
          filterOption={filerOption}
          onSearch={onSearch}
        >
          <Input prefix={<Icon type="cloud" />} placeholder="Country" />
        </AutoComplete>,
      )}
    </Form.Item>
  );
};

export default InputCountry;
