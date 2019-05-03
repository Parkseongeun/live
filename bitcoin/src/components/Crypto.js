import React, { Component } from "react";
import axios from "axios";

const dataRealCrypto = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=KRW&api_key=9e03a6c81111584d72793303ce56788f3301c6cd9a3ed36484e1c0703d32385e";
// http://jsonpathfinder.com
// https://github.com/axios/axios

class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realCrypto: {
        BTC : 0,
        ETH : 0
      }
    }
  }
  
  componentDidMount(){
    this.funcCrypto();
  }

  funcCrypto = async () => {
    axios.get(dataRealCrypto)
    .then(response => {
      const obj = Object.keys(this.realCrypto)
      for (var i = 0; i < obj.length; i++) {
      this.realCrypto[obj[i]] =
        response.data.DISPLAY[obj[i]].KRW.PRICE
      }
    })
    .catch(err => console.log(err))
    
    this.setState({
      realCrypto: {
        BTC : PRICE.BTC,
        ETH : PRICE.ETH
      }
    })
  }

  // fetch(dataRealCrypto)
  // .then(response => response.json())
  // .then(json => console.log(json))
  // .catch(err => console.log(err));

  render() {
    const { realCrypto } = this.state;
    console.log(dataRealCrypto)
    if (realCrypto.length > 0) {
      return realCrypto.map(realCrypto => {
        return (
          <div>
            <p>BTC : {realCrypto.BTC}</p>
            <p>ETH : {realCrypto.ETH}</p>
          </div>
        );
      });
    } else {
      return 'error';
    }
  }
}

export default Crypto;