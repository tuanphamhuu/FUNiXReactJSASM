// import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Component } from "react";
import Main from "./Components/MainComponent";
import "./App.css";
class App extends Component {
  
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
        <Main/>
       
      </div>
    );
  }
}

export default App;