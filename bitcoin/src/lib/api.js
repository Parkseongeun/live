import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR`);
}