import React from 'react';
import Link from 'next/link';

export default class Header extends React.Component {
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
                  <Link prefetch href="/">
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
                    Giới Thiệu &nbsp; <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/introduction/material-facilities">
                        <a>Cơ Sở Vật Chất</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/introduction/activities">
                        <a>Hoạt Động Tiêu Biểu</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/introduction/teachers">
                        <a>
                          Danh Sách Giảng Viên
                        </a>
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
                  <Link prefetch href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>

                <li>
                  <Link prefetch href="/contact">
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
