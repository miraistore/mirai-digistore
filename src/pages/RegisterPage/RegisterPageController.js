import React, { Component,useRef } from 'react'
import RegisterPageView from './RegisterPageView'
import {auth} from '../../helper/FirebaseHelper'

export default class RegisterPageController extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            passwordVerif : '',
            error : null
        }
        this.method = {
            inputChange : this.handleInputChange.bind(this),
            submit : this.handleSubmit.bind(this)
        }
    
        document.body.classList.add('hold-transition','login-page');
        
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password,passwordVerif } = this.state;
        if (email === '' || password ===''){
          alert("Email atau password tidak boleh kosong!");
        }else{
          if(passwordVerif === password){
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              this.props.history.push('/');
            })
            .catch((error) => {
              this.setState({ error: error });
              alert(this.state.error);
            });
          }else{
            alert("Password Tidak Sama!");
          }
        }
        
      };

    render() {
        return (
            <div>
               <RegisterPageView state ={this.state} method={this.method} /> 
            </div>
        )
    }
}
