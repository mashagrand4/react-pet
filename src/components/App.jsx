import React, { Fragment, Component } from 'react';
// import {Switch, Route, Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import List from './List';

export default class App extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <div />
        <div />
        <List />
      </>
    );
  }
}
