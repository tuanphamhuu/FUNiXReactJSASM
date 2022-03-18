import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

const classChange = {
  col1: "col-md-12 mt-1",
  col2: "col-md-6 mt-1",
  col3: "col-md-4 mt-1",
  col4: "col-md-3 mt-1",
  col6: "col-md-2 mt-1",
}
let {col1, col2, col3, col4, col6} = classChange;
class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
      selectedButton: "col-12 col-md-6 col-lg-4 mt-3",
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
            <CardTitle>Họ và tên: {staffInfor.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staffInfor.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staffInfor.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staffInfor.department.name} </CardText>
            <CardText>Số ngày nghỉ còn lại: {staffInfor.annualLeave} </CardText>
            <CardText>Số ngày đã làm thêm: {staffInfor.overTime} </CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div/>;
    }
  }

  render() {
    const staff = this.props.staffs.map((staffInfor) => {
      return (
        <div className={this.state.selectedButton}>
        <div key={staffInfor.id} className="col-md-6 mt-1">
          <Card onClick={() => this.onStaffSelect(staffInfor)}>
            <CardTitle>{staffInfor.name}</CardTitle>
          </Card>
        </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row m-3">
        <button
            onClick={() => this.onColSelect(col1)}
            className="btn btn-success mr-3"
          >
            1 cột
          </button>
        <button
            onClick={() => this.onColSelect(col2)}
            className="btn btn-success mr-3"
          >
            2 cột
          </button>
          <button
            onClick={() => this.onColSelect(col3)}
            className="btn btn-success mr-3"
          >
            3 cột
          </button>
          <button
            onClick={() => this.onColSelect(col4)}
            className="btn btn-success mr-3"
          >
            4 cột
          </button>
          <button
            onClick={() => this.onColSelect(col6)}
            className="btn btn-success mr-3"
          >
            6 cột
          </button>
        </div>
        <div className="row">{staff}</div>
        <p className="text-center">Nhấn vào tên nhân viên để hiện thông tin.</p>
        <div>{this.renderStaff(this.state.selectedStaff)}</div>
      </div>
    );
  }
}

export default StaffList;
