import { types } from '../../types';
import axios from 'axios';

export function getMlbTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_MLB_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/mlb/scores/json/teams?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			)
			.then((res) => {
				sessionStorage.setItem('mlbTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_MLB_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
