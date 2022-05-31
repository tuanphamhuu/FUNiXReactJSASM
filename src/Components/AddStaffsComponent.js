import React, { Component } from "react";
import {
    Navbar, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col
} from 'reactstrap';


class AddStaffs extends Component {
    //    tạo state cho Component Header 
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            doB: '',
            startDate: '',
            salaryScale: '',
            department: '',
            annualLeave: '',
            overTime: '',
            salary: '',
            image: '/assets/images/alberto.png',

            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    // toggleNav để chuyển đổi giá trị isNavOpen
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    // handle the form submission
    handleLogin(event) {
        this.toggleModal();
        alert("Staffname: " + this.staffname.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return (
            <React.Fragment>
                <Navbar expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            {/* isOpen : thuộc tính Boolean  */}

                            {/* Icon  Login  Button */}
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-plus fa-lg"></span></Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Thêm nhân viên</ModalHeader>

                    {/* Adding the Uncontrolled Form - Sử dụng chức năng thêm nhân viên sử dụng controlled forms. */}
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="name"> Tên </Label>
                                <Input type="text" id="staffsname" name="staffsname"
                                        placeholder="Tên nhân viên"
                                        value={this.state.staffsname}
                                        onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="doB"> Ngày sinh</Label>
                                <Input type="date" id="doB" name="doB"
                                        value={this.state.dob}
                                        onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="startDate"> Ngày vào công ty</Label>
                                <Input type="date" id="startDate" name="startDate"
                                    value={this.state.startdate}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                            <Col md={{ size: 16, offset: 0 }}>
                                <Label htmlFor="department"> Phòng ban </Label><br />
                                <select id="department" name="department" 
                                    value={this.state.department}
                                    onChange={this.handleInputChange} >
                                    <option value="Sale">Sale</option>
                                    <option value="HR">HR</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="IT">IT</option>
                                    <option value="Finance">Finance</option>
                                </select>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="salaryScale"> Hệ số lương </Label>
                                <Input type="text" id="salaryScale" name="salaryScale"
                                    value={this.state.salarysale}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="annualLeave"> Số ngày nghỉ còn lại  </Label>
                                <Input type="text" id="annualLeave" name="annualLeave"
                                    value={this.state.annualleave}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="overTime"> Số ngày đã làm thêm </Label>
                                <Input type="text" id="overTime" name="overTime"
                                    value={this.state.overTime}
                                    onChange={this.handleInputChange} />
                            </FormGroup>

                            <Button type="submit" value="submit" color="primary"> Thêm</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default AddStaffs;