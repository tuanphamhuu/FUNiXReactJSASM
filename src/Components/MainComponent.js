import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetail";
import Department from "./DepartmentComponent"
import Salary from "./SalaryComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
  constructor(props) {
    super(props);
    // khoi tao toan bo data app
    // const dataFromStorage = localStorage.getItem('STAFFS');
    // console.log('data??', dataFromStorage);
    // if (dataFromStorage) {
    //   this.state = {
    //     staffs: JSON.parse(dataFromStorage),
    //     staffsView: dataFromStorage,
    //     departments: DEPARTMENTS,
    //   };
    // } else {
      this.state = {
        staffs: STAFFS,
        staffsView: STAFFS,
        departments: DEPARTMENTS,
      // };
    }
    // localStorage.setItem('STAFFS', this.state.staffs);
  }
  changeStaffs = (staffs) => {
    this.setState({
      staffs: staffs,
    });
    // localStorage.setItem('STAFFS',  staffs);
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
            // onAdd={this.addStaff}
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