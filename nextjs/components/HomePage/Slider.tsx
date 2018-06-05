import React from 'react';
import { Carousel, Glyphicon } from 'react-bootstrap';

// interface SliderProps {}

// interface SliderState {
//     nextIcon: JSX.Element;
//     prevIcon: JSX.Element;
//     indicators: boolean;
//     carouselWidth: number;
//     carouselHeight: number;
// }

class Slider extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      nextIcon: <Glyphicon glyph="chevron-right" />,
      prevIcon: <Glyphicon glyph="chevron-left" />,
      indicators: true,
      carouselWidth: 1140,
      carouselHeight: 415.63
    };
  }

  render() {
    // const { nextIcon, prevIcon, indicators, carouselWidth, carouselHeight } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="main-slider" className="main-slider flexslider">
              <Carousel
                prevIcon={<Glyphicon glyph="chevron-left" />}
                nextIcon={<Glyphicon glyph="chevron-right" />}
                indicators={true}
                carouselwidth={1140}
                carouselheight={415.63}
              >
                <Carousel.Item>
                  <img src="static/img/slides/flexslider/1.jpg" alt="" />
                  <div className="flex-caption">
                    {/* <h3>Thi trắc nghiệm trực tuyến miễn phí</h3> */}
                    <p>Thi trắc nghiệm trực tuyến miễn phí</p>
                    <a href="#" className="btn btn-theme">
                      Tìm hiểu thêm
                    </a>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <img src="static/img/slides/flexslider/2.jpg" alt="" />
                  <div className="flex-caption">
                    {/* <h3>Fully Responsive</h3> */}
                    <p>Xem kết quả thi vào lớp 10 2016-2017</p>
                    <a href="#" className="btn btn-theme">
                      Learn More
                    </a>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <img src="static/img/slides/flexslider/2.jpg" alt="" />
                  <div className="flex-caption">
                    {/* <h3>Clean Fast</h3> */}
                    <p>
                      Trung tâm khai giảng chương trình tiểu học theo chuẩn kiến
                      thức
                    </p>
                    <a href="#" className="btn btn-theme">
                      Learn More
                    </a>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
