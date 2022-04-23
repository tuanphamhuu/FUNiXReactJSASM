import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from "./StaffListComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
class Main extends Component {
  constructor(props) {
    super(props);
    // Lấy data từ STAFFS
    this.state = {
      staffs: STAFFS,
    };
  }
  render() {

    const HomePage = () => {
        return(
            <Home 
            />
        );
    }
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/nhanvien' component={() =>  <StaffList staffs={this.state.staffs} />} />
              <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
      
    );
  }

}

export default Main;