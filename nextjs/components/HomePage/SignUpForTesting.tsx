import React from 'react';
import DatePicker from 'react-16-bootstrap-date-picker';
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Grid,
  Alert
} from 'react-bootstrap';

export default class SignUpForTesting extends React.Component<any, any> {
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
    message: ''
  };

  onFormSubmit = async e => {
    e.preventDefault();

    try {
      // Validate all required fields arent empty
      if (
        !this.state.studentName ||
        !this.state.studentEmail ||
        !this.state.studentBirthday ||
        !this.state.studentAddress ||
        !this.state.parentPhoneNumber ||
        !this.state.registerSubjects
      ) {
        this.setState({
          ...this.state,
          isValidate: false
        });
      } else {
        // Set Req to server to save to GG sheet
        if (fetch) {
          await fetch('/api/time-table/register', {
            method: 'Post',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
              studentName: this.state.studentName,
              studentPhoneNumber: this.state.studentPhoneNumber,
              studentEmail: this.state.studentEmail,
              studentBirthday: this.state.studentBirthday,
              studentAddress: this.state.studentAddress,
              parentPhoneNumber: this.state.parentPhoneNumber,
              note: this.state.note,
              registerSubjects: this.state.registerSubjects
            })
          });

          this.setState({
            ...this.state,
            isSuccess: true,
            isValidate: undefined,
            message: ''
          },            () => setTimeout(() => this.setState({
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
            message: ''
          }),                            3000));
        }
      }
    } catch (error) {
      this.setState({
        ...this.state,
        isSuccess: false,
        message: error.message
      });
    }
  }

  onInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  subjectChange = e => {
    const subject = e.target.value;

    this.setState({
      ...this.state,
      registerSubjects: e.target.checked
        ? [...this.state.registerSubjects, subject]
        : this.state.registerSubjects.filter(item => item !== subject)
    });
  }

  birthdayChange = date => {
    this.setState({
      ...this.state,
      studentBirthday: date
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={4} md={2} />
            <Col xs={12} md={8}>
              <Form horizontal onSubmit={this.onFormSubmit}>
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

                {this.state.isSuccess === undefined ? null : this.state
                  .isSuccess === true ? (
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

                <h2>Đăng ký test - học thử</h2>
                <hr className="colorgraph" />
                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Họ Tên Học Sinh <span style={{ color: 'red' }}>(*)</span>:</p>
                  </Col>

                  <Col xs={12} md={8}>
                    <FormControl
                      type="text"
                      placeholder="Họ và tên học sinh"
                      value={this.state.studentName}
                      name="studentName"
                      onChange={this.onInputChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Điện thoại học sinh</p>
                  </Col>

                  <Col xs={12} md={8}>
                    <FormControl
                      type="text"
                      value={this.state.studentPhoneNumber}
                      placeholder="Nhập số điện thoại học sinh"
                      name="studentPhoneNumber"
                      onChange={this.onInputChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="studentEmail">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Email <span style={{ color: 'red' }}>(*)</span>:</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <FormControl
                      type="text"
                      value={this.state.studentEmail}
                      placeholder="Nhập Email"
                      name="studentEmail"
                      onChange={this.onInputChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Ngày Sinh <span style={{ color: 'red' }}>(*)</span>:</p>
                  </Col>

                  <Col xs={12} md={8}>
                    <DatePicker
                      onChange={this.birthdayChange}
                      showClearButton={false}
                      dateFormat="MM/DD/YYYY"
                      value={this.state.studentBirthday}
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="studentAddress">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Địa Chỉ <span style={{ color: 'red' }}>(*)</span>:</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <FormControl
                      type="text"
                      value={this.state.studentAddress}
                      placeholder="Nhập Địa Chỉ Liên Hệ"
                      name="studentAddress"
                      onChange={this.onInputChange}
                    />
                  </Col>
                  <Col sm={2} />
                </FormGroup>

                <FormGroup controlId="parentPhoneNumber">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">SĐT Phụ Huynh <span style={{ color: 'red' }}>(*)</span>:</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <FormControl
                      type="text"
                      value={this.state.parentPhoneNumber}
                      placeholder="Nhập SĐT Phụ Huynh"
                      name="parentPhoneNumber"
                      onChange={this.onInputChange}
                    />
                  </Col>
                  <Col sm={2} />
                </FormGroup>

                <FormGroup controlId="registerSubjects">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Môn Học Đăng Ký <span style={{ color: 'red' }}>(*)</span>:</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <Checkbox inline value="math" onChange={this.subjectChange}>
                      Toán
                    </Checkbox>
                    <Checkbox inline value="physic" onChange={this.subjectChange}>
                      Lý
                    </Checkbox>
                    <Checkbox
                      inline
                      value="chemistry"
                      onChange={this.subjectChange}
                    >
                      Hóa
                    </Checkbox>
                    <Checkbox
                      inline
                      value="literature"
                      onChange={this.subjectChange}
                    >
                      Văn
                    </Checkbox>
                    <Checkbox inline value="english" onChange={this.subjectChange}>
                      Anh
                    </Checkbox>
                    <Checkbox inline value="biolofy" onChange={this.subjectChange}>
                      Sinh
                    </Checkbox>
                  </Col>
                  <Col sm={2} />
                </FormGroup>

                <FormGroup controlId="note">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Ghi Chú:</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <FormControl
                      componentClass="textarea"
                      value={this.state.note}
                      placeholder="Thành Tích Nổi Bật, Giải Thưởng, ..."
                      name="note"
                      onChange={this.onInputChange}
                    />
                  </Col>
                  <Col sm={2} />
                </FormGroup>

                <FormGroup>
                  <Col>
                    <Button bsStyle="primary" type="submit" block>
                      Đăng ký
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
            <Col xs={4} md={2} />
          </Row>
        </Grid>
      </div>
    );
  }
}
