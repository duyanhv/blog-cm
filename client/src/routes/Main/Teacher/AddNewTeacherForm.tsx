import * as React from 'react';
import { Row, Col, Card, Upload, Button, Icon, Form, Input, DatePicker } from 'antd';
import { TeacherPageState, teacherInfoChange } from '../../../redux/ui/teacher-page';
import { AppSettingsState } from '../../../redux/app-settings';
import { ProfileState } from '../../../redux/profile';
import { Dispatch } from 'redux';
import { TranslationFunction } from 'react-i18next';
import { FormComponentProps } from 'antd/lib/form';
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
  const onTeacherInfoChange = (e) => {
    props.dispatch(teacherInfoChange({
        [e.target.name]: (e.target as any).value,
      }),
    );
  };

  const onDobChanage = (date, moment) => {
    props.dispatch(teacherInfoChange({
        dob: date,
      }),
    );
  };

  const { getFieldDecorator } = props.form;
  return (
    <div className="add-new-teacher-form">
      <Row style={{ width: '95%', margin: '0 auto', padding: '12px 0' }}>
        <Col xl={6} xs={24}>
          <Card
            className="avatar-uploader"
            hoverable={true}
            cover={<img src={props.imageSrc} />}
          >
            <Upload
              name="avatar"
              action={`${props.appSettings.apiUrl}/profiles/uploadProfilePicture`}
              headers={{
                Authorization: `Bearer ${props.profile.token}`,
              }}
              onChange={info => {
                if (info.file.status === 'done') {
                  getBase64(info.file.originFileObj, imgSrc =>
                    // props.dispatch(uploadImageSuccess(imgSrc)),
                    // tslint:disable-next-line:no-console
                    console.log(imgSrc)
                  );
                }
              }}
            >
              <Button>
                <Icon type="upload" /> {props.t('AvatarUploader.upload')}
              </Button>
            </Upload>
          </Card>
        </Col>

        <Col xl={18} xs={24}>
          <Form>
            <Row>
              <Col xl={12} xs={24}>
                <Form.Item label={props.t('firstName')} className="form-item-small">
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
                      placeholder={props.t('firstName')}
                      onChange={onTeacherInfoChange}
                    />,
                  )}
                </Form.Item>
              </Col>

              <Col xl={12} xs={24}>
                <Form.Item label={props.t('lastName')} className="form-item-small">
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
                      placeholder={props.t('lastName')}
                      onChange={onTeacherInfoChange}
                    />,
                  )}
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
                    value={props.currentTeacher.email}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('phone')} className="form-item-normal">
                  <Input
                    prefix={<Icon type="phone" />}
                    name="phone"
                    placeholder={props.t('phone')}
                    value={props.currentTeacher.phone}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('subject')} className="form-item-normal">
                  <Input
                    prefix={<Icon type="book" />}
                    name="subject"
                    placeholder={props.t('subject')}
                    value={props.currentTeacher.subject}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label={props.t('dob')} className="form-item-normal">
                  <DatePicker
                    onChange={onDobChanage}
                    style={{ display: 'inline-block', width: '100%' }}
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
