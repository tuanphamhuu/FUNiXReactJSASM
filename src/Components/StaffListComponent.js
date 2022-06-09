import React, { useRef, useState } from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem, Col, FormGroup, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { MDBBtn } from "mdb-react-ui-kit";
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
      <div className="row">{nhanvien}</div>
    }
    props.changeStaffsView(listView);
  };


  const nhanvien = props.staffsView.map((staff) => {
    return (
      <div className={column} key={staff.id}>
        <RenderStaffList staff={staff} />
      </div>
    );
  });

  const addStaff = (staff) => {
    let list = [];
    list = props.staffs;
    const id = new Date().getTime();
    const newStaff = { id, ...staff };
    // list.unshift( JSON.stringify(newStaff));
    list.unshift(newStaff);
    props.changeStaffs(list);

  }
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/nhanvien">Nhân viên</Link></BreadcrumbItem>
          <BreadcrumbItem active> Danh Sách Nhân Viên</BreadcrumbItem>
        </Breadcrumb>

        <FormGroup row>
          <Row>
            {/* Thêm nhân viên */}
            <Col md={3} >
              <AddStaffs onAdd={addStaff} />
            </Col>
            <Col md={9} className="text-right">
              {/* Dropdown Button*/}
              <div class="dropdown" >
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
            </Col>
          </Row>
        </FormGroup>
        {/* Tìm kiếm nhân viên - sử dụng uncontrolled form */}
        <FormGroup>
          <Row >
            <Col className=" col-md-3 text-right">
              <input label=''
                ref={inputName}
                type="text"
                className="form-control"
                placeholder="Tìm kiếm nhân viên..."
              />
            </Col>
            <Col >
              <MDBBtn onClick={handleSearchStaff} type="submit" value="button">Tìm kiếm</MDBBtn>
            </Col>
          </Row>
        </FormGroup>
        <hr />
        <div className="row">{nhanvien}</div>
      </div>
    </div>
  );
};
export default StaffList;