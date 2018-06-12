import React from 'react';

// export interface ClientsProps {}

export default class Clients extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-2 aligncenter client">
            <img
              alt="logo"
              src="static/img/clients/logo1.png"
              className="img-responsive"
            />
          </div>

          <div className="col-xs-6 col-md-2 aligncenter client">
            <img
              alt="logo"
              src="static/img/clients/logo2.png"
              className="img-responsive"
            />
          </div>

          <div className="col-xs-6 col-md-2 aligncenter client">
            <img
              alt="logo"
              src="static/img/clients/logo3.png"
              className="img-responsive"
            />
          </div>

          <div className="col-xs-6 col-md-2 aligncenter client">
            <img
              alt="logo"
              src="static/img/clients/logo4.png"
              className="img-responsive"
            />
          </div>

          <div className="col-xs-6 col-md-2 aligncenter client">
            <img
              alt="logo"
              src="static/img/clients/logo5.png"
              className="img-responsive"
            />
          </div>
          <div className="col-xs-6 col-md-2 aligncenter client">
            <img
              alt="logo"
              src="static/img/clients/logo6.png"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
    );
  }
}
