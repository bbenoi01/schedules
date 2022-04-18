import { combineReducers } from 'redux';
import FootballReducer from './reducers/footballReducer/FootballReducer';

const rootReducer = combineReducers({
	football: FootballReducer,
});

export default rootReducer;
