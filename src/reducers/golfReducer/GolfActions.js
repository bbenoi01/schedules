import { types } from '../../types';
import axios from 'axios';

export function getPgaGolfers() {
	return (dispatch) => {
		dispatch({
			type: types.GET_PGA_GOLFERS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/golf/v2/json/Players?key=${process.env.REACT_APP_GOLF_API_KEY_}`
			)
			.then((res) => {
				sessionStorage.setItem('pgaGolfers', JSON.stringify(res.data));
				dispatch({
					type: types.GET_PGA_GOLFERS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
