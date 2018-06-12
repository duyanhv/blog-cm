import * as React from 'react';
import { Row, Col, Card, Upload, Button, Icon, Form, Input, DatePicker } from 'antd';
import { TeacherPageState, teacherInfoChange, uploadImgSuccess } from '../../../redux/ui/teacher-page';
import { AppSettingsState } from '../../../redux/app-settings';
import { ProfileState } from '../../../redux/profile';
import { Dispatch } from 'redux';
import { TranslationFunction } from 'react-i18next';
import { FormComponentProps } from 'antd/lib/form';
import * as  moment from 'moment';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import * as sanitizeHtml from 'sanitize-html';
import './AddNewTeacherForm.less';

interface AddNewTeacherFormProps extends TeacherPageState, FormComponentProps {
  appSettings: AppSettingsState;
  profile: ProfileState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

const getBase64 = (imgFile, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(imgFile);
};

const AddNewTeacherForm = (props: AddNewTeacherFormProps) => {
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

  const onTeacherInfoChange = (e) => {
    props.dispatch(teacherInfoChange({
        [e.target.name]: (e.target as any).value,
      }),
    );
  };

  const onDobChanage = (date) => {
    props.dispatch(teacherInfoChange({
        dob: date,
      }),
    );
  };

  const handleChange = (content) => {
    props.dispatch(teacherInfoChange({
      description: sanitizeHtml(content, saniTizeConfig)
    }));
  };

  const { getFieldDecorator } = props.form;
  return (
    <div className="add-new-teacher-form">
      <Row style={{ width: '95%', margin: '0 auto', padding: '12px 0' }}>
        <Col xl={6} xs={24}>
          <Card
            className="avatar-uploader"
            hoverable={true}
            cover={<img src={props.currentTeacher.imgSrc} />}
          >
            <Upload
              name="teacherProfilePicture"
              action={`${props.appSettings.apiUrl}/teachers/uploadProfilePicture`}
              headers={{
                Authorization: `Bearer ${props.profile.token}`,
              }}
              data={{ teacherId: props.currentTeacher._id }}
              onChange={info => {
                if (info.file.status === 'done') {
                  getBase64(info.file.originFileObj, imgSrc =>
                    props.dispatch(uploadImgSuccess(imgSrc)),
                  );
                }
              }}
            >
              <Button>
                <Icon type="upload" /> {props.t('AddNewTeacherForm.upload')}
              </Button>
            </Upload>
          </Card>
        </Col>

        <Col xl={18} xs={24}>
          <Form>
            <Row>
              <Col xl={12} xs={24}>
                <Form.Item label={props.t('AddNewTeacherForm.firstName')} className="form-item-small">
                  {getFieldDecorator('firstName', {
                    rules: [
                      { required: true, message: 'Please Fill in Your First Name' },
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                    initialValue: props.currentTeacher.firstName,
                  })(
                    <Input
                      name="firstName"
                      prefix={<Icon type="idcard" />}
                      placeholder={props.t('AddNewTeacherForm.firstName')}
                      onChange={onTeacherInfoChange}
                    />,
                  )}
                </Form.Item>
              </Col>

              <Col xl={12} xs={24}>
                <Form.Item label={props.t('AddNewTeacherForm.lastName')} className="form-item-small">
                  {getFieldDecorator('lastName', {
                    rules: [
                      { required: true, message: 'Please Fill in Your Last Name' },
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                    initialValue: props.currentTeacher.lastName,
                  })(
                    <Input
                      name="lastName"
                      prefix={<Icon type="idcard" />}
                      placeholder={props.t('AddNewTeacherForm.lastName')}
                      onChange={onTeacherInfoChange}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('AddNewTeacherForm.email')} className="form-item-normal">
                  <Input
                    prefix={<Icon type="mail" />}
                    name="email"
                    placeholder={props.t('AddNewTeacherForm.email')}
                    value={props.currentTeacher.email}
                    onChange={onTeacherInfoChange}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('AddNewTeacherForm.phone')} className="form-item-normal">
                  <Input
                    prefix={<Icon type="phone" />}
                    name="phone"
                    placeholder={props.t('AddNewTeacherForm.phone')}
                    value={props.currentTeacher.phone}
                    onChange={onTeacherInfoChange}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('AddNewTeacherForm.subject')} className="form-item-normal">
                  <Input
                    prefix={<Icon type="book" />}
                    name="subject"
                    placeholder={props.t('AddNewTeacherForm.subject')}
                    value={props.currentTeacher.subject}
                    onChange={onTeacherInfoChange}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('AddNewTeacherForm.dob')} className="form-item-normal">
                  <DatePicker
                    onChange={onDobChanage}
                    defaultValue={props.currentTeacher.dob ? moment(props.currentTeacher.dob) : undefined}
                    style={{ display: 'inline-block', width: '100%' }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('AddNewTeacherForm.description')} className="editor">
                  <BraftEditor
                    height={292}
                    contentFormat="html"
                    contentId={props.currentTeacher._id}
                    initialContent={props.currentTeacher.description ? props.currentTeacher.description : '<p>Hello World !!</p>'}
                    language="en"
                    onChange={handleChange}
                    excludeControls={['indent']}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Form.create()(AddNewTeacherForm);
