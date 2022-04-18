import { combineReducers } from 'redux';
import FootballReducer from './reducers/footballReducer/FootballReducer';
import BasketballReducer from './reducers/basketballReducer/BasketballReducer';
import BaseballReducer from './reducers/baseballReducer/BaseballReducer';
import HockeyReducer from './reducers/hockeyReducer/HockeyReducer';
import SoccerReducer from './reducers/soccerReducer/SoccerReducer';
import GolfReducer from './reducers/golfReducer/GolfReducers';

const rootReducer = combineReducers({
	football: FootballReducer,
	basketball: BasketballReducer,
	baseball: BaseballReducer,
	hockey: HockeyReducer,
	soccer: SoccerReducer,
	golf: GolfReducer,
});

export default rootReducer;
