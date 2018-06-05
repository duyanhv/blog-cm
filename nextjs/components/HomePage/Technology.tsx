import React from 'react';

// export interface TechnologyProps {}

class Technology extends React.Component {
  render() {
    return (
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                {/* <h2>We use <span className="highlight">modern</span> infrastructure & technology</h2> */}
                <h2>Các mô hình lớp dạy tốt</h2>
                {/* <p>Lorem ipsum dolor sit amet, ne duis posse mei, ut cum vero nominati. Sed graece aeterno consectetuer te. Cu duo tota deleniti,
                  vis ea fuisset nostrum. Meliore inciderint qui ne. Suas cotidieque vel ut ei eros perpetua qui. Ponderum
                  lobortis reformidans</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="box">
                    <div className="aligncenter">
                      <div className="icon">
                        <img src="http://daytot.vn/uploads/glass1.png" />
                        {/* <i className="fa fa-desktop fa-5x"></i> */}
                      </div>
                      <h4>Fully responsive</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="box">
                    <div className="aligncenter">
                      <div className="icon">
                        <img src="http://daytot.vn/uploads/glass6.png" alt="" />
                        {/* <i className="fa fa-file-code-o fa-5x"></i> */}
                      </div>
                      <h4>Fully responsive</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="box">
                    <div className="aligncenter">
                      <div className="icon">
                        <img
                          src="http://daytot.vn/uploads/glass20.png"
                          alt=""
                        />
                        {/* <i className="fa fa-paper-plane-o fa-5x"></i> */}
                      </div>
                      <h4>Fully responsive</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="box">
                    <div className="aligncenter">
                      <div className="icon">
                        <img
                          src="http://daytot.vn/uploads/khoa-tieng-anh.png"
                          alt=""
                        />
                        {/* <i className="fa fa-cubes fa-5x"></i> */}
                      </div>
                      <h4>Fully responsive</h4>
                      <div className="box-description">
                        Khóa học tiếng Anh chuyên biệt dành cho các học sinh
                        theo từng học lực khác nhau
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default Technology;
