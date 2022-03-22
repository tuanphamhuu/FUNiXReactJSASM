// import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Component } from "react";
import StaffList from "./Components/StaffListComponent";
import { STAFFS } from './shared/staffs';

class App extends Component {

  constructor(props) {
    super(props);
    // Lấy data từ STAFFS
    this.state = {
      staffs: STAFFS
    }
  } 
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/" className="text-center">
              Ứng dụng quản lý nhân sự 1.0
            </NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs}/>
        
      </div>
    );
  }
}

export default App;
