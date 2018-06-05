import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <div className="widget">
                <h4>Get in touch with us</h4>
                <address>
                  <strong>Sailor company Inc</strong>
                  <br />
                  Sailor suite room V124, DB 91<br />
                  Someplace 71745 Earth{' '}
                </address>
                <p>
                  <i className="icon-phone" /> (123) 456-7890 - (123) 555-7891{' '}
                  <br />
                  <i className="icon-envelope-alt" /> email@domainname.com
                </p>
              </div>
            </div>

            <div className="col-sm-3 col-lg-3">
              <div className="widget">
                <h4>Information</h4>
                <ul className="link-list">
                  <li>
                    <a href="#">Press release</a>
                  </li>
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Career center</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-3 col-lg-3">
              <div className="widget">
                <h4>Pages</h4>
                <ul className="link-list">
                  <li>
                    <a href="#">Press release</a>
                  </li>
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Career center</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-3 col-lg-3">
              <div className="widget">
                <h4>Newsletter</h4>
                <p>
                  Fill your email and sign up for monthly newsletter to keep
                  updated
                </p>
                <div className="form-group multiple-form-group input-group">
                  <input type="email" name="email" className="form-control" />
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-theme btn-add">
                      Subscribe
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright">
                  <p>&copy; Sailor Theme - All Right Reserved</p>
                  <div className="credits">
                    <a href="https://bootstrapmade.com/bootstrap-business-templates/">
                      Bootstrap Business Templates
                    </a>{' '}
                    by
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <ul className="social-network">
                  <li>
                    <a href="#" data-placement="top" title="Facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-placement="top" title="Twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-placement="top" title="Linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-placement="top" title="Pinterest">
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-placement="top" title="Google plus">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
