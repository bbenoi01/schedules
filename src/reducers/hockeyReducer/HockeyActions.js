import { types } from '../../types';
import axios from 'axios';

export function getNhlTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NHL_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nhl/scores/json/teams?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			)
			.then((res) => {
				sessionStorage.setItem('nhlTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NHL_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
