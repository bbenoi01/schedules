import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	mlbTeams: JSON.parse(sessionStorage.getItem('mlbTeams')) || null,
	mlbTeam: JSON.parse(sessionStorage.getItem('mlbTeam')) || null,
	errors: {},
};

const BaseballReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_MLB_TEAMS_START: {
			return {
				...state,
				isFetching: true,
				mlbTeams: null,
				errors: {},
			};
		}

		case types.GET_MLB_TEAMS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				mlbTeams: payload,
				errors: {},
			};
		}

		case types.GET_MLB_TEAMS_FAILURE: {
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

export default BaseballReducer;
