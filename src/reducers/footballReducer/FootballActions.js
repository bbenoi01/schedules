import { types } from '../../types';
import axios from 'axios';

export function getNflTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NFL_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			)
			.then((res) => {
				sessionStorage.setItem('nflTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NFL_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
