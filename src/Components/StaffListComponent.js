import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
    };
  }

  onStaffSelect(staffInfor) {
    this.setState({ selectedStaff: staffInfor });
  }

  renderStaff(staffInfor) {
    if (staffInfor != null) {
      return (
        <Card>
          <CardImg width="100%" src={staffInfor.image} alt={staffInfor.name} />
          <CardBody>
            <CardTitle>Họ và tên: {staffInfor.name}</CardTitle>
            <CardText>Ngày sinh: {dateFormat(staffInfor.doB, "dd/mm/yyyy")}</CardText>
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
      return <div/>
    }
  }

  render() {
    const staff = this.props.staffs.map((staffInfor) => {
      return (
        <div key={staffInfor.id} className="col-md-6 mt-1">
          <Card onClick={() => this.onStaffSelect(staffInfor)}>
          <CardTitle>{staffInfor.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {staff}
          </div>
          <p className="text-center">Nhấn vào tên nhân viên để hiện thông tin.</p>
        <div>{this.renderStaff(this.state.selectedStaff)}</div>
      </div>
    );
  }
}

export default StaffList;
