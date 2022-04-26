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
    MDBIcon
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <header>
            <MDBNavbar expand='lg' light bgColor='white'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler>
                    <div className='collapse navbar-collapse' id='navbarExample01'>
                        <MDBNavbarNav right className='mb-2 mb-lg-0'>
                            <NavbarBrand href="/" className="mr-auto"><img src="assets/images/logo.png" width="40" alt="Quan Li Nhan Vien" /> </NavbarBrand>
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
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
        </header>
    );
}

export default Header;