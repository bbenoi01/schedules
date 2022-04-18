import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	nhlTeams: JSON.parse(sessionStorage.getItem('nhlTeams')) || null,
	nhlTeam: JSON.parse(sessionStorage.getItem('nhlTeam')) || null,
	errors: {},
};

const HockeyReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_NHL_TEAMS_START: {
			return {
				...state,
				isFetching: true,
				nhlTeams: null,
				errors: {},
			};
		}

		case types.GET_NHL_TEAMS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				nhlTeams: payload,
				errors: {},
			};
		}

		case types.GET_NHL_TEAMS_FAILURE: {
			return {
				...state,
				isFetching: false,
				errors: payload,
			};
		}

		default:
			return state;
	}
};

export default HockeyReducer;
