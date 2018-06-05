import React from 'react';
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Grid
} from 'react-bootstrap';

interface SignUpForTestingState {
  value: string;
  date: Date;
}

class SignUpForTesting extends React.Component<any, SignUpForTestingState> {
  state = {
    value: '',
    date: new Date(),
  };

  log = date => {
    this.setState({
      date: date
    });
  }

  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) {
      return 'success';
    } else if (length > 5) {
      return 'warning';
    } else if (length > 0) {
      return 'error';
    }
    return null;
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={4} md={2} />
            <Col xs={12} md={8}>
              <Form horizontal>
                <h2>Đăng ký test - học thử</h2>
                <hr className="colorgraph" />
                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Họ tên học sinh</p>
                  </Col>

                  <Col xs={12} md={8}>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Họ và tên học sinh"
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Đăng ký làm bài test năng lực</p>
                  </Col>

                  <Col xs={12} md={8}>
                    <FormControl
                      componentClass="select"
                      placeholder="Đăng ký làm bài test năng lực"
                    >
                      <option value="select">
                        Đăng ký học thử tại dạy tốt
                      </option>
                      <option value="other">...</option>
                    </FormControl>
                  </Col>
                </FormGroup>

                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Điện thoại học sinh</p>
                  </Col>

                  <Col xs={12} md={8}>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Nhập số điện thoại học sinh"
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Ngày sinh</p>
                  </Col>

                  <Col xs={12} md={8}>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Nhập ngày tháng năm sinh"
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Lớp đăng ký</p>
                  </Col>

                  <Col xs={12} md={8}>
                    <FormControl componentClass="select" placeholder="-----">
                      <option value="select">Lớp 1</option>
                      <option value="other">...</option>
                    </FormControl>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col componentClass={ControlLabel} xs={6} md={4}>
                    <p className="text-left">Môn đăng ký</p>
                  </Col>
                  <Col xs={12} md={8}>
                    <Checkbox inline>Toán</Checkbox>
                    <Checkbox inline>Văn</Checkbox>
                    <Checkbox inline>Anh</Checkbox>
                    <Checkbox inline>Lý</Checkbox>
                    <Checkbox inline>Hoá</Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col>
                    <Button bsStyle="primary" block>
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

export default SignUpForTesting;
