import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';


function Header() {


    return (

    
        <header className='header'>


            <MDBNavbar expand="lg" light  fixed>
                <MDBContainer fluid>
                    {/* <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler> */}
                    <div className='collapse navbar-collapse' id='navbarExample01'>
                        <MDBNavbarNav right className='mb-2 mb-lg-0'>
                            {/* <NavbarToggler onClick={this.toggleNav} /> */}
                            <NavbarBrand href="/" className="mr-auto"><img src="assets/images/logonhansu.png" width="35" alt="Quan Li Nhan Vien" /> </NavbarBrand>

                            <Collapse navbar>
                                <MDBNavbarItem active>
                                    <NavLink className="nav-link" to="/nhanvien">
                                        <span className="fa fa-users fa-lg"></span> Nhân viên
                                    </NavLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem active>
                                    <NavLink className="nav-link" to="/phongban">
                                        <span className="fa fa-address-card fa-lg"></span> Phòng ban
                                    </NavLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem active>
                                    <NavLink className="nav-link" to="/bangluong">
                                        <span className="fa fa-money fa-lg"></span> Bảng lương
                                    </NavLink>
                                </MDBNavbarItem>
                            </Collapse>
                        </MDBNavbarNav>

                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Tìm kiếm nhân viên' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>

                    </div>

                </MDBContainer>
            </MDBNavbar>
           
        </header>
    );
}

export default Header;