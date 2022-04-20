import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, Nav } from 'reactstrap';

function Header() {
    return (
        <div>
            <Navbar color="primary">
                <div className="container">
                <NavbarBrand><img src="assets/images/logo.png" width="40" alt="Quan Li Nhan Vien" /> </NavbarBrand>
                <Nav>
                    <NavItem>
                        <span className="fa fa-users fa-lg"></span> Nhân viên
                    </NavItem>
                    <NavItem>
                        <span className="fa fa-users fa-lg"></span> Phòng ban
                    </NavItem>
                    <NavItem>
                        <span className="fa fa-users fa-lg"></span> Bảng lương
                    </NavItem>
                </Nav>
                </div>
                
            </Navbar>
        </div>
    );
}

export default Header;