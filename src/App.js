import React, { Component } from 'react';
import Login from './scenes/Login';
import Calendar from './scenes/Calendar';
import Privacy from './scenes/Privacy'
import GraphAPI from './services/GraphAPI';
import { Switch, Route } from 'react-router-dom'
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

    const login    = () => { return (<Login onLogin={this.loginHandler} />) }
    const calendar = () => { return (<Calendar />) }
    const rootComponent = this.state.accessToken ? calendar : login

    return(
      <Switch>
        <Route exact path='/'        render={rootComponent}/>
        <Route exact path='/privacy' component={Privacy}/>
      </Switch>
    )
  }
}

export default App;
