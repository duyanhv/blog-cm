import * as React from 'react';
import SignUpForTesting from '../../nextjs/components/HomePage/SignUpForTesting';
import Layout from '../../nextjs/components/HomePage/Layout';
import * as moment from 'moment';
import { Table } from 'react-bootstrap';

class TimeTable12 extends React.Component {
  render() {
    const mockData = [
      {
        classCode: 'HINH_HOC_12A1',
        classTitle: 'Hình Học 12A1',
        time: [{day: 1, start: '18h30', end: '20h00'}, {day: 4, start: '18h30', end: '20h00'}],
        begin: new Date(),
        teacher: 'Thầy Nguyễn Công Nguyên',
        note: '',
      },
      {
        classCode: 'HINH_HOC_12A2',
        classTitle: 'Hình Học 12A2',
        time: [{day: 1, start: '18h30', end: '20h00'}, {day: 3, start: '18h30', end: '20h00'}, {day: 6, start: '18h30', end: '20h00'}],
        begin: new Date(),
        teacher: 'Thầy Nguyễn Công Nguyên',
        note: '',
      },
      {
        classCode: 'VAN_HOC_12',
        classTitle: 'Văn Học 12 Nâng Cao',
        time: [{day: 1, start: '18h30', end: '20h00'}, {day: 6, start: '18h30', end: '20h00'}],
        begin: new Date(),
        teacher: 'Thầy Nguyễn Công Nguyên',
        note: '',
      },
      {
        classCode: 'VAT_LY_12',
        classTitle: 'Vật Lý 12',
        time: [{day: 1, start: '18h30', end: '20h00'}, {day: 3, start: '18h30', end: '20h00'}],
        begin: new Date(),
        teacher: 'Thầy Nguyễn Công Nguyên',
        note: '',
      },
    ];

    const dayInWeek = {
      1: 'Thứ 2',
      2: 'Thứ 3',
      3: 'Thứ 4',
      4: 'Thứ 5',
      5: 'Thứ 6',
      6: 'Thứ 7',
      7: 'Chủ Nhật'
    };

    return (
      <Layout>
        <div className="container time-table-12">
          <h2>Lịch Học Các Lớp 12</h2>

          <hr className="colorgraph" />

          <div className="address">
            <strong>Địa Chỉ: </strong> Số 22 Thành Công, Ba Đình, Hà Nội
          </div>
          
          <div className="time-table">
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Tên Lớp Học</th>
                  <th>Thứ</th>
                  <th>Thời Gian</th>
                  <th>Ngày Khai Giảng</th>
                  <th>Giáo Viên</th>
                  <th>Ghi Chú</th>
                </tr>
              </thead>

              {mockData.map((item) => {
                return (
                  <tbody key={item.classCode}>
                    <tr>
                      <td rowSpan={item.time.length}>{item.classTitle}</td>
                      <td>{dayInWeek[item.time[0].day]}</td>
                      <td>{`${item.time[0].start} - ${item.time[0].end}`}</td>
                      <td rowSpan={item.time.length}>{moment(item.begin).format('DD/MM/YYYY - HH:mm')}</td>
                      <td rowSpan={item.time.length}>{item.teacher}</td>
                      <td rowSpan={item.time.length}>{item.note}</td>
                    </tr>

                    {item.time.slice(1, item.time.length).map((ite) => (
                      <tr key={ite.day}>
                        <td>{dayInWeek[ite.day]}</td>
                        <td>{`${ite.start} - ${ite.end}`}</td>
                      </tr>
                    ))}
                  </tbody>
                );
              })}
            </Table>
          </div>

          <hr />

          <SignUpForTesting />
        </div>

        <style jsx>{`
          .time-table-12 {
            margin-top: 40px;
            margin-bottom: 40px;
          }

          .time-table-12 .title a {
            text-decoration: underline;
          }

          .time-table-12 .address {
            width: 90%;
            margin: 0 auto;
            margin-bottom: 20px;
          }

          .time-table-12 .time-table {
            width: 90%;
            margin: 0 auto;
          }
        `}</style>
      </Layout>
    );
  }
}

export default TimeTable12;