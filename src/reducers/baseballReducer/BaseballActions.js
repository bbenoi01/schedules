import { types } from '../../types';
import axios from 'axios';

export function getMlbTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_MLB_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/mlb/scores/json/teams?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('mlbTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_MLB_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getMlbNews() {
	return (dispatch) => {
		dispatch({
			type: types.GET_MLB_NEWS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/mlb/scores/json/News?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('hubNews', JSON.stringify(res.data));
				dispatch({
					type: types.GET_MLB_NEWS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getMlbFavTeamPlayers(team) {
	return (dispatch) => {
		dispatch({
			type: types.GET_MLB_FAV_TEAM_PLAYERS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/mlb/scores/json/Players/${team}?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('hubPlayers', JSON.stringify(res.data));
				dispatch({
					type: types.GET_MLB_FAV_TEAM_PLAYERS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getMlbTeamStats() {
	return (dispatch) => {
		axios
			.get(
				`https://api.sportsdata.io/v3/mlb/scores/json/CurrentSeason?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			)
			.then((res) => {
				const season = res.data.Season;
				return season;
			})
			.then((season) => {
				dispatch({
					type: types.GET_MLB_TEAM_STATS_START,
				});
				axios
					.get(
						`https://api.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/${season}?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
					)
					.then((res) => {
						localStorage.setItem('hubStats', JSON.stringify(res.data));
						dispatch({
							type: types.GET_MLB_TEAM_STATS_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						if (err.response.data.Code === 401) {
							dispatch({
								type: types.GET_MLB_TEAM_STATS_START,
							});
							axios
								.get(
									`https://api.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/${
										season - 1
									}?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
								)
								.then((res) => {
									localStorage.setItem('hubStats', JSON.stringify(res.data));
									dispatch({
										type: types.GET_MLB_TEAM_STATS_SUCCESS,
										payload: res.data,
									});
								})
								.catch((err) => {
									console.log(err);
								});
						}
					});
			});
	};
}

export function getMlbStandings() {
	return (dispatch) => {
		axios
			.get(
				`https://api.sportsdata.io/v3/mlb/scores/json/CurrentSeason?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			)
			.then((res) => {
				const season = res.data.Season;
				return season;
			})
			.then((season) => {
				dispatch({
					type: types.GET_MLB_STANDINGS_START,
				});
				axios
					.get(
						`https://api.sportsdata.io/v3/mlb/scores/json/Standings/${season}?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
					)
					.then((res) => {
						localStorage.setItem('hubStandings', JSON.stringify(res.data));
						dispatch({
							type: types.GET_MLB_STANDINGS_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						if (err.response.data.Code === 401) {
							dispatch({
								type: types.GET_MLB_STANDINGS_START,
							});
							axios
								.get(
									`https://api.sportsdata.io/v3/mlb/scores/json/Standings/${
										season - 1
									}?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
								)
								.then((res) => {
									localStorage.setItem(
										'hubStandings',
										JSON.stringify(res.data)
									);
									dispatch({
										type: types.GET_MLB_STANDINGS_SUCCESS,
										payload: res.data,
									});
								})
								.catch((err) => {
									console.log(err);
								});
						}
					});
			});
	};
}
