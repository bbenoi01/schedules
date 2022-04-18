import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	pgaGolfers: JSON.parse(sessionStorage.getItem('pgaGolfers')) || null,
	pgaGolfer: JSON.parse(sessionStorage.getItem('pgaGolfer')) || null,
	errors: {},
};

const GolfReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_PGA_GOLFERS_START: {
			return {
				...state,
				isFetching: true,
				pgaGolfers: null,
				errors: {},
			};
		}

		case types.GET_PGA_GOLFERS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				pgaGolfers: payload,
				errors: {},
			};
		}

		case types.GET_PGA_GOLFERS_FAILURE: {
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

export default GolfReducer;
