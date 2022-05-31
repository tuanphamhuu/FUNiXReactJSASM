import React, { useRef, useState } from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem, Col, FormGroup } from "reactstrap";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
import AddStaffs from './AddStaffsComponent';

function RenderStaffList({ staff }) {
  // Render ra Tên nhân viên và Hình nhân viên
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

  const inputName = useRef();
  // Search Staff
  const handleSearchStaff = () => {
    console.log('List staffs', props.staffs);
    let listView = props.staffs;
    const searchText = inputName.current.value.toString().toLowerCase();
    console.log('Gia tri tu o Input:', searchText, inputName.current.value);
    if (listView.length > 0 && searchText) {
      listView = listView.filter((e) => {
        return (
          (e?.name)
            .toString()
            .toLowerCase()
            .includes(searchText)
        );
      });
    }
    else {
      // alert("Ô tìm kiếm trống")
      <div className="row">{nhanvien}</div>
    }
    console.log('Gia tri loc', listView);
    props.changeStaffsView(listView);
  };



  const nhanvien = props.staffsView.map((staff) => {
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

        <div>
          {/* Dropdown Button*/}
          <div class="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
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

          {/* Tìm kiếm nhân viên - sử dụng uncontrolled form */}
          <FormGroup row>
            <Col md={{ size: 17, offset: 0 }}>
              <div className="col-5 col-md-3">
                <input label=''
                  ref={inputName}
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm nhân viên..."
                />
              </div>
              <Col md={{ size: 5, offset: 30 }}>
             
                <MDBBtn onClick={handleSearchStaff} size='lg' type="submit" value="button">Tìm kiếm</MDBBtn>
           
              </Col>
            </Col>
          </FormGroup>
          {/* Thêm nhân viên */}
          <AddStaffs />
        </div>
        <div className="row">{nhanvien}</div>
        
      </div>
    </div>
  );
};
export default StaffList;