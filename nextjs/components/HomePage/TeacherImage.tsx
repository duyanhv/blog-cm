import React from 'react';
import Slider from 'react-slick';
import { Row, Col, Grid } from 'react-bootstrap';

export interface TechnologyProps {}

class TeacherImage extends React.Component {
  onClick = () => {
    // tslint:disable-next-line:no-console
    console.log('heyeh');
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      // adaptiveHeight: true,
      // slidesToScroll: 1
      arrows: false,
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
                <h2>Giảng Viên</h2>
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
                <img
                  src="https://picsum.photos/200/300/?random"
                  width="100%"
                  alt=""
                />

                <img
                  onClick={this.onClick}
                  src="https://picsum.photos/200/300/?random"
                  width="100%"
                  alt=""
                />

                <img
                  src="https://picsum.photos/200/300/?random"
                  width="100%"
                  alt=""
                />

                <img
                  src="https://picsum.photos/200/300/?random"
                  width="100%"
                  alt=""
                />

                <img
                  src="https://picsum.photos/200/300/?random"
                  width="100%"
                  alt=""
                />

                <img
                  src="https://picsum.photos/200/300/?random"
                  width="100%"
                  alt=""
                />
              </Slider>
            </Col>
          </Row>
        </Grid>
        {/* divider */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="solidline" />
            </div>
          </div>
        </div>
        {/* end divider */}
      </section>
    );
  }
}

export default TeacherImage;
