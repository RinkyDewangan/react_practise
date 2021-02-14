import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloFromPureComponent from './HelloFromPureComponent';
import HelloFromFunctionComponent from './HelloFromFunctionComponent';
import HelloFromElement from './HelloFromElement'

class Hello extends React.Component {
  render() {
    return(<div>
              <div>Hello World</div>
              <HelloFromElement />
              <HelloFromPureComponent />
              <HelloFromFunctionComponent />
            </div>
          );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
