import React, { Component } from "react";
import axios from "axios";

const dataRealCrypto = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR&api_key=9e03a6c81111584d72793303ce56788f3301c6cd9a3ed36484e1c0703d32385e";
//http://jsonpathfinder.com/
//https://github.com/axios/axios
class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      realCrypto: [] 
    };
  }

  async componentDidMount() {
    let getNumber = () => {
      axios.get('/counter').then(response => {
         this.props.onReceive(response.data.number);
          setTimeout(getNumber, 1000 * 5); // REPEAT THIS EVERY 5 SECONDS
      });

  }
    let realCrypto = await axios.get(dataRealCrypto);
    console.log(realCrypto)
    this.setState({ realCrypto });
  }

  render() {
    const { realCrypto } = this.state;

    if (realCrypto.length > 0) {
      return realCrypto.map(crypto => {
        return (
          <div key={crypto.TYPE}>
            <p>BTC : {crypto.BTC}</p>
            <p>ETH : {crypto.ETH}</p>
            <p>XRP : {crypto.XRP}</p>
          </div>
        );
      });
    } else {
      return <h3>No realCrypto</h3>;
    }
  }
}

export default Crypto;