import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
class Footer extends React.Component {
    render() {
        return (
            // <footer>
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-sm-3 col-lg-3">
            //                 <div className="widget">
            //                     <h4>Get in touch with us</h4>
            //                     <address>
            //                         <strong>Sailor company Inc</strong><br />
            //                         Sailor suite room V124, DB 91<br />
            //                         Someplace 71745 Earth </address>
            //                     <p>
            //                         <i className="icon-phone"></i> (123) 456-7890 - (123) 555-7891 <br />
            //                         <i className="icon-envelope-alt"></i> email@domainname.com</p>
            //                 </div>
            //             </div>
            //             <div className="col-sm-3 col-lg-3">
            //                 <div className="widget">
            //                     <h4>Information</h4>
            //                     <ul className="link-list">
            //                         <li><a href="#">Press release</a></li>
            //                         <li><a href="#">Terms and conditions</a></li>
            //                         <li><a href="#">Privacy policy</a></li>
            //                         <li><a href="#">Career center</a></li>
            //                         <li><a href="#">Contact us</a></li>
            //                     </ul>
            //                 </div>

            //             </div>
            //             <div className="col-sm-3 col-lg-3">
            //                 <div className="widget">
            //                     <h4>Pages</h4>
            //                     <ul className="link-list">
            //                         <li><a href="#">Press release</a></li>
            //                         <li><a href="#">Terms and conditions</a></li>
            //                         <li><a href="#">Privacy policy</a></li>
            //                         <li><a href="#">Career center</a></li>
            //                         <li><a href="#">Contact us</a></li>
            //                     </ul>
            //                 </div>
            //             </div>
            //             <div className="col-sm-3 col-lg-3">
            //                 <div className="widget">
            //                     <h4>Newsletter</h4>
            //                     <p>Fill your email and sign up for monthly newsletter to keep updated</p>
            //                     <div className="form-group multiple-form-group input-group">
            //                         <input type="email" name="email" className="form-control" />
            //                         <span className="input-group-btn">
            //                             <button type="button" className="btn btn-theme btn-add">Subscribe</button>
            //                         </span>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div id="sub-footer">
            //         <div className="container">
            //             <div className="row">
            //                 <div className="col-lg-6">
            //                     <div className="copyright">
            //                         <p>&copy; Sailor Theme - All Right Reserved</p>
            //                         <div className="credits">

            //                             <a href="https://bootstrapmade.com/bootstrap-business-templates/">
            //                             Bootstrap Business Templates</a> by 
            //                             <a href="https://bootstrapmade.com/">BootstrapMade</a>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6">
            //                     <ul className="social-network">
            //                         <li><a href="#" data-placement="top" title="Facebook">
            //                         <i className="fa fa-facebook"></i></a></li>
            //                         <li><a href="#" data-placement="top" title="Twitter">
            //                         <i className="fa fa-twitter"></i></a></li>
            //                         <li><a href="#" data-placement="top" title="Linkedin">
            //                         <i className="fa fa-linkedin"></i></a></li>
            //                         <li><a href="#" data-placement="top" title="Pinterest">
            //                         <i className="fa fa-pinterest"></i></a></li>
            //                         <li><a href="#" data-placement="top" title="Google plus">
            //                         <i className="fa fa-google-plus"></i></a></li>
            //                     </ul>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </footer>

            <div className="footer-div">
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <a className="navbar-brand" href="index.html">
                                <img src="/static/img/favicon.ico" alt="" />
                            </a>
                        </Col>
                        <Col className="footer-col-2" xs={12} md={8}>
                            <p>TRUNG TÂM DẠY TỐT</p>

                            <p><b>CS1: </b> TẦNG 7 - TRUNG TÂM THƯƠNG MẠI VÂN HỒ - SỐ 51 LÊ ĐẠI HÀNH - HAI BÀ TRƯNG - HÀ NỘI</p>

                            <p><b>CS2: </b> TÒA NHÀ 3 TẦNG - SỐ 335 ĐƯỜNG CẦU GIẤY - HÀ NỘI (CẠNH CHUNG CƯ 17 TẦNG - 335 CẦU GIẤY)</p>

                            <p><b>Hotline: </b> 0966.065.365 - 0243.9785.768</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Footer;
