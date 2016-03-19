import React from 'react';
import { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>TDD</h1>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
