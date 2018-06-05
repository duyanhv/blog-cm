import * as React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import Layout from '../../nextjs/components/HomePage/Layout';

// Site key: 6Lf_SV0UAAAAABoRmARiDaHwQgC3UCNYaMO0dspa
// Secret key: 6Lf_SV0UAAAAAPUThi0szwFyrRw-Z1_L6TtuxZRI

class AttendanceRecord extends React.Component {
  state = {
    studentCode: '',
    recaptcha: '',
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
  
    // if (fetch) {
    //   await fetch(
    //     '/api/study-result/attendance-record',
    //     {
    //       method: 'Post',
    //       headers: new Headers({
    //         'Content-Type': 'applicatio/json',
    //       }),
    //       body: JSON.stringify({
    //         studentCode: this.state.studentCode,
    //         captchaResponse: this.state.recaptcha,
    //       }),
    //     }
    //   );
    // }

    // After sending Email => Display a Success message
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
              <FormGroup controlId="studentCode">
                <Col componentClass={ControlLabel} sm={2}>
                  Mã Học Sinh
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
                    sitekey="6Lf_SV0UAAAAABoRmARiDaHwQgC3UCNYaMO0dspa"
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