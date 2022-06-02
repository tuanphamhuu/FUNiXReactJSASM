import React, { Component } from "react";
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col, FormFeedback
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

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, doB, salaryScale, startDate, annualLeave, overTime) {
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

        // if (name == null || name == '' || doB == null || doB == ''|| startDate == null || startDate == ''|| salaryScale == null || salaryScale == '') 
        //     errors.name = 'Xin hãy nhập thông tin ';

        // const thisYear = new Date().getFullYear();
        //     if (parseInt(startDate) > parseInt(thisYear)) {
        //         errors.startDate = ' Ngày vào công ty bị sai'; 
        //     }
        if (this.state.touched.doB && doB < 1)
            errors.doB = 'Yêu cầu nhập';
        // else if (doB == null || doB == '')
        // {errors.doB = 'Không được để trống';}

        if (this.state.touched.startDate && startDate < 1)
            errors.startDate = 'Yêu cầu nhập';
        if (this.state.touched.salaryScale && salaryScale < 1)
            errors.salaryScale = 'Yêu cầu nhập';
        if (this.state.touched.annualLeave && annualLeave < 1)
            errors.annualLeave = 'Yêu cầu nhập';
        if (this.state.touched.overTime && overTime < 1)
            errors.overTime = 'Yêu cầu nhập';
        return errors;
    }

    render() {
        const errors = this.validate(this.state.name, this.state.doB, this.state.startDate, this.state.salaryScale, this.state.annualLeave, this.state.overTime);
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
                                <Input type="text" id="name" name="name"
                                    placeholder="Tên nhân viên"
                                    value={this.state.name}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''}
                                    onBlur={this.handleBlur('name')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback> {errors.name} </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="doB"> Ngày sinh</Label>
                                <Input type="date" id="doB" name="doB"
                                    value={this.state.doB}
                                    valid={errors.doB === ''}
                                    invalid={errors.doB !== ''}
                                    onBlur={this.handleBlur('doB')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback> {errors.doB} </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="startDate"> Ngày vào công ty</Label>
                                <Input type="date" id="startDate" name="startDate"
                                    value={this.state.startDate}
                                    valid={errors.startDate === ''}
                                    invalid={errors.startDate !== ''}
                                    onBlur={this.handleBlur('startDate')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback> {errors.startDate} </FormFeedback>
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
                                <Input type="number" id="salaryScale" name="salaryScale"
                                    value={this.state.salarySale}
                                    valid={errors.salaryScale === ''}
                                    invalid={errors.salaryScale !== ''}
                                    onBlur={this.handleBlur('salaryScale')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback> {errors.salaryScale} </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="annualLeave"> Số ngày nghỉ còn lại  </Label>
                                <Input type="number" id="annualLeave" name="annualLeave"
                                    value={this.state.annualLeave}
                                    valid={errors.annualLeave === ''}
                                    invalid={errors.annualLeave !== ''}
                                    onBlur={this.handleBlur('annualLeave')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback> {errors.annualLeave} </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="overTime"> Số ngày đã làm thêm </Label>
                                <Input type="number" id="overTime" name="overTime"
                                    value={this.state.overTime}
                                    valid={errors.overTime === ''}
                                    invalid={errors.overTime !== ''}
                                    onBlur={this.handleBlur('overTime')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback> {errors.overTime} </FormFeedback>
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