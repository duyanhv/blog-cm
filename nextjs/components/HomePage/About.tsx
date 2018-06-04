import React from 'react';
import { ProgressBar, Button, Row, Col, Form, FormGroup, ControlLabel, FormControl, Checkbox, Grid } from 'react-bootstrap';

import moment from 'moment';
export interface AboutState {
    value: string;
    date: Date;
}

class About extends React.Component<AboutState> {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: '',
            date: moment()
        };
    }
    log(date) {
        this.setState({
            date: date
        });
    }
    getValidationState() {
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

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        return (

            <Grid>
                <Row>
                    <Col md={6}>
                        <br />
                        <div>
                            <h4>About our company</h4>
                            <p><strong>Meliore inciderint qui ne. Suas cotidieque vel
                                        ut lobortis reformidans duo</strong></p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Repudiandae odit iste exercitationem praesentium deleniti nostrum laborum rem
                                id nihil tempora. Adipisci ea commodi unde nam placeat cupiditate quasi a
                                ducimus rem consequuntur ex eligendi minima
                                        voluptatem assumenda voluptas quidem sit maiores odio velit voluptate</p>
                            <p>
                                Mel explicari adipiscing consectetuer no, no mel apeirian
                                scripserit repudiandae, ad assum mundi scribentur eam.
                                Graecis offendit phaedrum eu his, eius ferri quidam eos ad,
                                        quis delenit vel ei. Alia modus facete te eos, eu tation appellantur per</p>
                        </div>
                    </Col>
                    {/* <Col md={6} mdPull={6}>
                        <Grid>
                            <Row>
                                <Col xs={4} md={2}></Col> */}
                    <Col md={6} /*xs={12} md={8} */>
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
                                    <FormControl componentClass="select" placeholder="Đăng ký làm bài test năng lực">
                                        <option value="select">Đăng ký học thử tại dạy tốt</option>
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
                    {/* <Col xs={4} md={2}></Col>
                            </Row>
                        </Grid> */}
                    {/* </Col> */}
                </Row>
            </Grid>
            // <section id="content">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-lg-12">
            //                 <div className="row">
            //                     <div className="col-sm-6 col-lg-6">
            //                         <h4>About our company</h4>
            //                         <p><strong>Meliore inciderint qui ne. Suas cotidieque vel
            //                             ut lobortis reformidans duo</strong></p>
            //                         <p>
            //                             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            //                             Repudiandae odit iste exercitationem praesentium deleniti nostrum laborum rem
            //                             id nihil tempora. Adipisci ea commodi unde nam placeat cupiditate quasi a
            //                             ducimus rem consequuntur ex eligendi minima
            //                             voluptatem assumenda voluptas quidem sit maiores odio velit voluptate</p>
            //                         <p>
            //                             Mel explicari adipiscing consectetuer no, no mel apeirian
            //                             scripserit repudiandae, ad assum mundi scribentur eam.
            //                             Graecis offendit phaedrum eu his, eius ferri quidam eos ad,
            //                             quis delenit vel ei. Alia modus facete te eos, eu tation appellantur per</p>
            //                     </div>
            //                     <div className="col-sm-6 col-lg-6">
            //                         {/* <h4>Projects</h4>
            //                         <div className="progress">
            //                             <ProgressBar active bsStyle="success"
            //                                 now={40} label={`40% Complete (success)`} />
            //                         </div>
            //                         <div className="progress">
            //                             <ProgressBar active bsStyle="info" now={20} label={`20% Complete`} />
            //                         </div>
            //                         <div className="progress">
            //                             <ProgressBar active bsStyle="warning"
            //                                 now={60} label={`60% Complete (warning)`} />
            //                         </div>
            //                         <div className="progress">
            //                             <ProgressBar active bsStyle="danger" now={80} label={`80% Complete`} />
            //                         </div> */}
            //                         <Grid>
            //                             <Row>
            //                                 <Col xs={4} md={2}></Col>
            //                                 <Col xs={12} md={8}>
            //                                     <Form horizontal>
            //                                         <h2>Đăng ký test - học thử</h2>
            //                                         <hr className="colorgraph" />
            //                                         <FormGroup controlId="">
            //                                             <Col componentClass={ControlLabel} xs={6} md={4}>
            //                                                 <p className="text-left">Họ tên học sinh</p>
            //                                             </Col>

            //                                             <Col xs={12} md={8}>
            //                                                 <FormControl
            //                                                     type="text"
            //                                                     value={this.state.value}
            //                                                     placeholder="Họ và tên học sinh"
            //                                                     onChange={this.handleChange}
            //                                                 />
            //                                             </Col>
            //                                         </FormGroup>

            //                                         <FormGroup controlId="">
            //                                             <Col componentClass={ControlLabel} xs={6} md={4}>
            //                                                 <p className="text-left">Đăng ký làm bài test năng lực</p>
            //                                             </Col>

            //                                             <Col xs={12} md={8}>
            //                                                 <FormControl componentClass="select" placeholder="Đăng ký làm bài test năng lực">
            //                                                     <option value="select">Đăng ký học thử tại dạy tốt</option>
            //                                                     <option value="other">...</option>
            //                                                 </FormControl>
            //                                             </Col>
            //                                         </FormGroup>

            //                                         <FormGroup controlId="">
            //                                             <Col componentClass={ControlLabel} xs={6} md={4}>
            //                                                 <p className="text-left">Điện thoại học sinh</p>
            //                                             </Col>

            //                                             <Col xs={12} md={8}>
            //                                                 <FormControl
            //                                                     type="text"
            //                                                     value={this.state.value}
            //                                                     placeholder="Nhập số điện thoại học sinh"
            //                                                     onChange={this.handleChange}
            //                                                 />
            //                                             </Col>
            //                                         </FormGroup>

            //                                         <FormGroup controlId="">
            //                                             <Col componentClass={ControlLabel} xs={6} md={4}>
            //                                                 <p className="text-left">Ngày sinh</p>
            //                                             </Col>

            //                                             <Col xs={12} md={8}>
            //                                                 <FormControl
            //                                                     type="text"
            //                                                     value={this.state.value}
            //                                                     placeholder="Nhập ngày tháng năm sinh"
            //                                                     onChange={this.handleChange}
            //                                                 />

            //                                             </Col>
            //                                         </FormGroup>

            //                                         <FormGroup controlId="">
            //                                             <Col componentClass={ControlLabel} xs={6} md={4}>
            //                                                 <p className="text-left">Lớp đăng ký</p>
            //                                             </Col>

            //                                             <Col xs={12} md={8}>
            //                                                 <FormControl componentClass="select" placeholder="-----">
            //                                                     <option value="select">Lớp 1</option>
            //                                                     <option value="other">...</option>
            //                                                 </FormControl>
            //                                             </Col>
            //                                         </FormGroup>

            //                                         <FormGroup>
            //                                             <Col componentClass={ControlLabel} xs={6} md={4}>
            //                                                 <p className="text-left">Môn đăng ký</p>
            //                                             </Col>
            //                                             <Col xs={12} md={8}>
            //                                                 <Checkbox inline>Toán</Checkbox>
            //                                                 <Checkbox inline>Văn</Checkbox>
            //                                                 <Checkbox inline>Anh</Checkbox>
            //                                                 <Checkbox inline>Lý</Checkbox>
            //                                                 <Checkbox inline>Hoá</Checkbox>
            //                                             </Col>
            //                                         </FormGroup>

            //                                         <FormGroup>
            //                                             <Col>
            //                                                 <Button bsStyle="primary" block>
            //                                                     Đăng ký
            //                             </Button>
            //                                             </Col>
            //                                         </FormGroup>
            //                                     </Form>
            //                                 </Col>
            //                                 <Col xs={4} md={2}></Col>
            //                             </Row>
            //                         </Grid>

            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>

            //     {/* divider */}
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-lg-12">
            //                 <div className="blankline">
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     {/* end divider */}
            // </section>
        );
    }
}

export default About;