import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBBadge } from "mdb-react-ui-kit";



function RenderStaffList({ staff }) {
  return (

    <Card className="text-center">
      <Link to={`/nhanvien/${staff.id}`} >
        <CardImg width="100%" src={staff.image} alt={staff.name} />

        <MDBBtn
          outline
          className="mx-auto btn-staff stafflist"
          color='primary'
        >{staff.name} </MDBBtn>

      </Link>
    </Card>
  );
}

const StaffList = (props) => {
  const nhanvien = props.staffs.map((staff) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-3" key={staff.id}>
        <RenderStaffList staff={staff} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/nhanvien">Nhân viên</Link></BreadcrumbItem>
          <BreadcrumbItem active> Danh Sách Nhân Viên</BreadcrumbItem>
        </Breadcrumb>

         {/* Button */}
      
      </div>
      <div className="row">{nhanvien}</div>
    </div>
  );

};


export default StaffList;
