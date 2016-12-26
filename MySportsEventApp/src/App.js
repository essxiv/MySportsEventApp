import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventApp from './EventApp';
import SportsList from './SportsList';
import UserPref from './UserPref';

class App extends Component {
  render() {
    return (
      <EventApp className = "Event-App"/>
    );
  }
}

export default App;

