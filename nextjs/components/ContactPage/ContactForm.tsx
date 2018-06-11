import React from 'react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';
// import { Card, CardBody, CardHeader, CardTitle, CardText, } from 'reactstrap';
// export interface ContactFormProps {

// }

export default class ContactForm extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={8}>
                        <br />
                        <Alert bsStyle="info">
                            Quý vị có thể gửi thư tới chúng tôi bằng cách hoàn tất biểu
                            mẫu dưới đây. Để chúng tôi có thể trả lời thư của Quý vị, xin vui lòng khai báo đầy đủ.
                        </Alert>
                        <h2>Contact us <small>get in touch with us by filling form below</small></h2>
                        <hr className="colorgraph" />
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <form action="" method="post" role="form" className="contactForm">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name"
                                    placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email"
                                    id="email" placeholder="Your Email" data-rule="email"
                                    data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject"
                                    id="subject" placeholder="Subject" data-rule="minlen:4"
                                    data-msg="Please enter at least 8 chars of subject" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name={'message'} rows={5}
                                    data-rule="required" data-msg="Please write something for us"
                                    placeholder="Message"></textarea>
                                <div className="validation"></div>
                            </div>

                            <div className="text-center"><button type="submit"
                                className="btn btn-theme btn-block btn-md">Send Message</button></div>
                        </form>
                        <hr className="colorgraph" />
                    </Col>

                    <Col xs={6} md={4}>
                        <br />
                        <div className="contact-card">
                            <div className="contact-card-header">
                                <p>THÔNG TIN LIÊN HỆ</p>
                            </div>
                            <div className="contact-card-body">
                                <p><b>Địa chỉ:</b> Tầng 6, toà nhà C, số 22 Thành Công, Ba Đình, Hà Nội.</p>
                                <p>
                                    <b>Điện thoại: </b>
                                    024.7304.1919 / 0168 649 8168
                                    </p> <br />
                                <p><b>Email:</b> nest.coworkingspace@gmail.com</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
