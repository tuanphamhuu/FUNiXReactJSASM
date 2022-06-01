import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {MDBIcon} from "mdb-react-ui-kit";
function Header() {

    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-light #e3f2fd ">
                <div className="container-fluid header-wrap">
                    <button
                        className="navbar-toggler btn-hamburger"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    > 
                    <MDBIcon icon="align-justify" />
                    </button>

                    <NavbarBrand href="/" className="mr-auto"><img src="assets/images/logonhansu.png" width="35" alt="Quan Li Nhan Vien" /> </NavbarBrand>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink className="nav-link" to="/nhanvien">
                                <span className="fa fa-users fa-lg"></span> Nhân viên
                            </NavLink>
                            <NavLink className="nav-link" to="/phongban">
                                <span className="fa fa-address-card fa-lg"></span> Phòng ban
                            </NavLink>
                            <NavLink className="nav-link" to="/bangluong">
                                <span className="fa fa-money fa-lg"></span> Bảng lương
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;