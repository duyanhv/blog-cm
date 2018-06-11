import React from 'react';

// interface PromoProps {}

export default class Promo extends React.Component {
  render() {
    return (
      <section className="callaction">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cta-text">
                <h2>
                  Awesome site template <span>corporate</span> business
                </h2>
                <p>
                  {' '}
                  Etiam adipiscing, justo quis feugiat.Suspendisse eu erat quam.
                  Vivamus porttitor eros quis nisi lacinia sed interdum
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cta-btn">
                <a href="#" className="btn btn-theme btn-lg">
                  Grab it now <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
