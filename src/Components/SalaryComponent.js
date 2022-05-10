import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { STAFFS } from "../shared/staffs";
import { Link } from "react-router-dom";

const basicSalary = 3000000;
const hourlyWage = 200000 / 8;

function RenderSalary({ salary }) {
  return (
    <Card className="salary">
      <h3 className="p-3 bg-white rounded m-2 nameSalary "><b>{salary.name}</b></h3>
      <CardBody>
        <CardText>Mã nhân viên: {salary.id}</CardText>
        <CardText>Hệ số lương: {salary.salaryScale}</CardText>
        <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
        <CardText className="bg-light p-2 shadow luongSalary">
          Lương :{" "}
          {(salary.salaryScale * basicSalary + salary.overTime * hourlyWage).toFixed(0)}
        </CardText>
      </CardBody>
    </Card>
  );
}

// Sắp xếp nhân viên tăng dần và giảm dần 

function Salary(props) {
  const [arrayStaff, setArrayStaff] = useState(STAFFS);

  const ascend = () => {
    setArrayStaff((STAFFS) => {
      const staffToSort = [...STAFFS];
      staffToSort.sort((a, b) => Number(a.id) - Number(b.id));
      return staffToSort;
    });
  };

  const decline = () => {
    setArrayStaff((STAFFS) => {
      const staffToSort = [...STAFFS];
      staffToSort.sort((a, b) => Number(b.id) - Number(a.id));
      return staffToSort;
    });
  };


  const ascending = arrayStaff.map((array) => {
    return (
      <div key={array.id} className="col-lg-4 col-md-6 g-4">
        <RenderSalary salary={array} />
      </div>
    )
  })
  return (
    <div className="container">
    <React.Fragment>
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {/* button array */}
  
      <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
            Sắp xếp danh sách nhân viên
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2"> 
            <li><button class="dropdown-item" type="button" onClick={ascend}> Từ cũ đến mới </button></li>
            <li><button class="dropdown-item" type="button" onClick={decline}>Từ mới đến cũ</button></li>
          </ul>
        </div>
      <div className="container">
        <div className="row">
          {ascending}
        </div>
      </div>
    </React.Fragment>
    </div>
  )
}
export default Salary;
