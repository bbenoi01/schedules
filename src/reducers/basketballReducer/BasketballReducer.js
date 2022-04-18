import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	nbaTeams: JSON.parse(sessionStorage.getItem('nbaTeams')) || null,
	nbaTeam: JSON.parse(sessionStorage.getItem('nbaTeam')) || null,
	errors: {},
};

const BasketballReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_NBA_TEAMS_START: {
			return {
				...state,
				isFetching: true,
				nbaTeams: null,
				errors: {},
			};
		}

		case types.GET_NBA_TEAMS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				nbaTeams: payload,
				errors: {},
			};
		}

		case types.GET_NBA_TEAMS_FAILURE: {
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

export default BasketballReducer;
