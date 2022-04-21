import { types } from '../../types';
import axios from 'axios';

export function getNflTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NFL_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('nflTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NFL_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNflNews() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NFL_NEWS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nfl/scores/json/News?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('hubNews', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NFL_NEWS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNflFavTeamPlayers(team) {
	return (dispatch) => {
		dispatch({
			type: types.GET_NFL_FAV_TEAM_PLAYERS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nfl/scores/json/Players/${team}?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('hubPlayers', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NFL_FAV_TEAM_PLAYERS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNflTeamStats() {
	return (dispatch) => {
		axios
			.get(
				`https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			)
			.then((res) => {
				const season = res.data;
				return season;
			})
			.then((season) => {
				dispatch({
					type: types.GET_NFL_TEAM_STATS_START,
				});
				axios
					.get(
						`https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/${season}?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
					)
					.then((res) => {
						localStorage.setItem('hubStats', JSON.stringify(res.data));
						dispatch({
							type: types.GET_NFL_TEAM_STATS_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						if (err.response.data.Code === 401) {
							dispatch({
								type: types.GET_NFL_TEAM_STATS_START,
							});
							axios
								.get(
									`https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/${
										season - 1
									}?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
								)
								.then((res) => {
									localStorage.setItem('hubStats', JSON.stringify(res.data));
									dispatch({
										type: types.GET_NFL_TEAM_STATS_SUCCESS,
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

export function getNflStandings() {
	return (dispatch) => {
		axios
			.get(
				`https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			)
			.then((res) => {
				const season = res.data;
				return season;
			})
			.then((season) => {
				dispatch({
					type: types.GET_NFL_STANDINGS_START,
				});
				axios
					.get(
						`https://api.sportsdata.io/v3/nfl/scores/json/Standings/${season}?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
					)
					.then((res) => {
						localStorage.setItem('hubStandings', JSON.stringify(res.data));
						dispatch({
							type: types.GET_NFL_STANDINGS_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						if (err.response.data.Code === 401) {
							dispatch({
								type: types.GET_NFL_STANDINGS_START,
							});
							axios
								.get(
									`https://api.sportsdata.io/v3/nfl/scores/json/Standings/${
										season - 1
									}?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
								)
								.then((res) => {
									localStorage.setItem(
										'hubStandings',
										JSON.stringify(res.data)
									);
									dispatch({
										type: types.GET_NFL_STANDINGS_SUCCESS,
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
