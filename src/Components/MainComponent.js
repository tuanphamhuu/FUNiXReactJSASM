import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetail";
import Department from "./DepartmentComponent"
import Salary from "./SalaryComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
// Cài đặt và cấu hình được react-redux

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    staffsView: state.staffsView,
    departments: state.departments,
  }
}
class Main extends Component {
  constructor(props) {
    super(props);
      this.state = {
        staffsViews: this.props.staffsView,
    }
  }
  // changeStaffs = (staffs) => {
  //   this.setState({
  //     staffs: staffs,
  //   });
  // }
  changeStaffsView = (staffs) => {
    this.setState({
      staffsView: staffs,
    });
  };


  render() {

    const StaffWithId = ({ match }) => {
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
            // staffs={this.props.staffs}
            staffsView={this.state.staffsViews}
            changeStaffsView={this.changeStaffsView}
            changeStaffs={this.changeStaffs}
          />}
          />

          <Route path='/nhanvien/:nhanvienId' component={StaffWithId} />
          <Route path='/phongban' component={() => <Department dept={this.props.departments} />} />
          <Route path='/bangluong' component={() => <Salary luong={this.state.staffs} />} />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>

    );
  }

}

export default withRouter(connect(mapStateToProps)(Main));