import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function StaffDetail(props) {
  if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/nhanvien">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row mb-3">
          <RenderStaff staffInfor={props.staff} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderStaff({ staffInfor }) {
  if (staffInfor != null) {
    return (
      <div className="col-12">
          <div className="row">
        <Card>
          <div className="col-3">
            <CardImg width="100%" src={staffInfor.image} alt={staffInfor.name} />
          </div>
          <div className="col-9">
            <CardBody >
              <CardTitle>
                <b>Họ và tên: 
                {staffInfor.name} </b>
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
          </div>
        </Card>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default StaffDetail;