import { types } from '../../types';
import axios from 'axios';

export function getNbaTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NBA_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nba/scores/json/teams?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			)
			.then((res) => {
				sessionStorage.setItem('nbaTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NBA_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNbaNews() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NBA_NEWS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nba/scores/json/News?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			)
			.then((res) => {
				sessionStorage.setItem('nbaNews', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NBA_NEWS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
