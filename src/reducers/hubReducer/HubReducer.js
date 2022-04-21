import { types } from '../../types';

const INITIAL_STATE = {
	sport: null,
	spread: false,
	nflFav: localStorage.getItem('nflFav') || null,
	nflFavKey: localStorage.getItem('nflFavKey') || null,
	nbaFav: localStorage.getItem('nbaFav') || null,
	nbaFavKey: localStorage.getItem('nbaFavKey') || null,
	mlbFav: localStorage.getItem('mlbFav') || null,
	mlbFavKey: localStorage.getItem('mlbFavKey') || null,
	nhlFav: localStorage.getItem('nhlFav') || null,
	nhlFavKey: localStorage.getItem('nhlFavKey') || null,
	news: JSON.parse(localStorage.getItem('hubNews')) || null,
	players: JSON.parse(localStorage.getItem('hubPlayers')) || null,
	stats: JSON.parse(localStorage.getItem('hubStats')) || null,
	standings: JSON.parse(localStorage.getItem('hubStandings')) || null,
};

const HubReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.SET_NFL_FAVS: {
			return {
				...state,
				nflFav: payload.split(', ')[0],
				nflFavKey: payload.split(', ')[1],
			};
		}

		case types.SET_NBA_FAVS: {
			return {
				...state,
				nbaFav: payload.split(', ')[0],
				nbaFavKey: payload.split(', ')[1],
			};
		}

		case types.SET_MLB_FAVS: {
			return {
				...state,
				mlbFav: payload.split(', ')[0],
				mlbFavKey: payload.split(', ')[1],
			};
		}

		case types.SET_NHL_FAVS: {
			return {
				...state,
				nhlFav: payload.split(', ')[0],
				nhlFavKey: payload.split(', ')[1],
			};
		}

		case types.SET_SPORT: {
			return {
				...state,
				sport: payload,
			};
		}

		case types.SET_SPREAD: {
			return {
				...state,
				spread: payload,
			};
		}

		case types.GET_NFL_NEWS_START: {
			return {
				...state,
				isFetching: true,
				news: null,
				errors: {},
			};
		}

		case types.GET_NFL_NEWS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				news: payload,
				errors: {},
			};
		}

		case types.GET_NFL_NEWS_FAILURE: {
			return {
				...state,
				isFetching: false,
				news: null,
				errors: payload,
			};
		}

		case types.GET_NBA_NEWS_START: {
			return {
				...state,
				isFetching: true,
				news: null,
				errors: {},
			};
		}

		case types.GET_NBA_NEWS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				news: payload,
				errors: {},
			};
		}

		case types.GET_NBA_NEWS_FAILURE: {
			return {
				...state,
				isFetching: false,
				errors: payload,
			};
		}

		case types.GET_MLB_NEWS_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_MLB_NEWS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				news: payload,
				errors: {},
			};
		}

		case types.GET_MLB_NEWS_FAILURE: {
			return {
				...state,
				isFetching: false,
				news: null,
				errors: payload,
			};
		}

		case types.GET_NHL_NEWS_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_NHL_NEWS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				news: payload,
				errors: {},
			};
		}

		case types.GET_NHL_NEWS_FAILURE: {
			return {
				...state,
				isFetching: false,
				news: null,
				errors: payload,
			};
		}

		case types.CLEAR_HUB_NEWS: {
			return {
				...state,
				news: null,
			};
		}

		case types.GET_NFL_FAV_TEAM_PLAYERS_START: {
			return {
				...state,
				isFetching: true,
				players: null,
				errors: {},
			};
		}

		case types.GET_NFL_FAV_TEAM_PLAYERS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				players: payload,
				errors: {},
			};
		}

		case types.GET_NFL_FAV_TEAM_PLAYERS_FAILURE: {
			return {
				...state,
				isFetching: false,
				players: null,
				errors: payload,
			};
		}

		case types.GET_NBA_FAV_TEAM_PLAYERS_START: {
			return {
				...state,
				isFetching: true,
				players: null,
				errors: {},
			};
		}

		case types.GET_NBA_FAV_TEAM_PLAYERS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				players: payload,
				errors: {},
			};
		}

		case types.GET_NBA_FAV_TEAM_PLAYERS_FAILURE: {
			return {
				...state,
				isFetching: false,
				players: null,
				errors: payload,
			};
		}

		case types.GET_MLB_FAV_TEAM_PLAYERS_START: {
			return {
				...state,
				isFetching: true,
				players: null,
				errors: {},
			};
		}

		case types.GET_MLB_FAV_TEAM_PLAYERS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				players: payload,
				errors: {},
			};
		}

		case types.GET_MLB_FAV_TEAM_PLAYERS_FAILURE: {
			return {
				...state,
				isFetching: false,
				players: null,
				errors: payload,
			};
		}

		case types.GET_NHL_FAV_TEAM_PLAYERS_START: {
			return {
				...state,
				isFetching: true,
				players: null,
				errors: {},
			};
		}

		case types.GET_NHL_FAV_TEAM_PLAYERS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				players: payload,
				errors: {},
			};
		}

		case types.GET_NHL_FAV_TEAM_PLAYERS_FAILURE: {
			return {
				...state,
				isFetching: false,
				players: null,
				errors: payload,
			};
		}

		case types.GET_NFL_TEAM_STATS_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_NFL_TEAM_STATS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				stats: payload,
				errors: {},
			};
		}

		case types.GET_NFL_TEAM_STATS_FAILURE: {
			return {
				...state,
				isFetching: false,
				stats: null,
				errors: payload,
			};
		}

		case types.GET_NBA_TEAM_STATS_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_NBA_TEAM_STATS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				stats: payload,
				errors: {},
			};
		}

		case types.GET_NBA_TEAM_STATS_FAILURE: {
			return {
				...state,
				isFetching: false,
				stats: null,
				errors: payload,
			};
		}

		case types.GET_MLB_TEAM_STATS_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_MLB_TEAM_STATS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				stats: payload,
				errors: {},
			};
		}

		case types.GET_MLB_TEAM_STATS_FAILURE: {
			return {
				...state,
				isFetching: false,
				stats: null,
				errors: payload,
			};
		}

		case types.GET_NHL_TEAM_STATS_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_NHL_TEAM_STATS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				stats: payload,
				errors: {},
			};
		}

		case types.GET_NHL_TEAM_STATS_FAILURE: {
			return {
				...state,
				isFetching: false,
				stats: null,
				errors: payload,
			};
		}

		case types.GET_NFL_STANDINGS_START: {
			return {
				...state,
				isFetching: true,
				standings: null,
				errors: {},
			};
		}

		case types.GET_NFL_STANDINGS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				standings: payload,
				errors: {},
			};
		}

		case types.GET_NFL_STANDINGS_FAILURE: {
			return {
				...state,
				isFetching: false,
				standings: null,
				errors: payload,
			};
		}

		case types.GET_NBA_STANDINGS_START: {
			return {
				...state,
				isFetching: true,
				standings: null,
				errors: {},
			};
		}

		case types.GET_NBA_STANDINGS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				standings: payload,
				errors: {},
			};
		}

		case types.GET_NBA_STANDINGS_FAILURE: {
			return {
				...state,
				isFetching: false,
				standings: null,
				errors: payload,
			};
		}

		case types.GET_MLB_STANDINGS_START: {
			return {
				...state,
				isFetching: true,
				standings: null,
				errors: {},
			};
		}

		case types.GET_MLB_STANDINGS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				standings: payload,
				errors: {},
			};
		}

		case types.GET_MLB_STANDINGS_FAILURE: {
			return {
				...state,
				isFetching: false,
				standings: null,
				errors: payload,
			};
		}

		case types.GET_NHL_STANDINGS_START: {
			return {
				...state,
				isFetching: true,
				standings: null,
				errors: {},
			};
		}

		case types.GET_NHL_STANDINGS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				standings: payload,
				errors: {},
			};
		}

		case types.GET_NHL_STANDINGS_FAILURE: {
			return {
				...state,
				isFetching: false,
				standings: null,
				errors: payload,
			};
		}

		default:
			return state;
	}
};

export default HubReducer;
