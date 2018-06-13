import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import {
  Table,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText
} from 'reactstrap';

// export interface TechnologyProps {}

export default class News extends React.Component {
  onClick = () => {
    // tslint:disable-next-line:no-console
    console.log('heyeh');
  }

  render() {
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 6,
    //   adaptiveHeight: true,
    //   // slidesToScroll: 1
    //   arrows: false,
    //   accessibility: true,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   centerMode: true
    // };

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
              <div className="newsCard-div">
                <Card className="news-card">
                  <CardImg
                    top
                    width="100%"
                    src="/static/img/introduction/material-facilities/hanhlang.jpg"
                    alt="Card image cap"
                  />
                  <CardBody className="newsCardBody">
                    <CardTitle>Card title</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col xs={6} md={4}>
              <div className="newsCard-div">
                <Card>
                  <CardImg
                    className="cardImg"
                    top
                    src="/static/img/introduction/material-facilities/phong-hoc-6_1.jpg"
                    alt="Card image cap"
                  />
                  <CardBody className="newsCardBody">
                    <CardTitle>Card title</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col xs={6} md={4}>
              <div className="newsCard-div">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="/static/img/introduction/material-facilities/phong-hoc-12.jpg"
                    alt="Card image cap"
                  />
                  <CardBody className="newsCardBody">
                    <CardTitle>Card title</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row>
            {/* <Col>
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
                        </Col> */}
            <Col>
              <div className="news-table">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>SubTitle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        Lorem ipsum dolor sit amet, donec mi ut pede, tortor
                        est, elit euismod nec elit quis, sed mauris ac. Integer
                        amet aptent mi, sit wisi cras elit quis tellus nulla,
                        blandit n ulla eget. Massa tristique quam, suscipit pede
                        massa, lobo rtis semper pellentesque vitae cras ut
                        ipsum. D
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        Lorem ipsum dolor sit amet, donec mi ut pede, tortor
                        est, elit euismod nec elit quis, sed mauris ac. Integer
                        amet aptent mi, sit wisi cras elit quis tellus nulla,
                        blandit n ulla eget. Massa tristique quam, suscipit pede
                        massa, lobo rtis semper pellentesque vitae cras ut
                        ipsum. D
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        Lorem ipsum dolor sit amet, donec mi ut pede, tortor
                        est, elit euismod nec elit quis, sed mauris ac. Integer
                        amet aptent mi, sit wisi cras elit quis tellus nulla,
                        blandit n ulla eget. Massa tristique quam, suscipit pede
                        massa, lobo rtis semper pellentesque vitae cras ut
                        ipsum. D
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
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
