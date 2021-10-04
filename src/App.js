import './App.css';
import React from 'react';
import {MainRouter} from './system/Router';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div style={{backgroundColor : "#F5F5F5"}}>
      <MainRouter/>
    </div>
  );
}

export default App;
if (document.getElementById('root_app')) {
  ReactDOM.render(<App />, document.getElementById('root_app'));
}