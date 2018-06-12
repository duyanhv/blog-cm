import React from 'react';
import ScrollToTop from 'react-scroll-up';
import Header  from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div>{this.props.children}</div>

        <Footer />

        <ScrollToTop showUnder={53} style={{ zIndex: 40 }}>
          <img src="/static/img/up_arrow_round.png" />
        </ScrollToTop>

        <script src="/static/js/jquery.min.js" />
        <script src="/static/js/modernizr.custom.js" />
        <script src="/static/js/jquery.easing.1.3.js" />
        <script src="/static/js/bootstrap.min.js" />
        <script src="/static/plugins/flexslider/jquery.flexslider-min.js" />
        <script src="/static/plugins/flexslider/flexslider.config.js" />
        <script src="/static/js/jquery.appear.js" />
        <script src="/static/js/stellar.js" />
        <script src="/static/js/classie.js" />
        <script src="/static/js/uisearch.js" />
        <script src="/static/js/jquery.cubeportfolio.min.js" />
        <script src="/static/js/google-code-prettify/prettify.js" />
        <script src="/static/js/animate.js" />
        <script src="/static/js/custom.js" />
      </div>
    );
  }
}
