import React, { Component, Fragment } from 'react';
import Search from './Search';
import Songs from './Songs';
import Lyrics from './Lyrics';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Find a Song</h1>
        <Search/>
        <Songs/>
        <Lyrics/>
      </Fragment>
    );
  }
}
