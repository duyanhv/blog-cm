import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                <img src="/static/img/favicon.ico" alt="" />
              </a>
            </div>
        
            <div className="navbar-collapse collapse ">
              <ul className="nav navbar-nav">
                <li>
                  <Link href="/">
                    <a>HOME</a>
                  </Link>
                </li>

                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle "
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="0"
                    data-close-others="false"
                  >
                    Features &nbsp; <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="components.html">Components</a>
                    </li>
                    <li>
                      <a href="pricing-box.html">Pricing box</a>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        href="#"
                        className="dropdown-toggle "
                        data-toggle="dropdown"
                        data-hover="dropdown"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="fullwidth.html">Full width</a>
                        </li>
                        <li>
                          <a href="right-sidebar.html">Right sidebar</a>
                        </li>
                        <li>
                          <a href="left-sidebar.html">Left sidebar</a>
                        </li>
                        <li>
                          <a href="comingsoon.html">Coming soon</a>
                        </li>
                        <li>
                          <a href="search-result.html">Search result</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle "
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="0"
                    data-close-others="false"
                  >
                    Sổ Liên Lạc &nbsp; <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/study-result/attendance-record">
                        <a>Điểm Danh</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/study-result/grade-book">
                        <a>Bảng Điểm</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle "
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="0"
                    data-close-others="false"
                  >
                    Lịch Học &nbsp; <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/time-table/register">
                        <a>Đăng Kí Học</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/time-table/12">
                        <a>Lịch Học Lớp 12</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Lịch Học Lớp 11</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Lịch Học Lớp 10</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Lịch Học Lớp 9</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Lịch Học Lớp 8</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Lịch Học Lớp 7</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Lịch Học Lớp 6</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
