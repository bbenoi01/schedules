import { types } from '../../types';
import axios from 'axios';

export function getMlsTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_MLS_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/soccer/scores/json/Teams?key=${process.env.REACT_APP_SOCCER_API_KEY_}`
			)
			.then((res) => {
				sessionStorage.setItem('mlsTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_MLS_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
