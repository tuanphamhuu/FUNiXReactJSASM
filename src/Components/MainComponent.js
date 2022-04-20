import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from "./StaffListComponent";
import { STAFFS } from "../shared/staffs";

class Main extends Component {
  constructor(props) {
    super(props);
    // Lấy data từ STAFFS
    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <StaffList staffs={this.state.staffs} />
        <Footer />
      </div>
    );
  }

}

export default Main;