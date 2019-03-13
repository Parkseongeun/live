import React, {Component} from 'react';
import axios from 'axios';

/* eslint-disable no-unused-expressions */
class Crypto extends Component {

  constructor(props) {
    super(props); //부모클래스 super
    this.state = {
      livePrice: {
          BTC: false,
          ETH: false,
          XRP: false
      },
      liveRatio: {
          BTC: false,
          ETH: false,
          XRP: false
      }
    }
  }

  componentDidMount() {
    this._callApi();
    this.interval = setInterval(() => this._callApi(), 60 * 1000);
  }

  _getApi = async () => {
    const currency = await this._callApi()
    this.setState({
      currency
    })
  }
  _callApi = () => {
    axios
    .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=KRW&api_key=9e03a6c81111584d72793303ce56788f3301c6cd9a3ed36484e1c0703d32385e')
    .then(json => console.log(json))
    .then(response => {
      const result = response.data.filter(currency =>
        wanted.includes(currency.id),
      )
      this.setState = {
        livePrice: {
          BTC: price.BTC,
          ETH: price.ETH,
          XRP: price.XRP
        },
        liveRatio: {
          BTC: price.BTC,
          ETH: price.ETH,
          XRP: price.XRP
        }
      }
    }).catch(err => console.log(err))
   }


  render() { 
    const Currency = props => {
      const {
        name,
        symbol,
        price_usd,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
      } = props.data
      return (
        <li className="currency">
          <p className="currency-name">
            {name} ({symbol})
          </p>
          <h1>${(+price_usd).toFixed(2)}</h1>
          <p>{percent_change_1h}% 1hr</p>
          <p>{percent_change_24h}% 24hrs</p>
          <p>{percent_change_7d}% 7days</p>
        </li>
      )
    }
    
    let crypto = this.state.data.map(currency => ( // map() 업데이트해야할 항목을 추적
      <Currency data={currency} key={currency.id} />
    ))
    return (
      <div className="crypto-container">
        <ul className="crypto">{crypto}</ul>
      </div>
    )
  }
}

export default Crypto