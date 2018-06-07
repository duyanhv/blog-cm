import * as React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col, Alert } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import Layout from '../../nextjs/components/HomePage/Layout';
import config from '../../api/config';

class AttendanceRecord extends React.Component {
  state = {
    studentCode: '',
    recaptcha: '',
    isSuccess: undefined,
    message: '',
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (fetch) {
        await fetch(
          '/api/study-result/attendance-record',
          {
            method: 'Post',
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
              studentCode: this.state.studentCode,
              captchaResponse: this.state.recaptcha,
            }),
          }
        );

        this.setState({
          ...this.state,
          isSuccess: true,
          message: '',
        });
      }
    } catch (error) {
      this.setState({
        ...this.state,
        isSuccess: false,
        message: error.message,
      });
    }
  }

  onInputChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  onCaptchaLoad = (token) => {
    this.setState({
      ...this.state,
      recaptcha: token,
    });
  }

  render() {
    return (
      <Layout>
        <div className="container attendance-record" style={{ marginTop: 40, marginBottom: 40 }}>
          <div className="alert alert-success title" role="alert">
            <strong>Tra cứu thông tin chuyên cần của học sinh tại Educlass !!</strong>
          </div>

          <div>
            <Form horizontal onSubmit={this.onFormSubmit}>
              {this.state.isSuccess === undefined ? null : this.state.isSuccess === true ? (
                <FormGroup>
                  <Col sm={2} />
                  <Col sm={8}>
                    <Alert bsStyle="info">
                      <strong>Tra Cứu Thành Công !</strong> Hãy Kiểm Tra Email Của Bạn.
                    </Alert>
                  </Col>
                  <Col sm={2} />
                </FormGroup>
              ) : (
                <FormGroup>
                  <Col sm={2} />
                  <Col sm={8}>
                    <Alert bsStyle="warning">
                      <strong>Đã Có Lỗi Xảy Ra !!</strong> Xin Hãy Thử Lại.
                    </Alert>
                  </Col>
                  <Col sm={2} />
                </FormGroup>
              )}

              <FormGroup controlId="studentCode">
                <Col componentClass={ControlLabel} sm={2}>
                  Mã Học Sinh:
                </Col>
                <Col sm={8}>
                  <FormControl type="text" placeholder="Nhập Mã Học Sinh" name="studentCode" onChange={this.onInputChange} />
                </Col>
                <Col sm={2} />
              </FormGroup>

              <FormGroup controlId="recaptcha">
                <Col sm={2} />
                <Col sm={8}>
                  <Recaptcha
                    sitekey={config.studyResultConfig.reCaptchaSiteKey}
                    verifyCallback={this.onCaptchaLoad}
                  />
                </Col>
                <Col sm={2} />
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" bsStyle="success" disabled={this.state.studentCode && this.state.recaptcha ? false : true}>Tra Cứu</Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AttendanceRecord;