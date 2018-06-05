import React from 'react';
import {
  // Card,
  Button,
  // Icon
} from 'antd';
import './CreateNewPostForm.less';
import { Input, Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import { message } from '../../../helpers';
import { CreateBlogInputDto } from '../../../service-proxies/service-proxies';

interface CreateNewPostFormProps extends FormComponentProps {
  isBusy: boolean;
  handleFormSubmit: (newPost: CreateBlogInputDto) => void;
}

class CreateNewPostForm extends React.Component<CreateNewPostFormProps> {
  constructor(props: CreateNewPostFormProps) {
    super(props);
  }

  handleEditorChange = (content: any) => {
    return content;
  };

  handleEditorRawChange = (rawContent: any) => {
    // tslint:disable-next-line:no-console
    // console.log(rawContent);
  };

  handleFormSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (!values.content || values.content.length < 30) {
          message.error('Please fill the Editor (>= 27 words)', 1.5);
          return;
        }
        // tslint:disable-next-line:no-console
        // console.log(`Form values: ${JSON.stringify(values)}`);
        const newPost = {
          ...this.props.form.getFieldsValue(),
          author: 'cuocsong',
          imageSrc: 'cuocsong1',
          viewCount: 1,
          postRating: 1,
        };
        this.props.handleFormSubmit(newPost as CreateBlogInputDto);
      }
    });
  };

  render(): JSX.Element {
    const { getFieldDecorator } = this.props.form;
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      onChange: this.handleEditorChange,
      onRawChange: this.handleEditorRawChange,
      language: 'en',
    };
    const subTitleProps = {
      placeholder: 'Subtitle',
      autosize: {
        minRows: 3,
        maxRows: 7,
      },
    };

    return (
      <div className="editorWrapper">
        <h1>
          <b>Add New Post</b>
        </h1>
        <br />
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Item>
            {getFieldDecorator('title', {
              rules: [
                { required: true, message: 'Please input title' },
                {
                  pattern: /^[a-zA-Z0-9]{6,30}$/,
                  message: 'Min: 6 characters, Max: 30 characters',
                },
              ],
              validateTrigger: 'onBlur',
              validateFirst: true,
            })(<Input size="large" placeholder="Title" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('subtitle', {
              rules: [
                { required: true, message: 'Please input subtitle' },
                {
                  pattern: /^[a-zA-Z0-9]{6,70}$/,
                  message: 'Min: 6 characters, Max: 70 characters',
                },
              ],
              validateTrigger: 'onBlur',
              validateFirst: true,
            })(<Input.TextArea {...subTitleProps} />)}
          </Form.Item>
          <Form.Item className="editor">
            {getFieldDecorator('content', {
              getValueFromEvent: this.handleEditorChange,
            })(<BraftEditor {...editorProps} />)}
          </Form.Item>
          <Button className="submitButton" type="default" htmlType="submit">
            Publish
          </Button>
        </Form>
      </div>
    );
  }
}

export default Form.create()(CreateNewPostForm);
