import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {emitter} from '../../utils/emitter';

class ModalUser extends Component {

      constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
           
        };

        this.listenToEmitter();
        
      }
      listenToEmitter(){
        emitter.on('EVENT_CLEAR_MODAL_DATA',()=>{
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
              
            })
        })
      }

    componentDidMount() {
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
        let arrInput = ['email','password','firstName','lastName','address','phoneNumber'];
        for(let i = 0;i < arrInput.length;i++) {
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('missing parameter:'+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = () =>{
      let isValid =  this.checkValideInput();
      if(isValid === true){
        // api
        this.props.createNewUser(this.state,'abc');
      
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

          <ModalHeader toggle={()=>{this.toggle()}}>Create a new User</ModalHeader>
          <ModalBody>
            <div className="modal-user-body">
                <div className="input-container">
                    <label>Email</label>
                    <input 
                    type="text" 
                    onChange={(event)=> {this.handleOnchageInput(event, "email")}} 
                    value={this.state.email}
                    />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input 
                    type="password" 
                    onChange={(event)=> {this.handleOnchageInput(event, "password")}}
                    value={this.state.password}
                    />
                </div>
                <div className="input-container">
                    <label>FirstName</label>
                    <input 
                    type="text" 
                    onChange={(event)=> {this.handleOnchageInput(event, "firstName" )}} 
                    value={this.state.firstname}
                    />
                </div>
                <div className="input-container">
                    <label>LastName</label>
                    <input 
                    type="text" 
                    onChange={(event)=> {this.handleOnchageInput(event, "lastName")}} 
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
                    onChange={(event)=> {this.handleOnchageInput (event,"phoneNumber")}} 
                    value={this.state.phonenumber}
                    />
                </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button 
            color="primary" 
            className="px-3" 
            onClick={()=>{this.handleAddNewUser() }}
            >Save
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
