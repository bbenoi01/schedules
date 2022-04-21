import { types } from '../../types';
import axios from 'axios';

export function getNhlTeams() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NHL_TEAMS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nhl/scores/json/teams?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('nhlTeams', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NHL_TEAMS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNhlNews() {
	return (dispatch) => {
		dispatch({
			type: types.GET_NHL_NEWS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nhl/scores/json/News?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('hubNews', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NHL_NEWS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNhlFavTeamPlayers(team) {
	return (dispatch) => {
		dispatch({
			type: types.GET_NHL_FAV_TEAM_PLAYERS_START,
		});
		axios
			.get(
				`https://api.sportsdata.io/v3/nhl/scores/json/Players/${team}?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			)
			.then((res) => {
				localStorage.setItem('hubPlayers', JSON.stringify(res.data));
				dispatch({
					type: types.GET_NHL_FAV_TEAM_PLAYERS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function getNhlTeamStats() {
	return (dispatch) => {
		axios
			.get(
				`https://api.sportsdata.io/v3/nhl/scores/json/CurrentSeason?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			)
			.then((res) => {
				const season = res.data.Season;
				return season;
			})
			.then((season) => {
				dispatch({
					type: types.GET_NHL_TEAM_STATS_START,
				});
				axios
					.get(
						`https://api.sportsdata.io/v3/nhl/scores/json/TeamSeasonStats/${season}?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
					)
					.then((res) => {
						localStorage.setItem('hubStats', JSON.stringify(res.data));
						dispatch({
							type: types.GET_NHL_TEAM_STATS_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						if (err.response.data.Code === 401) {
							dispatch({
								type: types.GET_NHL_TEAM_STATS_START,
							});
							axios
								.get(
									`https://api.sportsdata.io/v3/nhl/scores/json/TeamSeasonStats/${
										season - 1
									}?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
								)
								.then((res) => {
									localStorage.setItem('hubStats', JSON.stringify(res.data));
									dispatch({
										type: types.GET_NHL_TEAM_STATS_SUCCESS,
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

export function getNhlStandings() {
	return (dispatch) => {
		axios
			.get(
				`https://api.sportsdata.io/v3/nhl/scores/json/CurrentSeason?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			)
			.then((res) => {
				const season = res.data.Season;
				return season;
			})
			.then((season) => {
				dispatch({
					type: types.GET_NHL_STANDINGS_START,
				});
				axios
					.get(
						`https://api.sportsdata.io/v3/nhl/scores/json/Standings/${season}?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
					)
					.then((res) => {
						localStorage.setItem('hubStandings', JSON.stringify(res.data));
						dispatch({
							type: types.GET_NHL_STANDINGS_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						if (err.response.data.Code === 401) {
							dispatch({
								type: types.GET_NHL_STANDINGS_START,
							});
							axios
								.get(
									`https://api.sportsdata.io/v3/nhl/scores/json/Standings/${
										season - 1
									}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
								)
								.then((res) => {
									localStorage.setItem(
										'hubStandings',
										JSON.stringify(res.data)
									);
									dispatch({
										type: types.GET_NHL_STANDINGS_SUCCESS,
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
