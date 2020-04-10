import React, { Component } from 'react';
import { Login } from './Login'
import './App.css';
import { proxy } from './Proxy';
import { Main } from './Main';

export default class App extends Component {
  loggedIn = false;
  render() {
    return (
      <div className="app">
        {this.loggedIn==true ? <Main /> : <Login />}
      </div>
    );
  }
  
  componentDidMount() {
    proxy.addEventListener("login", () =>{this.loggedIn=true;  this.forceUpdate();}, this);
}

componentWillUnmount() {
    proxy.removeAllEventListener(this);
}
}
