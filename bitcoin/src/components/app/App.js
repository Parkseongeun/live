import React, { Component } from 'react';
import LivePrices from '../prices/Prices';
import * as api from './lib/api';

class App extends Component {
  getAPOD = async (date) => {
    try {
      const response = await api.getAPOD(date);
      console.log(response);
    } catch (e) {
      // 오류가 났을 경우
      console.log(e);
    }
  }
  componentDidMount() {
    this.getAPOD();
  }
  

  render() {
    return (
      <div>
        <h1>LIVE CRYPTOCURRENCY</h1>
        <LivePrices/>
      </div>
    );
  }
}

export default App;
