import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBBadge } from "mdb-react-ui-kit";

// function StaffList(props) {
//   const staffs = props.staffs.map((staff) => {
//     return (
//       <Card>
//         <div key={staff.id} className="col-12 col-md-5 m-1">
//           <CardImg width= "100%" src={staff.image} alt={staff.name} />
//           <CardTitle>{staff.name}</CardTitle>
//         </div>
//       </Card>
//     );
//   });
//   return (
//     <div className="container">
//       <div className="row">{staffs}</div>
//     </div>
//   );
// }

function RenderStaffList({ staff }) {
  return (


    <Card className = "text-center">
      <Link to={`/nhanvien/${staff.id}`} >
        <CardImg width="100%" src={staff.image} alt={staff.name} />

        <MDBBtn
          outline
          className="mx-auto btn-staff"
        >{staff.name} </MDBBtn>

      </Link>
    </Card>
  );
}

const StaffList = (props) => {
  const nhanvien = props.staffs.map((staff) => {
    return (
      <div className="col-12 col-md-3 m-1" key={staff.id}>
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
      </div>
      <div className="row">{nhanvien}</div>
    </div>
  );

};


export default StaffList;
