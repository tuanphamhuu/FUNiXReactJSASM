import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <div className="container">
                    <NavbarBrand href="/" className="mr-auto"><img src="assets/images/logo.png" width="40" alt="Quan Li Nhan Vien" /> </NavbarBrand>             
                    <Nav>
                        <NavItem>
                            <NavLink className="nav-link" to="/nhanvien">
                                <span className="fa fa-users fa-lg"></span> Nhân viên
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/phongban">
                                <span className="fa fa-address-card fa-lg"></span> Phòng ban
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/bangluong">
                                <span className="fa fa-money fa-lg"></span> Bảng lương
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;