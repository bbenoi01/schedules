import { types } from '../../types';
import axios from 'axios';

export function getNbaTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NBA_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nba/scores/json/teams?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('nbaTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NBA_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNbaNews() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NBA_NEWS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nba/scores/json/News?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('hubNews', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NBA_NEWS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNbaFavTeamPlayers(team) {
	return (dispatch) => {
		dispatch({
			type: types.GET_NBA_FAV_TEAM_PLAYERS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nba/scores/json/Players/${team}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('hubPlayers', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NBA_FAV_TEAM_PLAYERS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNbaTeamStats() {
	return (dispatch) => {
		axios
			.get(
				`https://api.sportsdata.io/v3/nba/scores/json/CurrentSeason?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			)
			.then((res) => {
				const season = res.data.Season;
				return season;
			})
			.then((season) => {
				dispatch({
					type: types.GET_NBA_TEAM_STATS_START,
				});
				axios
					.get(
						`https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/${season}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
					)
					.then((res) => {
						localStorage.setItem('hubStats', JSON.stringify(res.data));
						dispatch({
							type: types.GET_NBA_TEAM_STATS_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						if (err.response.data.Code === 401) {
							dispatch({
								type: types.GET_NBA_TEAM_STATS_START,
							});
							axios
								.get(
									`https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/${
										season - 1
									}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
								)
								.then((res) => {
									localStorage.setItem('hubStats', JSON.stringify(res.data));
									dispatch({
										type: types.GET_NBA_TEAM_STATS_SUCCESS,
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

export function getNbaStandings() {
	return (dispatch) => {
		axios
			.get(
				`https://api.sportsdata.io/v3/nba/scores/json/CurrentSeason?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			)
			.then((res) => {
				const season = res.data.Season;
				return season;
			})
			.then((season) => {
				dispatch({
					type: types.GET_NBA_STANDINGS_START,
				});
				axios
					.get(
						`https://api.sportsdata.io/v3/nba/scores/json/Standings/${season}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
					)
					.then((res) => {
						localStorage.setItem('hubStandings', JSON.stringify(res.data));
						dispatch({
							type: types.GET_NBA_STANDINGS_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						if (err.response.data.Code === 401) {
							dispatch({
								type: types.GET_NBA_STANDINGS_START,
							});
							axios
								.get(
									`https://api.sportsdata.io/v3/nba/scores/json/Standings/${
										season - 1
									}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
								)
								.then((res) => {
									localStorage.setItem(
										'hubStandings',
										JSON.stringify(res.data)
									);
									dispatch({
										type: types.GET_NBA_STANDINGS_SUCCESS,
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
