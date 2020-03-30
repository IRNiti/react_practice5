import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
  	displayText: ''
  }

  updateDisplayText = (inputText) => {
  	this.setState(() =>({
  		displayText: inputText.trim()
  	}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
    		type="text" 
    		value={this.state.displayText} 
			placeholder="Say Something" 
			onChange={(event) => this.updateDisplayText(event.target.value)}/>
          <p className="echo">Echo: {this.state.displayText}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
