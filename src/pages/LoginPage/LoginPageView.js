import React, { Component } from 'react'
// import PrimaryButton from '../../component/PrimaryButton'
// import PrimaryInput from '../../component/PrimaryInput'
import { HashLink as Link} from 'react-router-hash-link';

export default class LoginPageView extends Component {
    render() {
        const { email, password, error } = this.props.state;
        return (
            <div>
                <div className="login-box">
                <div className="login-logo">
                    <a href="#"><b>Mirai</b> Journal</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form id="quickForm" onSubmit={this.props.method.submit}>
                        {/* <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div> */}
                        {/* <PrimaryInput
                            groupClass ="input-group mb-3" 
                            type = "email"
                            value = {email}
                            name = "email"
                            onChange = {this.props.method.inputChange}
                            placeholder = "Email"
                            icon = "fas fa-envelope"
                        />
                        <PrimaryInput
                            groupClass ="input-group mb-3" 
                            type = "password"
                            value = {password}
                            name = "password"
                            onChange = {this.props.method.inputChange}
                            placeholder = "Password"
                            icon = "fas fa-lock"
                        /> */}
                        <div className="row">
                        {/* <PrimaryButton
                            class="col-12"
                            title="Masuk"
                        /> */}
                        </div>
                    </form>
                    <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                        </a>
                    </div>
                    {/* /.social-auth-links */}
                    <div>
                        <p className="mb-1">
                            <a href="#">Lupa Password</a>
                        </p>
                        <p className="mb-0">
                            <Link to='/Register' className="text-center" replace>Daftarkan Akun</Link>
                        </p>
                    </div>

                    </div>
                    {/* /.login-card-body */}
                </div>
                </div>

            </div>
        )
    }
}
