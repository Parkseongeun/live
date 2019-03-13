import React, { Component } from 'react';
import './css/App.css';
import Crypto from './components/Crypto';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Live Cryptocurrency</h1>
          <p className="countdown">60</p>
          <button type="button" className="button_reload"><span className="for-a11y">Refresh</span></button>
        </header>

        <div className="App_coins">
          <h2>Live Prices <span><span></span>12:20</span></h2>
          <Crypto />
        </div>

        {/* <div className="App_news">
          {this.state.newsList ? this._rendernewsList() : "Loading" }
        </div> */}
      </div>
    )
  }
}

export default App