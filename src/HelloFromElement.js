import React from 'react';
const e = React.createElement;

export default class HelloFromElement extends React.Component {
    render() {
      return e('div', null, 'Hello World');
    }
  }
  