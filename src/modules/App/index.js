import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GamesPage from '../Game/pages/GamesPage';
import GamePage from '../Game/pages/GamePage';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/games/:platform?" component={GamesPage} />
            <Route exact path="/games/:platform/:slug" component={GamePage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
