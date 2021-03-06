import React, { Component } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import { Link } from 'react-router-dom'

class Login extends Component {

  handleFacebookLoginResponse = (response) => {
    this.props.onLogin(response)
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            <FacebookLogin socialId="916866548479579"
                         language="en_US"
                         scope="public_profile,email,user_likes"
                         responseHandler={this.handleFacebookLoginResponse}
                         xfbml={true}
                         fields="id,email,name"
                         version="v2.5"
                         className="facebook-login"
                         buttonText="Login With Facebook"/>
          </p>
        </div>
        <div>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </div>
    );
  }
}

export default Login;