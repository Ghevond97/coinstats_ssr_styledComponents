import CoinMarketCap from 'coinmarketcap-api';

import { REQUEST_STATS, RECEIVE_STATS, ERROR_STATS } from '../constants';

const apiKey = 'b120973f-2787-4115-9e4f-504eebccdf6a';
const client = new CoinMarketCap(apiKey);

const requestStats = () => {
  return {
    type: REQUEST_STATS
  };
};

const receivedStats = json => {
  return {
    type: RECEIVE_STATS,
    payload: json
  };
};

const errorMessage = error => {
  return { type: ERROR_STATS, payload: error };
};

export const getStats = () => {
  return dispatch => {
    dispatch(requestStats());
    return client
      .getTickers({ limit: 3000 })
      .then(json => dispatch(receivedStats(json.data)))
      .catch(error => dispatch(errorMessage(error)));
  };
};
