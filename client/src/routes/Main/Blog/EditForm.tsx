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
        }
        const editedPost = {
          title: this.props.form.getFieldValue('title'),
          subtitle: this.props.form.getFieldValue('subtitle'),
          author: this.props.form.getFieldValue('author'),
          content: this.props.form.getFieldValue('content'),
          tags: this.props.dataPerPost.tags,
          imageSrc: this.props.dataPerPost.imageSrc,
          viewCount: this.props.dataPerPost.viewCount,
          postRating: this.props.dataPerPost.postRating,
          lastModifiedBy: this.props.currentUsername,
          lastModifiedAt: Date.now(),
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

  handleEditorRawChange = (rawContent: any) => {
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
                        { required: true, message: 'Please input title' },
                        {
                          pattern: /^[a-zA-Z0-9]{6,30}$/,
                          message: 'Title must be atleast 6 characters',
                        },
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
                        { required: true, message: 'Please input subtitle' },
                        {
                          pattern: /^[a-zA-Z0-9]{6,30}$/,
                          message: 'Subtitle must be atleast 6 characters',
                        },
                      ],
                      validateTrigger: 'onBlur',
                      validateFirst: true,
                      initialValue: this.props.dataPerPost.author,
                    })(<Input placeholder="Subtitle" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Subtitle">
                {getFieldDecorator('subtitle', {
                  rules: [
                    { required: true, message: 'Please input subtitle' },
                    {
                      pattern: /^[a-zA-Z0-9]{6,30}$/,
                      message: 'Subtitle must be atleast 6 characters',
                    },
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
