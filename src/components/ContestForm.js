import React from 'react';
import axios from 'axios';
import './Contest.css'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ContestForm extends React.Component {
    state = {contests: [],
        modal: false, modalData: '', modalHeader: '', modalButton: ""
    };

    handleChange = (e: Object) => this.setState({ [e.target.name]: e.target.value });

    redirectHome = (e) => {
        e.preventDefault();
        window.location = "/Home"
    }
    hideModal = (e) => {
        this.setState({modal: false})
    }

    handleSubmit = () => {
            this.action = window.open(this.addNewSlogan(this.state.first_name, this.state.last_name, this.state.email, this.state.slogan));
    }

    addNewSlogan = ()  => {
        const { first_name, last_name, email, slogan } = this.state
        axios.post("https://boulderbike-backend.herokuapp.com/api/v1/contests", {contest: {first_name:this.state.first_name,last_name: this.state.last_name, email: this.state.email, slogan: this.state.slogan}})
            .then(response => {
                    if (response.status === 200){
                    this.setState({modalHeader: `Your slogan was submitted`});}
                    this.setState({modalData: `Hi ${first_name} ${last_name}. Your slogan " ${slogan} " was saved to the database. Informations about your Contest will be send to your email: ${email}`});
                    this.setState({modalButton: this.redirectHome})
                    this.setState({modal: true})
                  })
            .catch(error => {
                    this.setState({modalHeader: `Error`});
                    this.setState({modalData: error.response || "There was an error , please try again"});
                    this.setState({modalButton: this.hideModal})
                    this.setState({modal: true})
                    console.log(error.response)
                    }
    )}
            render() {
                return (
                    <div className ="container" id ="myForm">
                    <h3 className= "text-center text-danger">Contests</h3>
                    <Form className="contest">

                    <h5 className="text-warning fill">Fill the form below if you want to be on of our sponsors</h5>
                    <FormGroup>
                     <Label for="first_name">First Name</Label>
                    <Input type="text" name="first_name" placeholder="John"  value={this.state.first_name} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="last">Last Name</Label>
                    <Input type="text" name="last_name" placeholder="Kadahizi"  value={this.state.last_name} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email"  placeholder="jbatgoal@yahoo.com" value={this.state.email} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="slogan">Enter your slogan( only between 1-50 letters maximum)</Label>
                    <Input type="textarea" name="slogan"  value={this.state.slogan} onChange={this.handleChange} />
                    </FormGroup>
                    <Button className="addnew btn-success" onClick={this.addNewSlogan}>Submit</Button>
                    </Form>

                    <Modal className = "text-dark" isOpen={this.state.modal}>
                    <ModalHeader toggle={this.toggle}>{this.state.modalHeader}</ModalHeader>
                    <ModalBody>
                    [{this.state.modalData}]
                    </ModalBody>
                    <ModalFooter>
                     <Button color="primary" onClick={this.state.modalButton} >OK</Button>{''}
                    </ModalFooter>
                        </Modal>
                </div>
            );
    }
}
