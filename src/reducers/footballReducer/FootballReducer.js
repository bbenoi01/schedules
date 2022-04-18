import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	teams: JSON.parse(sessionStorage.getItem('nflTeams')) || null,
	team: JSON.parse(sessionStorage.getItem('nflTeam')) || null,
	errors: {},
};

const FootballReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_NFL_TEAMS_START: {
			return {
				...state,
				isFetching: true,
				teams: null,
				errors: null,
			};
		}

		case types.GET_NFL_TEAMS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				teams: payload,
				errors: {},
			};
		}

		case types.GET_NFL_TEAMS_FAILURE: {
			return {
				...state,
				isFetching: false,
				teams: null,
				errors: payload,
			};
		}
		default:
			return state;
	}
};

export default FootballReducer;
