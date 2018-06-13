import React from 'react';
import Slider from 'react-slick';
import { Row, Col, Grid } from 'react-bootstrap';

export interface TechnologyProps { }

export default class TeacherImage extends React.Component {
    onClick = () => {
        // tslint:disable-next-line:no-console
        console.log('heyeh');
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            // adaptiveHeight: true,
            // slidesToScroll: 1
            // arrows: true,
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            className: 'slider-div'
        };
        return (
            <section id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                {/* <h2>We use <span className="highlight">modern</span> infrastructure & technology</h2> */}
                                <h2>Giảng Viên Tại Educlass</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-lg-3">
                                    <div className="box">
                                        <div className="aligncenter">
                                            <div className="icon">
                                                <i className="fa fa-desktop fa-5x"></i>
                                            </div>
                                            <h4>Fully responsive</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-md-3 col-lg-3">
                                    <div className="box">
                                        <div className="aligncenter">
                                            <div className="icon">
                                                <i className="fa fa-file-code-o fa-5x"></i>
                                            </div>
                                            <h4>Fully responsive</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-md-3 col-lg-3">
                                    <div className="box">
                                        <div className="aligncenter">
                                            <div className="icon">
                                                <i className="fa fa-paper-plane-o fa-5x"></i>
                                            </div>
                                            <h4>Fully responsive</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-md-3 col-lg-3">
                                    <div className="box">
                                        <div className="aligncenter">
                                            <div className="icon">
                                                <i className="fa fa-cubes fa-5x"></i>
                                            </div>
                                            <h4>Fully responsive</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Grid>
                    <Row>
                        <Col>
                            <Slider {...settings}>
                                <img src="http://daytot.vn/files/giao-vien/co-thu-hoa.jpg" alt="" />

                                <img onClick={this.onClick}
                                    src="http://daytot.vn/files/giao-vien/2015_06/co-tran-thi-huyen-an.jpg"
                                    alt="" />

                                <img src="http://daytot.vn/files/giao-vien/2017_02/nguyen-thi-luong.jpg" alt="" />

                                <img src="http://daytot.vn/files/giao-vien/2017_02/nguyen-thi-luong.jpg" alt="" />

                                <img src="http://daytot.vn/files/giao-vien/2017_02/nguyen-thi-luong.jpg" alt="" />

                                <img src="http://daytot.vn/files/giao-vien/2017_02/nguyen-thi-luong.jpg" alt="" />
                            </Slider>
                        </Col>
                    </Row>
                </Grid>
                {/* divider */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="solidline">
                            </div>
                        </div>
                    </div>
                </div>
                {/* end divider */}
            </section>
        );
    }
}
