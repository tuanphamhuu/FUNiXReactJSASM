import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetail";
import Department from "./DepartmentComponent"
import Salary from "./SalaryComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Switch, Route, Redirect } from 'react-router-dom';
import AddStaffs from "./AddStaffsComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    // Lấy data từ STAFFS ...
    this.state = {
      staffs: STAFFS,
      staffsView: STAFFS,
      departments: DEPARTMENTS,
    };
    this.addStaff = this.addStaff.bind(this);
  }

  addStaff = (staff) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newStaff = { id, ...staff };
    this.setState({
      staffs: [...this.state.staffs, newStaff]
    });
    console.log('news staff', newStaff);
    console.log(this.state.staffs)
  };

  changeStaffs = (staffs) => {
    this.setState({
      staffs: staffs,
    });
  }
  changeStaffsView = (staffs) => {
    this.setState({
      staffsView: staffs,
    });
  };


  render() {

    const StaffWithId = ({ match }) => {
      // console.log(match.params.nhanvienId);
      return (
        <StaffDetail
          staff={this.state.staffs.filter((item) => item.id === parseInt(match.params.nhanvienId, 10))[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/nhanvien' component={() => <StaffList
            onAdd={this.addStaff}
            staffs={this.state.staffs}
            staffsView={this.state.staffsView}
            changeStaffsView={this.changeStaffsView}
            changeStaffs={this.changeStaffs}
          />}
          />
          <Route path='/nhanvien/:nhanvienId' component={StaffWithId} />
          <Route path='/phongban' component={() => <Department dept={this.state.departments} />} />
          <Route path='/bangluong' component={() => <Salary luong={this.state.staffs} />} />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>

    );
  }

}

export default Main;