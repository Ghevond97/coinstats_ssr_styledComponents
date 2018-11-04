import { combineReducers } from 'redux';

import { requestStatus, stats } from './fetchStats';

const rootReducer = combineReducers({ stats, requestStatus });

export default rootReducer;
