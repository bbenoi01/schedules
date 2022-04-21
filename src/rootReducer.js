import { combineReducers } from 'redux';
import FootballReducer from './reducers/footballReducer/FootballReducer';
import BasketballReducer from './reducers/basketballReducer/BasketballReducer';
import BaseballReducer from './reducers/baseballReducer/BaseballReducer';
import HockeyReducer from './reducers/hockeyReducer/HockeyReducer';
import HubReducer from './reducers/hubReducer/HubReducer';

const rootReducer = combineReducers({
	football: FootballReducer,
	basketball: BasketballReducer,
	baseball: BaseballReducer,
	hockey: HockeyReducer,
	hub: HubReducer,
});

export default rootReducer;
