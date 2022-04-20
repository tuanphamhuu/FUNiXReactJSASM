import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBBtn, MDBBadge } from "mdb-react-ui-kit";

const classChange = {
  col1: "col-md-12 mt-1",
  col2: "col-md-6 mt-1",
  col3: "col-md-4 mt-1",
  col4: "col-md-3 mt-1",
  col6: "col-md-2 mt-1",
};
let { col1, col2, col3, col4, col6 } = classChange;
// container component
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
      selectedButton: "col-12 col-md-6 col-lg-4 mt-3", // default value
    };
  }

  onStaffSelect(staffInfor) {
    this.setState({ selectedStaff: staffInfor });
  }

  onColSelect(changeCol) {
    this.setState({ selectedButton: changeCol });
  }

  renderStaff(staffInfor) {
    if (staffInfor != null) {
      return (
        <Card>
          <CardImg width="100%" src={staffInfor.image} alt={staffInfor.name} />
          <CardBody>
            <CardTitle>
              <b>Họ và tên: </b>
              {staffInfor.name}
            </CardTitle>
            <CardText>
              <b>Ngày sinh:</b> {dateFormat(staffInfor.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              <b>Ngày vào công ty:</b>{" "}
              {dateFormat(staffInfor.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              <b>Phòng ban:</b> {staffInfor.department.name}{" "}
            </CardText>
            <CardText>
              <b>Số ngày nghỉ còn lại:</b> {staffInfor.annualLeave}{" "}
            </CardText>
            <CardText>
              <b>Số ngày đã làm thêm:</b> {staffInfor.overTime}{" "}
            </CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  // Hiển thị tên nhân viên - sử dụng arrow function truyền tham số staffInfor
  render() {
    const staff = this.props.staffs.map((staffInfor) => {
      return (
        <div className={this.state.selectedButton}>
          <div key={staffInfor.id} className="mt-1 text-center">
            <MDBBtn
              outline
              rounded
              className="mx-auto btn-staff"
              onClick={() => this.onStaffSelect(staffInfor)}
            >
              {staffInfor.name}
            </MDBBtn>
          </div>
        </div>
      );
    });

    return (
      <div className="container my-3">
        <div className="text-center">
          <MDBBtn
            rounded
            className="mx-2"
            color="dark"
            onClick={() => this.onColSelect(col1)}
          >
            1 cột
          </MDBBtn>

          <MDBBtn
            rounded
            className="mx-2"
            color="dark"
            onClick={() => this.onColSelect(col2)}
          >
            2 cột
          </MDBBtn>
          <MDBBtn
            rounded
            className="mx-2"
            color="dark"
            onClick={() => this.onColSelect(col3)}
          >
            3 cột
          </MDBBtn>
          <MDBBtn
            rounded
            className="mx-2"
            color="dark"
            onClick={() => this.onColSelect(col4)}
          >
            4 cột
          </MDBBtn>
          <MDBBtn
            rounded
            className="mx-2"
            color="dark"
            onClick={() => this.onColSelect(col6)}
          >
            6 cột
          </MDBBtn>
        </div>
        <div className="row">{staff}</div>
        <div className="text-center my-3">
          <MDBBadge color="dark">
            Nhấn vào tên nhân viên để hiện thông tin.
          </MDBBadge>
        </div>
        <div>{this.renderStaff(this.state.selectedStaff)}</div>
      </div>
    );
  }
}

export default StaffList;
