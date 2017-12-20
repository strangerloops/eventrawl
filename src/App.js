import React, { Component } from 'react';
import Login from './scenes/Login';
import Calendar from './scenes/Calendar';
import GraphAPI from './services/graph_api';
import './App.css';

class App extends Component {

  state = {};

  loginHandler = (response) => {

    GraphAPI.config.userId      = response.id;
    GraphAPI.config.accessToken = response.accessToken;

    this.setState({
      accessToken: response.accessToken,
      userId: response.id
    })
  }

  render() {
    if(this.state.accessToken){
      return(
        <Calendar />
      );  
    } else {
      return(
        <Login onLogin={this.loginHandler} />
      );  
    }
  }
}

export default App;
