import React from 'react';
import './App.css';
import Button from './Components/Button';
import {  isEmpty } from 'lodash'

const App = () => {
  return (
    <div className="App">
      <div className="button-container">
          <Button title={`+ File`} />
          <Button title={`+ Folder`} />
      </div>
    </div>
  );
}

export default App;
