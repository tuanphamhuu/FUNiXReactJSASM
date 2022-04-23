
import { Component } from "react";
import Main from "./Components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom"
class App extends Component {
  
  render() {
    return (
     <BrowserRouter>
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/" className="text-center">
              Ứng dụng quản lý nhân sự 1.0
            </NavbarBrand>
          </div>
        </Navbar> */}
        <Main/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;