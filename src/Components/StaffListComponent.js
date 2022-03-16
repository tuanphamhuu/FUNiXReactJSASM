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

  onStaffSelect(sta) {
    this.setState({ selectedStaff: sta });
  }

  renderStaff(sta) {
    if (sta != null) {
      return (
        <Card>
          <CardBody>
            <CardTitle>Họ và tên: {sta.name}</CardTitle>
            <CardText>Ngày sinh: {dateFormat(sta.doB, "dd/mm/yyyy")}</CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(sta.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {sta.department.name} </CardText>
            <CardText>Số ngày nghỉ còn lại: {sta.annualLeave} </CardText>
            <CardText>Số ngày đã làm thêm: {sta.overTime} </CardText>
          </CardBody>
        </Card>
      );
    } else {
    }
  }

  render() {
    const staff = this.props.staffs.map((sta) => {
      return (
        <div key={sta.id} className="col-6 mt-3">
          <Card onClick={() => this.onStaffSelect(sta)}>
            <CardImg width="100%" src={sta.image} alt={sta.name} />
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{staff}</div>
        <div>{this.renderStaff(this.state.selectedStaff)}</div>
      </div>
    );
  }
}

export default StaffList;
