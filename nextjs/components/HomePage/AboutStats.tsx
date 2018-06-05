import React from 'react';

// export interface AboutStatsProps {}

class AboutStats extends React.Component {
  render() {
    return (
      <section id="content">
        <div
          id="parallax1"
          className="parallax text-light text-center marginbot50"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row appear stats">
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="align-center color-white txt-shadow">
                  <div className="icon">
                    <i className="fa fa-clock-o fa-5x" />
                  </div>
                  <strong id="counter-coffee" className="number">
                    1232
                  </strong>
                  <br />
                  <span className="text">Minutes</span>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="align-center color-white txt-shadow">
                  <div className="icon">
                    <i className="fa fa-music fa-5x" />
                  </div>
                  <strong id="counter-music" className="number">
                    345
                  </strong>
                  <br />
                  <span className="text">MP3 Songs</span>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="align-center color-white txt-shadow">
                  <div className="icon">
                    <i className="fa fa-coffee fa-5x" />
                  </div>
                  <strong id="counter-clock" className="number">
                    501
                  </strong>
                  <br />
                  <span className="text">Coffee Cups</span>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="align-center color-white txt-shadow">
                  <div className="icon">
                    <i className="fa fa-trophy fa-5x" />
                  </div>
                  <strong id="counter-heart" className="number">
                    378
                  </strong>
                  <br />
                  <span className="text">Awwards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutStats;
