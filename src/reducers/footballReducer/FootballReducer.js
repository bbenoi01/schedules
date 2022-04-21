import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	nflTeams: JSON.parse(localStorage.getItem('nflTeams')) || null,
	nflTeam: JSON.parse(localStorage.getItem('nflTeam')) || null,
	errors: {},
};

const FootballReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_NFL_TEAMS_START: {
			return {
				...state,
				isFetching: true,
				nflTeams: null,
				errors: null,
			};
		}

		case types.GET_NFL_TEAMS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				nflTeams: payload,
				errors: {},
			};
		}

		case types.GET_NFL_TEAMS_FAILURE: {
			return {
				...state,
				isFetching: false,
				nflTeams: null,
				errors: payload,
			};
		}

		default:
			return state;
	}
};

export default FootballReducer;
