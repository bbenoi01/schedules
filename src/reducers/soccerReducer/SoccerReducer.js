import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	mlsTeams: JSON.parse(sessionStorage.getItem('mlsTeams')) || null,
	mlsTeam: JSON.parse(sessionStorage.getItem('mlsTeam')) || null,
	errors: {},
};

const SoccerReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_MLS_TEAMS_START: {
			return {
				...state,
				isFetching: true,
				mlsTeams: null,
				errors: {},
			};
		}

		case types.GET_MLS_TEAMS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				mlsTeams: payload,
				errors: {},
			};
		}

		case types.GET_MLS_TEAMS_FAILURE: {
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

export default SoccerReducer;
