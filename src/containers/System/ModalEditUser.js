import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {emitter} from '../../utils/emitter';
import _ from 'lodash'; 
class ModalEditUser extends Component {

      constructor(props) {
        super(props);
        this.state={
            id:'',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            phonenumber: '',
            render: '',
            roleId: '',
        }; 
      }
    componentDidMount() {
        let user = this.props.currentUser;//{}
        if(user && !_.isEmpty(user)){
            this.setState({
                id:user.id,
                email: user.email,
                password: 'harcode',
                firstname: user.firstName,
                lastname: user.lastName,
                address: user.address,
                phonenumber: user.phoneNumber,
                // render: '',
                // roleId: '',
             }); 
        }
    }
    toggle =() =>{
        this.props.toggleFromParent();
    }
    handleOnchageInput=(event, id) =>{
        let copystate = {...this.state};
        copystate[id] = event.target.value;
        this.setState({
            ...copystate,
        });
       

    }
    checkValideInput =() => {
        let isValid = true;
        let arrInput = ['email','password','firstname','lastname','address','phonenumber'];
        for(let i = 0;i < arrInput.length;i++) {
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('missing parameter:'+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleSaveUser = () =>{
      let isValid =  this.checkValideInput();
      if(isValid === true){
        // api
        this.props.editUser(this.state);
      
      }
      
    }

    render() {
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.toggle()}} 
            className={'modal-user-container'}
            size="lg"
            >
          <ModalHeader toggle={()=>{this.toggle()}}>Edit User</ModalHeader>
          <ModalBody>
            <div className="modal-user-body">
                <div className="input-container">
                    <label>Email</label>
                    <input 
                    type="text" 
                    onChange={(event)=> {this.handleOnchageInput(event, "email")}} 
                    value={this.state.email}
                    disabled
                    />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input 
                    type="password" 
                    onChange={(event)=> {this.handleOnchageInput(event, "password")}}
                    value={this.state.password}
                    disabled

                    />
                </div>
                <div className="input-container">
                    <label>FirstName</label>
                    <input 
                    type="text" 
                    onChange={(event)=> {this.handleOnchageInput(event, "firstname" )}} 
                    value={this.state.firstname}
                    />
                </div>
                <div className="input-container">
                    <label>LastName</label>
                    <input 
                    type="text" 
                    onChange={(event)=> {this.handleOnchageInput(event, "lastname")}} 
                    value={this.state.lastname}
                    />
                </div>
                <div className="input-container">
                    <label>Address</label>
                    <input 
                    type="text" 
                    onChange={(event)=> {this.handleOnchageInput(event, "address")}}
                    value={this.state.address}
                    />
                </div>
                <div className="input-container">
                    <label>PhoneNumber</label>
                    <input 
                    type="text" 
                    onChange={(event)=> {this.handleOnchageInput (event,"phonenumber")}} 
                    value={this.state.phonenumber}
                    />
                </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button 
            color="primary" 
            className="px-3" 
            onClick={()=>{this.handleSaveUser() }}
            >Save changes
            </Button>{' '}
            <Button 
            color="secondary" 
            className="px-3" 
            onClick={()=>{this.toggle()}}
            >Close
            </Button>
          </ModalFooter>
        </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
