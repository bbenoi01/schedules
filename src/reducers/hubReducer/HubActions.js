import { types } from '../../types';

export function setSport(value) {
	return (dispatch) => {
		dispatch({
			type: types.SET_SPORT,
			payload: value,
		});
	};
}

export function setSpread(value) {
	return (dispatch) => {
		dispatch({
			type: types.SET_SPREAD,
			payload: value,
		});
	};
}

export function clearHubNews() {
	return (dispatch) => {
		localStorage.removeItem('hubNews');
		dispatch({
			type: types.CLEAR_HUB_NEWS,
		});
	};
}

export function setFavs(sport, value) {
	return (dispatch) => {
		if (sport === 'football') {
			localStorage.setItem('nflFav', value.split(', ')[0]);
			localStorage.setItem('nflFavKey', value.split(', ')[1]);
			dispatch({
				type: types.SET_NFL_FAVS,
				payload: value,
			});
		} else if (sport === 'basketball') {
			localStorage.setItem('nbaFav', value.split(', ')[0]);
			localStorage.setItem('nbaFavKey', value.split(', ')[1]);
			dispatch({
				type: types.SET_NBA_FAVS,
				payload: value,
			});
		} else if (sport === 'baseball') {
			localStorage.setItem('mlbFav', value.split(', ')[0]);
			localStorage.setItem('mlbFavKey', value.split(', ')[1]);
			dispatch({
				type: types.SET_MLB_FAVS,
				payload: value,
			});
		} else if (sport === 'hockey') {
			localStorage.setItem('nhlFav', value.split(', ')[0]);
			localStorage.setItem('nhlFavKey', value.split(', ')[1]);
			dispatch({
				type: types.SET_NHL_FAVS,
				payload: value,
			});
		}
	};
}
