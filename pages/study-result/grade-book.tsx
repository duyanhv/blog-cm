import * as React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import Layout from '../../nextjs/components/HomePage/Layout';

// Site key: 6Lf_SV0UAAAAABoRmARiDaHwQgC3UCNYaMO0dspa
// Secret key: 6Lf_SV0UAAAAAPUThi0szwFyrRw-Z1_L6TtuxZRI

const GradeBook = (_props) => {
  return (
    <Layout>
      <div className="container attendance-record" style={{ marginTop: 40, marginBottom: 40 }}>
        <div className="alert alert-success title" role="alert">
          <strong>Tra cứu kết quả học tập của học sinh tại Educlass !!</strong>
        </div>

        <div>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Mã Học Sinh
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder="Nhập Mã Học Sinh" />
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2} />
              <Col sm={8}>
                <div className="g-recaptcha" data-sitekey="6Lf_SV0UAAAAABoRmARiDaHwQgC3UCNYaMO0dspa"></div>
              </Col>
              <Col sm={2} />
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" bsStyle="success">Tra Cứu</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default GradeBook;