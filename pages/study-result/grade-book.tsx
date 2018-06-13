import * as React from 'react';
import Link from 'next/link';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col, Alert } from 'react-bootstrap';
import Layout from '../../nextjs/components/HomePage/Layout';
import Recaptcha from 'react-recaptcha';
import config from '../../api/config';

class GradeBook extends React.Component {
  state = {
    studentCode: '',
    recaptcha: '',
    isSuccess: undefined,
    message: '',
  };

  onCaptchaLoad = (token) => {
    this.setState({
      ...this.state,
      recaptcha: token,
    });
  }

  onInputChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

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

  render() {
    return (
      <Layout>
        <div className="container attendance-record">
          <h2>Tra Cứu Bảng Điểm</h2>

          <hr className="colorgraph" />

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
                      <strong>Đã Có Lỗi Xảy Ra !!</strong> <Link href="/study-result/grade-book"><a><b><u>Thử Lại.</u></b></a></Link>
                    </Alert>
                  </Col>
                  <Col sm={2} />
                </FormGroup>
              )}

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Mã Học Sinh
                </Col>
                <Col sm={8}>
                  <FormControl type="text" placeholder="Nhập Mã Học Sinh" name="studentCode" onChange={this.onInputChange}/>
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

export default GradeBook;