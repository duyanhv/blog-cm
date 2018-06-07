import * as React from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button, Checkbox, Alert } from 'react-bootstrap';
import DatePicker from 'react-16-bootstrap-date-picker';
import Layout from '../../nextjs/components/HomePage/Layout';

class Register extends React.Component {
  state = {
    studentName: '',
    studentPhoneNumber: '',
    studentEmail: '',
    studentBirthday: '',
    studentAddress: '',
    parentPhoneNumber: '',
    note: '',
    registerSubjects: [],
    isValidate: undefined,
    isSuccess: undefined,
    message: '',
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Validate all required fields arent empty
      if (!this.state.studentName ||
        !this.state.studentEmail ||
        !this.state.studentBirthday ||
        !this.state.studentAddress ||
        !this.state.parentPhoneNumber ||
        !this.state.registerSubjects
      ) {
        this.setState({
          ...this.state,
          isValidate: false,
        });
      } else {
        // Set Req to server to save to GG sheet
        if (fetch) {
          await fetch(
            '/api/time-table/register',
            {
              method: 'Post',
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
              body: JSON.stringify({
                studentName: this.state.studentName,
                studentPhoneNumber: this.state.studentPhoneNumber,
                studentEmail: this.state.studentEmail,
                studentBirthday: this.state.studentBirthday,
                studentAddress: this.state.studentAddress,
                parentPhoneNumber: this.state.parentPhoneNumber,
                note: this.state.note,
                registerSubjects: this.state.registerSubjects,
              }),
            }
          );

          this.setState({
            ...this.state,
            isSuccess: true,
            message: '',
          });
        }
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

  subjectChange = (e) => {
    const subject = e.target.value;

    this.setState({
      ...this.state,
      registerSubjects: e.target.checked ? [...this.state.registerSubjects, subject] : this.state.registerSubjects.filter((item) => item !== subject),
    });
  }

  birthdayChange = (date) => {
    this.setState({
      ...this.state,
      studentBirthday: date,
    });
  }

  render() {
    return (
      <Layout>
        <div className="container register">
          <div className="alert alert-info title" role="alert">
            <strong>Đăng Ký Học Thử - Test Đầu Vào !!</strong>
          </div>

          <Form horizontal onSubmit={this.onFormSubmit} className="register-form">
            {this.state.isValidate === false ? (
              <FormGroup controlId="studentName">
                <Col sm={3} />
                <Col sm={7}>
                  <Alert bsStyle="danger">
                      <strong>Hãy Điền Đầy Đủ Thông Tin</strong>
                  </Alert>
                </Col>
                <Col sm={2} />
              </FormGroup>
            ) : null}

            {this.state.isSuccess === undefined ? null : this.state.isSuccess === true ? (
              <FormGroup>
                <Col sm={2} />
                <Col sm={8}>
                  <Alert bsStyle="info">
                    <strong>Đăng Ký Thành Công !</strong>
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

            <FormGroup controlId="studentName">
              <Col componentClass={ControlLabel} sm={3}>
                Họ Tên Học Sinh <span style={{ color: 'red' }}>(*)</span>:
              </Col>
              <Col sm={7}>
                <FormControl type="text" placeholder="Nhập Họ Tên Học Sinh" name="studentName" onChange={this.onInputChange} />
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup controlId="studentPhoneNumber">
              <Col componentClass={ControlLabel} sm={3}>
                SĐT Học Sinh:
              </Col>
              <Col sm={7}>
                <FormControl type="text" placeholder="Nhập SĐT Học Sinh" name="studentPhoneNumber" onChange={this.onInputChange} />
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup controlId="studentEmail">
              <Col componentClass={ControlLabel} sm={3}>
                Email <span style={{ color: 'red' }}>(*)</span>:
              </Col>
              <Col sm={7}>
                <FormControl type="text" placeholder="Nhập Email" name="studentEmail" onChange={this.onInputChange} />
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup controlId="studentBirthday">
              <Col componentClass={ControlLabel} sm={3}>
                Ngày Sinh <span style={{ color: 'red' }}>(*)</span>:
              </Col>
              <Col sm={7}>
                <DatePicker value={this.state.studentBirthday} onChange={this.birthdayChange} showClearButton={false} />
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup controlId="studentAddress">
              <Col componentClass={ControlLabel} sm={3}>
                Địa Chỉ <span style={{ color: 'red' }}>(*)</span>:
              </Col>
              <Col sm={7}>
                <FormControl type="text" placeholder="Nhập Địa Chỉ Liên Hệ" name="studentAddress" onChange={this.onInputChange} />
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup controlId="parentPhoneNumber">
              <Col componentClass={ControlLabel} sm={3}>
                SĐT Phụ Huynh <span style={{ color: 'red' }}>(*)</span>:
              </Col>
              <Col sm={7}>
                <FormControl type="text" placeholder="Nhập SĐT Phụ Huynh" name="parentPhoneNumber" onChange={this.onInputChange} />
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup controlId="registerSubjects">
              <Col componentClass={ControlLabel} sm={3}>
                Môn Học Đăng Ký <span style={{ color: 'red' }}>(*)</span>:
              </Col>
              <Col sm={7}>
                <Checkbox inline value="math" onChange={this.subjectChange}>Toán</Checkbox>
                <Checkbox inline value="physic" onChange={this.subjectChange}>Lý</Checkbox>
                <Checkbox inline value="chemistry" onChange={this.subjectChange}>Hóa</Checkbox>
                <Checkbox inline value="literature" onChange={this.subjectChange}>Văn</Checkbox>
                <Checkbox inline value="english" onChange={this.subjectChange}>Anh</Checkbox>
                <Checkbox inline value="biolofy" onChange={this.subjectChange}>Sinh</Checkbox>
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup controlId="note">
              <Col componentClass={ControlLabel} sm={3}>
                Ghi Chú:
              </Col>
              <Col sm={7}>
                <FormControl
                  componentClass="textarea"
                  placeholder="Thành Tích Nổi Bật, Giải Thưởng, ..."
                  name="note"
                  onChange={this.onInputChange}
                />
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup>
              <Col sm={3} />
              <Col sm={7} style={{ textAlign: 'right' }}>
                <Button type="submit" bsStyle="info">Đăng Ký</Button>
              </Col>
              <Col sm={2} />
            </FormGroup>
          </Form>
        </div>

        <style jsx>{`
          .register {
            margin-top: 40px;
            margin-bottom: 40px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Register;