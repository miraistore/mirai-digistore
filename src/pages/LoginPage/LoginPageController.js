import React, { Component } from 'react'
import LoginPageView from './LoginPageView'
import {auth} from '../../helper/FirebaseHelper'

export default class LoginPageController extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
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
        const { email, password } = this.state;
        if (email === '' || password ===''){
          alert("Email atau password tidak boleh kosong!");
        }else{
            auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
              this.props.history.push('/Home');
            })
            .catch((error) => {
              this.setState({ error: error });
              alert(this.state.error);
            });
        }
        
      };

    render() {
        return (
            <div>
               <LoginPageView state={this.state} method={this.method} /> 
            </div>
        )
    }
}
