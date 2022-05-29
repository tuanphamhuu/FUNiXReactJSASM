import React from "react";
import { CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


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
          <div className="col-12">
            <h5 className="salary">Thông tin nhân viên</h5>
            <hr />
          </div>
        </div>

        <div className="row mb-3">
          <RenderStaff staffInfor={props.staff} />
        </div>
      </div>
    );
  } else {
    return <div/>;
  }
}

function RenderStaff({ staffInfor }) {
  if (staffInfor != null) {
    return (
      <div className="col-12">
        <div className="row">
          <MDBRow>
            <MDBCol md='4' className='col-example'>
              <CardImg width="100%" src={staffInfor.image} alt={staffInfor.name} />
            </MDBCol>

            <MDBCol md='8' className='col-example shadow detail'>
              <CardTitle>
                <b>Họ và tên: {" "}
                  {staffInfor.name} </b>
              </CardTitle>
              <CardText>
                <b>Ngày sinh:</b> {" "} {dateFormat(staffInfor.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                <b>Ngày vào công ty:</b>{" "}
                {dateFormat(staffInfor.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                <b>Phòng ban:</b> {" "} {staffInfor.department.name}{" "}
              </CardText>
              <CardText>
                <b>Số ngày nghỉ còn lại:</b> {" "} {staffInfor.annualLeave}{" "}
              </CardText>
              <CardText>
                <b>Số ngày đã làm thêm:</b> {" "} {staffInfor.overTime}{" "}
              </CardText>
            </MDBCol>

          </MDBRow>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default StaffDetail;