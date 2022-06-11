import React, { Component } from "react";
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col, FormFeedback, Row
} from 'reactstrap';
// import { DEPARTMENTS } from "../shared/staffs";
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const minNum = (val) => !required(val) || !isNumber(val) || val >= 1;
const maxNum = (val) => val <= 3 || !isNumber(val);
const soDuong = (val) => !isNumber(val) || val >= 0;
class AddStaffs extends Component {
    //    tạo state cho Component Header 
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isModalOpen: false,
        }
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    // nhận event làm tham số

    handleSubmit(values) {
        const newStaff = {
            name: values.name,
            doB: values.doB,
            startDate: values.startDate,
            salaryScale: values.salaryScale,
            department: values.department,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            salary: values.salary,
            image: values.image,
        };
        values.preventDefault();
        console.log(this.props)
        if (values.name === '' ||
            values.doB === '' ||
            values.startDate === '' ||
            values.salaryScale === '' ||
            values.department === '' ||
            values.annualLeave === '' ||
            values.overTime === ''
        ) {
            alert('Bạn chưa nhập hết thông tin');
        } else {
            this.props.onAdd(newStaff)
        }
    }


    render() {
        return (
            <React.Fragment>
                <div >
                    {/* Icon  Login  Button */}
                    <Button color="primary" outline onClick={this.toggleModal}><span className="fa fa-plus fa-lg "></span></Button>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Thêm nhân viên</ModalHeader>
                    {/* Adding the controlled Form - form validation - thêm nhân viên */}
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={4}> Tên </Label>
                                <Col md={8}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Tên nhân viên"
                                        className="form-control"
                                        vallidate={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        model=".name"
                                        className="form-danger"
                                        show="touched"
                                        messages={{
                                            required: "Yêu cầu",
                                            minLength: "Nhập từ 3 ký tự trở lên",
                                            maxLength: "Nhập ít hơn 15 ký tự",
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="doB" md={5}> Ngày sinh</Label>
                                <Col md={7}>
                                    <Control.text model=".doB" type="date" id="doB" name="doB"
                                        className="form-control"
                                        vallidate={{
                                            required,
                                        }}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" md={5}> Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Control.text model=".startDate" type="date" id="startDate" name="startDate"
                                        className="form-control"
                                        vallidate={{
                                            required,
                                        }}
                                    />

                                </Col>
                            </Row>
                            <FormGroup>
                                <Row className="form-group">
                                    <Label htmlFor="department" md={5}> Phòng ban </Label><br />
                                    <Col md={7}>
                                        <Control.select
                                            className="form-control"
                                            model=".department"
                                            id="department" name="department"

                                        >
                                            <option value="HR">HR</option>
                                            <option value="Sale">Sale</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="IT">IT</option>
                                            <option value="Finance">Finance</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Row className="form-group">
                                <Label htmlFor="salaryScale" md={5}> Hệ số lương </Label>
                                <Col md={7}>
                                    <Control.number type="number" id="salaryScale" name="salaryScale"
                                        model=".salaryScale"
                                        className=".form-control"
                                        vallidate={{ required, isNumber, minNum, maxNum, }}
                                    />
                                    <Errors
                                        model=".salaryScale"
                                        className="form-danger"
                                        show="touched"
                                        messages={{
                                            required: "Yêu cầu",
                                            isNumber: "Phải nhập số",
                                            minNum: "Số phải >=1",
                                            maxNum: "Số phải <=3",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={5}> Số ngày nghỉ còn lại  </Label>
                                <Col md={7}>
                                    <Control.text type="number" id="annualLeave" name="annualLeave"
                                        className="form-control"
                                        model=".annualLeave"
                                        defaultValue="0"
                                        vallidate={{ required, isNumber, soDuong, }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".annualLeave"
                                        show="touched"
                                        messages={{
                                            required: "Chưa nhập ",
                                            isNumber: "Phải là số",
                                            soDuong: "Phải >=0",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" md={5}> Số ngày đã làm thêm </Label>
                                <Col md={7}>
                                    <Control.text type="number" id="overTime" name="overTime"
                                        className="form-control"
                                        model=".overTime"
                                        vallidate={{ required, isNumber, soDuong, }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".overTime"
                                        show="touched"
                                        messages={{
                                            required: "Chưa nhập ",
                                            isNumber: "Phải là số",
                                            soDuong: "Phải >=0",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary"> Thêm</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment >
        );
    }
}

export default AddStaffs;