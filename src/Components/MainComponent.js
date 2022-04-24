import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetail";
import Department from "./Department"
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    // Lấy data từ STAFFS ...
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }


  render() {

    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
        staffInfor={this.state.staffs.filter((item) => item.id === parseInt(match.params.nhanvienId, 10))[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/nhanvien' component={() => <StaffList staffs={this.state.staffs} />} />
          <Route path ='/nhanvien/:nhanvienId' component={() => <StaffWithId />} />
          <Route exact path='/phongban' component={() => <Department dept={this.state.departments} />} />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>

    );
  }

}

export default Main;