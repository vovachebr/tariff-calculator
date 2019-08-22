import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import History from './components/History/History';
import Tariffs from './components/Tariffs/Tariffs';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-title">Калькулятор ЖКХ</h2>
            <img src={logo} className="App-logo-right" alt="logo" />
            <span className="author right">Created by: vovachebr</span>
          </header>
          <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
              <Route exact path="/history" component={History} />
              <Route exact path="/tariffs" component={Tariffs} />
              <Route path="/notfound" component={NotFound} />
              <Redirect from="" to="/notfound" />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

const mapStateToProps = state => {return {state}};

export default connect(mapStateToProps)(App);