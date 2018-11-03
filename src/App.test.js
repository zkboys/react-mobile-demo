import React from 'react';
import ReactDOM from 'react-dom';
import App from './App1xx11';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
