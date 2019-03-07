import React, { Component } from 'react';
import './App.css';
import News from './News';


class App extends Component {

  state ={

  }
  
  componentDidMount(){
   this._getnewsList();
  }

  _rendernewsList = () => {
    const newsList = this.state.newsList.map((news, index) => {
      return <News title={news.title} thmb={news.imageurl} key={index} />
    })
    return newsList
  }

_getnewsList = async () => {
    const newsList = await this._callApi()
    this.setState({
      newsList
    })
  }

  _callApi = () => {
    return fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
    .then(response => response.json())
    .then(json => console.log(json))
    .then(json => json.data.newsList)
    .catch(err => console.log(err))
  }

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
          
        </div>

        <div className="App_news">
          {this.state.newsList ? this._rendernewsList() : "Loading" }
        </div>
      </div>
    );
  }
}

export default App;