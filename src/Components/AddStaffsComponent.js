import React, { Component } from "react";
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col, FormFeedback, Row
} from 'reactstrap';
import { DEPARTMENTS } from "../shared/staffs";
class AddStaffs extends Component {
    //    tạo state cho Component Header 
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            doB: '',
            startDate: '',
            salaryScale: '',
            department: DEPARTMENTS[1],
            annualLeave: '',
            overTime: '',
            salary: '',
            image: '/assets/images/jackma.png',
            isModalOpen: false,
            touched: {
                name: false,
                doB: false,
                startDate: false,
                salaryScale: false,
                annualLeave: false,
                overTime: false,
            }
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
    async handleInputChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if (name === 'department') {
            const itemDepartment = DEPARTMENTS.find(item => item.name === value)
            value = itemDepartment;

        }
        await this.setState({
            [name]: value
        });
        console.log('state deparment', this.state.department);
    }


    handleSubmit(event) {
        const newStaff = {
            name: this.state.name,
            doB: this.state.doB,
            startDate: this.state.startDate,
            salaryScale: this.state.salaryScale,
            department: this.state.department,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            salary: this.state.salary,
            image: this.state.image,
        };
        event.preventDefault();
        console.log(this.props)
        if (this.state.name === '' ||
            this.state.doB === '' ||
            this.state.startDate === '' ||
            this.state.salaryScale === '' ||
            this.state.department === '' ||
            this.state.annualLeave === '' ||
            this.state.overTime === ''
        ) {
            alert('Bạn chưa nhập hết thông tin');
        } else {
            this.props.onAdd(newStaff)
        }
    }



    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, doB, startDate, salaryScale, annualLeave, overTime) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
            salaryScale: '',
            annualLeave: '',
            overTime: '',
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Tên nhân viên phải trên 3 ký tự';
        else if (this.state.touched.name && name.length > 20)
            errors.name = 'Tên nhân viên phải bé hơn 20 ký tự';
        if (this.state.touched.doB && doB.length < 1)
            errors.doB = 'Yêu cầu nhập';
        if (this.state.touched.startDate && startDate.length < 1)
            errors.startDate = 'Yêu cầu nhập';
        if (this.state.touched.salaryScale && salaryScale.length < 1)
            errors.salaryScale = 'Yêu cầu nhập';
        if (this.state.touched.annualLeave && annualLeave.length < 1)
            errors.annualLeave = 'Yêu cầu nhập';
        if (this.state.touched.overTime && overTime.length < 1)
            errors.overTime = 'Yêu cầu nhập';
        return errors;
    }

    render() {
        const errors = this.validate(
            this.state.name,
            this.state.doB,
            this.state.startDate,
            this.state.salaryScale,
            this.state.annualLeave,
            this.state.overTime
        );
        return (
            <React.Fragment>
                <div >
                    {/* Icon  Login  Button */}
                    <Button color="primary" outline onClick={this.toggleModal}><span className="fa fa-plus fa-lg "></span></Button>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Thêm nhân viên</ModalHeader>
                    {/* Adding the controlled Form - thêm nhân viên */}
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <Row >
                                <Label htmlFor="name" md={4}> Tên </Label>
                                <Col md={8}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="Tên nhân viên"
                                        value={this.state.name}
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback> {errors.name} </FormFeedback>
                                </Col>
                            </Row>

                            <Row >
                                <Label htmlFor="doB" md={5}> Ngày sinh</Label>
                                <Col md={7}>
                                    <Input type="date" id="doB" name="doB"
                                        value={this.state.doB}
                                        valid={errors.doB === ''}
                                        invalid={errors.doB !== ''}
                                        onBlur={this.handleBlur('doB')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback> {errors.doB} </FormFeedback>
                                </Col>
                            </Row>
                            <Row>
                                <Label htmlFor="startDate" md={5}> Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Input type="date" id="startDate" name="startDate"
                                        value={this.state.startDate}
                                        valid={errors.startDate === ''}
                                        invalid={errors.startDate !== ''}
                                        onBlur={this.handleBlur('startDate')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback> {errors.startDate} </FormFeedback>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="department" md={5}> Phòng ban </Label><br />
                                    <Col md={7}>
                                        <Input
                                            id="department" name="department"
                                            type="select"
                                            value={this.state.department.name}
                                            onChange={this.handleInputChange} >
                                            <option value="HR">HR</option>
                                            <option value="Sale">Sale</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="IT">IT</option>
                                            <option value="Finance">Finance</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Row>
                                <Label htmlFor="salaryScale" md={5}> Hệ số lương </Label>
                                <Col md={7}>
                                    <Input type="number" id="salaryScale" name="salaryScale"
                                        value={this.state.salaryScale}
                                        valid={errors.salaryScale === ''}
                                        invalid={errors.salaryScale !== ''}
                                        onBlur={this.handleBlur('salaryScale')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback> {errors.salaryScale} </FormFeedback>
                                </Col>
                            </Row>
                            <Row>
                                <Label htmlFor="annualLeave" md={5}> Số ngày nghỉ còn lại  </Label>
                                <Col md={7}>
                                    <Input type="number" id="annualLeave" name="annualLeave"
                                        value={this.state.annualLeave}
                                        valid={errors.annualLeave === ''}
                                        invalid={errors.annualLeave !== ''}
                                        onBlur={this.handleBlur('annualLeave')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback> {errors.annualLeave} </FormFeedback>
                                </Col>
                            </Row>
                            <Row>
                                <Label htmlFor="overTime" md={5}> Số ngày đã làm thêm </Label>
                                <Col md={7}>
                                    <Input type="number" id="overTime" name="overTime"
                                        value={this.state.overTime}
                                        valid={errors.overTime === ''}
                                        invalid={errors.overTime !== ''}
                                        onBlur={this.handleBlur('overTime')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback> {errors.overTime} </FormFeedback>
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary"> Thêm</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default AddStaffs;