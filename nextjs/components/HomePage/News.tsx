import React from 'react';
import Slider from 'react-slick';
import { Row, Col, Grid } from 'react-bootstrap';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
// export interface TechnologyProps {

// }

class News extends React.Component {

    onClick() {
        // tslint:disable-next-line:no-console
        console.log('heyeh');
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            adaptiveHeight: true,
            // slidesToScroll: 1
            arrows: false,
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
        };
        return (
            <section id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                {/* <h2>We use <span className="highlight">modern</span> infrastructure & technology</h2> */}
                                <h2>Tin mới nhất</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>

                        <Col xs={6} md={4}>
                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>

                        <Col xs={6} md={4}>
                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row>
                        <Col>
                            <Slider {...settings}>
                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="newsCard">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap" />
                                    <CardBody className="newsCardBody">
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </div>
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

export default News;