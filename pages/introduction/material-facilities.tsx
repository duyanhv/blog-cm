import * as React from 'react';
import Layout from '../../nextjs/components/HomePage/Layout';
import SignUpForTesting from '../../nextjs/components/HomePage/SignUpForTesting';

class MaterialFacilities extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container material-acilities">
          <h2>Cơ Sở Vật Chất Của Educlass</h2>

          <hr className="colorgraph" />

          <p>
            <b>
              <i>
                Educlass nhận thức được việc học, ôn thi luôn đòi hỏi học sinh
                phải có sự nỗ lực tập trung rất cao chính vì vậy trung tâm đã
                đầu tư cơ sở phòng học
              </i>
            </b>
          </p>

          <p>
            Educlass nhận thức được việc học, ôn thi luôn đòi hỏi học sinh phải có
            sự nỗ lực tập trung rất cao chính vì vậy trung tâm đã đầu tư cơ sở
            vật chất trong đó phòng học rộng rãi, thoáng mát, chất lượng âm
            thanh-ánh sáng đạt tiêu chuẩn của phòng học hiện đại, bảo vệ sức
            khỏe thầy và trò. Mùa hè các phòng học đều được trang bị điều hòa
            công suất lớn để giúp các em quên đi cái oi bức và tiếp thu bài hiệu
            quả nhất.
          </p>

          <h2>Cơ sở vật chất ở được thiết kế như thế nào?</h2>

          <ul>
            <li>
              <h4>Phòng học tiện nghi</h4>
              <p>
                Phòng học Vip đẳng cấp quốc tế, được bố trí hệ thống âm thanh,
                ánh sáng, điều hòa đầy đủ.
              </p>
            </li>
            <li>
              <h4>Tối đa 15 học sinh</h4>
              <p>
                Mô hình học nhóm nhỏ, chất lượng cao, sĩ số tối đa mỗi lớp là 15
                học sinh tạo điều kiện tốt nhất cho các em học tập, trao đổi
                kiến thức với giáo viên và các bạn cùng lớp.
              </p>
            </li>
            <li>
              <h4>Wifi miễn phí</h4>
              <p>
                Học viên có thể sử dụng máy tính cá nhân, điện thoại di động kết nối Internet không dây (wifi) miễn phí.
              </p>
            </li>
          </ul>

          <div className="images-group">
            <figure>
              <img src="/static/img/introduction/material-facilities/hanhlang.jpg" alt="Hanh Lang" width="304" height="228" />
              <figcaption>Hành Lang</figcaption>
            </figure>

            <figure>
              <img src="/static/img/introduction/material-facilities/phong-hoc-6_1.jpg" alt="Phong Hoc" width="304" height="228" />
              <figcaption>Phòng Học</figcaption>
            </figure>

            <figure>
              <img src="/static/img/introduction/material-facilities/phong-hoc-12.jpg" alt="Phong Hoc" width="304" height="228" />
              <figcaption>Phòng Học</figcaption>
            </figure>

            <figure>
              <img src="/static/img/introduction/material-facilities/phong-hoi-truong.jpg" alt="Phong Hoi Truong" width="304" height="228" />
              <figcaption>Phòng Hội Trường</figcaption>
            </figure>
          </div>

          <SignUpForTesting />
        </div>

        <style jsx>{`
          ul li h4 {
            font-weight: bold;
          }

          div.images-group figure {
            margin-bottom: 24px;
          }
          div.images-group figure figcaption {
            text-align: center;
          }
          div.images-group figure img {
            display: block;
            width: 80%;
            height: auto;
            margin: 0 auto;
          }
        `}</style>
      </Layout>
    );
  }
}

export default MaterialFacilities;
