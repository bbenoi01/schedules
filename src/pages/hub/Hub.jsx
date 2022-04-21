import { useEffect } from 'react';
import { connect } from 'react-redux';
import TeamSelect from '../../components/teamSelect/TeamSelect';
import NewsLg from '../../components/newsLg/NewsLg';
import StatsLg from '../../components/statsLg/StatsLg';
import PlayersLg from '../../components/playersLg/PlayersLg';
import StandingsLg from '../../components/standingsLg/StandingsLg';
import './hub.scss';

import {
	getNflTeams,
	getNflNews,
	getNflFavTeamPlayers,
	getNflTeamStats,
	getNflStandings,
} from '../../reducers/footballReducer/FootballActions';
import {
	getNbaTeams,
	getNbaNews,
	getNbaFavTeamPlayers,
	getNbaTeamStats,
	getNbaStandings,
} from '../../reducers/basketballReducer/BasketballActions';
import {
	getMlbTeams,
	getMlbNews,
	getMlbFavTeamPlayers,
	getMlbTeamStats,
	getMlbStandings,
} from '../../reducers/baseballReducer/BaseballActions';
import {
	getNhlTeams,
	getNhlNews,
	getNhlFavTeamPlayers,
	getNhlTeamStats,
	getNhlStandings,
} from '../../reducers/hockeyReducer/HockeyActions';
import {
	setFavs,
	setSport,
	setSpread,
	clearHubNews,
} from '../../reducers/hubReducer/HubActions';

const Hub = ({
	spread,
	dispatch,
	nflTeams,
	nbaTeams,
	mlbTeams,
	nhlTeams,
	nflFav,
	nflKey,
	nbaFav,
	nbaKey,
	mlbFav,
	mlbKey,
	nhlFav,
	nhlKey,
	news,
	players,
	stats,
	standings,
}) => {
	const handleChange = (e, sport) => {
		dispatch(setFavs(sport, e.target.value));
	};

	const handleClick = (sport) => {
		if (spread === false) {
			if (sport === 'football') {
				dispatch(getNflNews());
				dispatch(getNflFavTeamPlayers(nflKey));
				dispatch(getNflTeamStats());
				dispatch(getNflStandings());
			} else if (sport === 'basketball') {
				dispatch(getNbaNews());
				dispatch(getNbaFavTeamPlayers(nbaKey));
				dispatch(getNbaTeamStats());
				dispatch(getNbaStandings());
			} else if (sport === 'baseball') {
				dispatch(getMlbNews());
				dispatch(getMlbFavTeamPlayers(mlbKey));
				dispatch(getMlbTeamStats());
				dispatch(getMlbStandings());
			} else if (sport === 'hockey') {
				dispatch(getNhlNews());
				dispatch(getNhlFavTeamPlayers(nhlKey));
				dispatch(getNhlTeamStats());
				dispatch(getNhlStandings());
			}
			dispatch(setSport(sport));
			dispatch(setSpread(!spread));
		} else {
			dispatch(setSpread(!spread));
			dispatch(clearHubNews());
		}
	};

	useEffect(() => {
		if (!nflTeams) {
			dispatch(getNflTeams());
		}
		if (!nbaTeams) {
			dispatch(getNbaTeams());
		}
		if (!mlbTeams) {
			dispatch(getMlbTeams());
		}
		if (!nhlTeams) {
			dispatch(getNhlTeams());
		}
	}, [dispatch, nflTeams, nbaTeams, mlbTeams, nhlTeams]);

	return (
		<div className={spread ? 'hub spread' : 'hub'}>
			<div className='tl'>
				<h1>News</h1>
				<NewsLg news={news} />
			</div>
			<div className='tr'>
				<h1>Stats</h1>
				<StatsLg stats={stats} />
			</div>
			<div className='c'>
				<div className='c-top'>
					<h1>Hub</h1>
				</div>
				<div className='c-bottom'>
					<div className='cb-top'>
						<div
							className='left'
							onClick={nflFav ? () => handleClick('football') : null}
						>
							<div className='wrapper'>
								{nflFav ? (
									<h3>
										Favorite Team: <span>{nflFav}</span>
									</h3>
								) : (
									<TeamSelect
										sport='football'
										teams={nflTeams}
										handleChange={(e) => handleChange(e, 'football')}
									/>
								)}
							</div>
						</div>
						<div
							className='right'
							onClick={nbaFav ? () => handleClick('basketball') : null}
						>
							<div className='wrapper'>
								{nbaFav ? (
									<h3>
										Favorite Team: <span>{nbaFav}</span>
									</h3>
								) : (
									<TeamSelect
										sport='basketball'
										teams={nbaTeams}
										handleChange={(e) => handleChange(e, 'basketball')}
									/>
								)}
							</div>
						</div>
					</div>
					<div className='cb-bottom'>
						<div
							className='left'
							onClick={mlbFav ? () => handleClick('baseball') : null}
						>
							<div className='wrapper'>
								{mlbFav ? (
									<h3>
										Favorite Team: <span>{mlbFav}</span>
									</h3>
								) : (
									<TeamSelect
										sport='baseball'
										teams={mlbTeams}
										handleChange={(e) => handleChange(e, 'baseball')}
									/>
								)}
							</div>
						</div>
						<div
							className='right'
							onClick={nhlFav ? () => handleClick('hockey') : null}
						>
							<div className='wrapper'>
								{nhlFav ? (
									<h3>
										Favorite Team: <span>{nhlFav}</span>
									</h3>
								) : (
									<TeamSelect
										sport='hockey'
										teams={nhlTeams}
										handleChange={(e) => handleChange(e, 'hockey')}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bl'>
				<h1>Players</h1>
				<PlayersLg players={players} />
			</div>
			<div className='br'>
				<h1>Standings</h1>
				<StandingsLg standings={standings} />
			</div>
		</div>
	);
};

function mapStoreToProps(store) {
	return {
		nflTeams: store.football.nflTeams,
		nbaTeams: store.basketball.nbaTeams,
		mlbTeams: store.baseball.mlbTeams,
		nhlTeams: store.hockey.nhlTeams,
		spread: store.hub.spread,
		nflFav: store.hub.nflFav,
		nflKey: store.hub.nflFavKey,
		nbaFav: store.hub.nbaFav,
		nbaKey: store.hub.nbaFavKey,
		mlbFav: store.hub.mlbFav,
		mlbKey: store.hub.mlbFavKey,
		nhlFav: store.hub.nhlFav,
		nhlKey: store.hub.nhlFavKey,
		news: store.hub.news,
		players: store.hub.players,
		stats: store.hub.stats,
		standings: store.hub.standings,
	};
}

export default connect(mapStoreToProps)(Hub);
