import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store/store";
import {Provider} from "react-redux";
import DialogMessage from "./Components/DialogMessage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <DialogMessage/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
