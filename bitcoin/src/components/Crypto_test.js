import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const dataRealCrypto = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=KRW&api_key=9e03a6c81111584d72793303ce56788f3301c6cd9a3ed36484e1c0703d32385e";
// http://jsonpathfinder.com
// https://github.com/axios/axios

class Crypto extends Component {
  state = {
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderCrypto = () => {
    const BTC = this.state.BTC.map((crypto) =>{
        console.log(crypto)
        return <liveBitcoin 
          PRICE={crypto.title} 
          IMAGEURL={crypto.large_cover_image} 
        />
      })
      return BTC
  }

  _getMovies = async () => {
    const BTC = await this._callApi()
    this.setState({
      BTC
    })
  }

  // fetch(dataRealCrypto)
  // .then(response => response.json())
  // .then(json => console.log(json))
  // .catch(err => console.log(err));

  _callApi = () => {
    return fetch(dataRealCrypto)
    .then(potato => potato.json())
    .then(json => json.DISPLAY.BTC)
    .catch(err => console.log(err))
  }

  render() {
    const {BTC} = this.state;
    return (
      <div className={this.state.BTC ? "App" : "App--loading"}>
          {BTC ? this._renderCrypto() : 'Loading'}
      </div>
    );
  }
}

function liveBitcoin({PRICE, IMAGEURL}){
  return (
    <div className="wrap__bitcoin">
      <div className="box__columns">
        <h1>{PRICE}</h1>
        <img src={IMAGEURL}></img>
      </div>
    </div>
  )
}

liveBitcoin.propTypes = {
  PRICE: PropTypes.string.isRequired,
  IMAGEURL: PropTypes.string.isRequired
}

export default Crypto;