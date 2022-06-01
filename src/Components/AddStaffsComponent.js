import React, { Component } from "react";
import {
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

            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
// nhận event làm tham số
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                    <div >
                            {/* Icon  Login  Button */}
                                    <Button color="primary" outline onClick={this.toggleModal}><span className="fa fa-plus fa-lg " ></span></Button>
                   </div>
              
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Thêm nhân viên</ModalHeader>
                    {/* Adding the controlled Form - thêm nhân viên */}
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
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
                                        value={this.state.doB}
                                        onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="startDate"> Ngày vào công ty</Label>
                                <Input type="date" id="startDate" name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup >
                            <Col md={{ size: 3, offset: 0 }}>
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
                                    value={this.state.salarySale}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="annualLeave"> Số ngày nghỉ còn lại  </Label>
                                <Input type="text" id="annualLeave" name="annualLeave"
                                    value={this.state.annualLeave}
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