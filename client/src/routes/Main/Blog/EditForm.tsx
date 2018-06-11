import Form, { FormComponentProps } from 'antd/lib/form';
import React from 'react';
import { Input, Row, Col, Button, message } from 'antd';
import {
  IFindBlogDetailDto,
  IUpdateBlogDetailDto,
} from '../../../service-proxies/service-proxies';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import './EditForm.less';
const sanitizeHtml = require('sanitize-html');

const saniTizeConfig = {
  allowedTags: ['h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
    'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'iframe', 'img', 'span'],
  allowedAttributes: {
    p: ['style'],
    span: ['style'],
    img: ['src']
  },
  allowedStyles: {
    '*': {
      // Match HEX and RGB
      color: [/^\#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
      'text-align': [/^left$/, /^right$/, /^center$/],
      // Match any number with px, em, or %
      'font-size': [/^\d+(?:px|em|%)$/]
    },
    p: {
      'font-size': [/^\d+rem$/]
    }
  }
};
interface EditFormProps extends FormComponentProps {
  dataPerPost: IFindBlogDetailDto;
  isBusy: boolean;
  currentUsername: string;
  handleEditFormSubmit: (id: string, editedPost: IUpdateBlogDetailDto) => void;
}

class EditForm extends React.Component<EditFormProps> {
  editorInstance: any;
  constructor(props: EditFormProps) {
    super(props);
  }

  handleEditFormSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (!values.content) {
          values.content = this.editorInstance.getContent();
        } else if (values.content.length < 30) {
          message.error('Please fill the Editor (>= 27 words)', 1.5);
          return;
        } else if (this.props.form.getFieldValue('title').length > 30 || this.props.form.getFieldValue('title').length < 6) {
          message.error('Please fill title (6 < words < 30)', 1.5);
          return;
        } else if (this.props.form.getFieldValue('subtitle').length > 300 || this.props.form.getFieldValue('subtitle').length < 6) {
          // tslint:disable-next-line:no-console
          console.log(this.props.form.getFieldValue('subtitle').length);
          message.error('Please fill subtitle (6 < words < 150)', 1.5);
          return;
        } else if (this.props.form.getFieldValue('author').length > 30 || this.props.form.getFieldValue('author').length < 6) {
          message.error('Please fill author (<30 & >6 words)', 1.5);
          return;
        }
        const editedPost = {
          title: sanitizeHtml(this.props.form.getFieldValue('title')),
          subtitle: sanitizeHtml(this.props.form.getFieldValue('subtitle')),
          author: sanitizeHtml(this.props.form.getFieldValue('author')),
          content: sanitizeHtml(values.content, saniTizeConfig),
          tags: this.props.dataPerPost.tags,
          imageSrc: this.props.dataPerPost.imageSrc,
          viewCount: this.props.dataPerPost.viewCount,
          postRating: this.props.dataPerPost.postRating,
          lastModifiedBy: this.props.currentUsername,
          lastModifiedAt: Date.now(),
          previewContent: sanitizeHtml(values.content).length > 345 ?
            sanitizeHtml(values.content).match(/.{1,345}/g)[0] :
            sanitizeHtml(values.content),
        };
        this.props.handleEditFormSubmit(this.props.dataPerPost._id, editedPost);
      }
    });
  };
  handleEditorChange = (content: any) => {
    if (!content) {
      return this.editorInstance.getContent();
    }
    return content;
  };

  handleEditorRawChange = (_rawContent: any) => {
    // tslint:disable-next-line:no-console
    // console.log(rawContent);
  };
  render(): JSX.Element {
    const { getFieldDecorator } = this.props.form;
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      onChange: this.handleEditorChange,
      onRawChange: this.handleEditorRawChange,
      language: 'en',
      initialContent: this.props.dataPerPost.content,
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
        <Form onSubmit={this.handleEditFormSubmit}>
          <Row>
            <Col>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Title">
                    {getFieldDecorator('title', {
                      rules: [
                        // { required: true, message: 'Please input title' },
                        // {
                        //   pattern: /\s*(?:[\w\W\d\.]\s*){6,30}$/,
                        //   message: 'Title must be atleast 6 characters',
                        // },
                      ],
                      validateTrigger: 'onBlur',
                      validateFirst: true,
                      initialValue: this.props.dataPerPost.title,
                    })(<Input placeholder="Title" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Author">
                    {getFieldDecorator('author', {
                      rules: [
                        // { required: true, message: 'Please input Author' },
                        // {
                        //   pattern: /\s*(?:[\w\W\d\.]\s){6,70}$/,
                        //   message: 'Author must be atleast 6 characters',
                        // },
                      ],
                      validateTrigger: 'onBlur',
                      validateFirst: true,
                      initialValue: this.props.dataPerPost.author,
                    })(<Input placeholder="Author" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Subtitle">
                {getFieldDecorator('subtitle', {
                  rules: [
                    // { required: true, message: 'Please input subtitle' },
                    // {
                    //   pattern: /^[a-zA-Z0-9]{6,30}$/,
                    //   message: 'Subtitle must be atleast 6 characters',
                    // },
                  ],
                  validateTrigger: 'onBlur',
                  validateFirst: true,
                  initialValue: this.props.dataPerPost.subtitle,
                })(<Input.TextArea {...subTitleProps} />)}
              </Form.Item>
              <Form.Item className="editor">
                {getFieldDecorator('content', {
                  getValueFromEvent: this.handleEditorChange,
                })(
                  <BraftEditor
                    ref={instance => (this.editorInstance = instance)}
                    {...editorProps}
                  />,
                )}
              </Form.Item>
              <Button
                loading={this.props.isBusy}
                className="submitButton"
                htmlType="submit"
                type="primary"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(EditForm);
