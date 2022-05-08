import React, { useState } from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { MDBBtn } from "mdb-react-ui-kit";


function RenderStaffList({ staff }) {

  return (
    <Card className="text-center">
      <Link to={`/nhanvien/${staff.id}`} >
        <CardImg width="100%" src={staff.image} alt={staff.name} />

        <MDBBtn
          outline
          className="mx-auto btn-staff stafflist"
          color='primary'
        >{staff.name}
        </MDBBtn>

      </Link>
    </Card>
  );
}

const StaffList = (props) => {
  const [column, setCol] = useState("col-12 col-md-6 col-lg-4 mt-3");
  const nhanvien = props.staffs.map((staff) => {
    return (
      <div className={column} key={staff.id}>
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

        {/* Dropdown Button*/}
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
            Sắp xếp danh sách nhân viên
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button class="dropdown-item" type="button" onClick={() => setCol("col-md-12 mt-12")}>1 cột </button></li>
            <li><button class="dropdown-item" type="button" onClick={() => setCol("col-md-6 mt-1")}>2 cột </button></li>
            <li><button class="dropdown-item" type="button" onClick={() => setCol("col-md-4 mt-1")}>3 cột </button></li>
            <li><button class="dropdown-item" type="button" onClick={() => setCol("col-md-3 mt-1")}>4 cột </button></li>
            <li><button class="dropdown-item" type="button" onClick={() => setCol("col-md-2 mt-1")}>6 cột </button></li>
          </ul>
        </div>
      </div>
      <div className="row">{nhanvien}</div>
    </div>
  );

};


export default StaffList;

