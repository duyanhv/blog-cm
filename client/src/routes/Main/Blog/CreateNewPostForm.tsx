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

// https://github.com/punkave/sanitize-html
const sanitizeHtml = require('sanitize-html');
interface CreateNewPostFormProps extends FormComponentProps {
  isBusy: boolean;
  currentUsername: string;
  handleFormSubmit: (newPost: CreateBlogInputDto) => void;
}

class CreateNewPostForm extends React.Component<CreateNewPostFormProps> {
  constructor(props: CreateNewPostFormProps) {
    super(props);
  }

  handleEditorChange = (content: any) => {
    return content;
  };

  handleEditorRawChange = (_rawContent: any) => {
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
        } else if (this.props.form.getFieldValue('title').length > 30 || this.props.form.getFieldValue('title').length < 6) {
          message.error('Please fill title (6 < words < 30)', 1.5);
          return;
        } else if (this.props.form.getFieldValue('subtitle').length > 300 || this.props.form.getFieldValue('subtitle').length < 6) {
          message.error('Please fill subtitle (6 < words < 150)', 1.5);
          return;
        }
        // tslint:disable-next-line:no-console
        // console.log(`Form values: ${JSON.stringify(values)}`);
        const newPost = {
          title: sanitizeHtml(this.props.form.getFieldValue('title')),
          subtitle: sanitizeHtml(this.props.form.getFieldValue('subtitle')),
          content: sanitizeHtml(this.props.form.getFieldValue('content')),
          author: this.props.currentUsername,
          imageSrc: 'cuocsong1',
          viewCount: 1,
          postRating: 1,
          previewContent: sanitizeHtml(this.props.form.getFieldValue('content')).length > 345 ?
            sanitizeHtml(this.props.form.getFieldValue('content')).match(/.{1,345}/g)[0] :
            sanitizeHtml(this.props.form.getFieldValue('content')),
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
                // { required: true, message: 'Please input title' },
                // {
                //   pattern: /\s(?:[\w\W\d\.]\s){6,30}$/,
                //   message: 'Min: 6 characters, Max: 30 characters',
                // },
              ],
              validateTrigger: 'onBlur',
              validateFirst: true,
            })(<Input size="large" placeholder="Title" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('subtitle', {
              rules: [
                // { required: true, message: 'Please input subtitle' },
                // {
                //   pattern: /^[A-Za-z0-9\s]{6,70}$/,
                //   message: 'Min: 6 characters, Max: 70 characters',
                // },
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
