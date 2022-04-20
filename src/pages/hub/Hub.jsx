import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TeamSelect from '../../components/teamSelect/TeamSelect';
import NewsLg from '../../components/newsLg/NewsLg';
import './hub.scss';

import {
	getNflTeams,
	getNflFavNews,
} from '../../reducers/footballReducer/FootballActions';
import { getNbaTeams } from '../../reducers/basketballReducer/BasketballActions';
import { getMlbTeams } from '../../reducers/baseballReducer/BaseballActions';
import { getNhlTeams } from '../../reducers/hockeyReducer/HockeyActions';

const Hub = ({ dispatch, nflTeams, nbaTeams, mlbTeams, nhlTeams }) => {
	const [spread, setSpread] = useState(false);
	const [nflFav, setNflFav] = useState(localStorage.getItem('nflFav') || null);
	const [nflFavKey, setNflFavKey] = useState(
		localStorage.getItem('nflFavKey') || null
	);
	const [nbaFav, setNbaFav] = useState(localStorage.getItem('nbaFav') || null);
	const [nbaFavKey, setNbaFavKey] = useState(
		localStorage.getItem('nbaFavKey') || null
	);
	const [mlbFav, setMlbFav] = useState(localStorage.getItem('mlbFav') || null);
	const [mlbFavKey, setMlbFavKey] = useState(
		localStorage.getItem('mlbFavKey') || null
	);
	const [nhlFav, setNhlFav] = useState(localStorage.getItem('nhlFav') || null);
	const [nhlFavKey, setNhlFavKey] = useState(
		localStorage.getItem('nhlFavKey') || null
	);
	const temp = sessionStorage.getItem('nflFavNews') || null;

	const handleChange = (e, sport) => {
		if (sport === 'football') {
			localStorage.setItem('nflFav', e.target.value.split(', ')[0]);
			localStorage.setItem('nflFavKey', e.target.value.split(', ')[1]);
			setNflFav(e.target.value.split(', ')[0]);
			setNflFavKey(e.target.value.split(', ')[1]);
		} else if (sport === 'basketball') {
			localStorage.setItem('nbaFav', e.target.value.split(', ')[0]);
			localStorage.setItem('nbaFavKey', e.target.value.split(', ')[1]);
			setNbaFav(e.target.value.split(', ')[0]);
			setNbaFavKey(e.target.value.split(', ')[1]);
		} else if (sport === 'baseball') {
			localStorage.setItem('mlbFav', e.target.value.split(', ')[0]);
			localStorage.setItem('mlbFavKey', e.target.value.split(', ')[1]);
			setMlbFav(e.target.value.split(', ')[0]);
			setMlbFavKey(e.target.value.split(', ')[1]);
		} else if (sport === 'hockey') {
			localStorage.setItem('nhlFav', e.target.value.split(', ')[0]);
			localStorage.setItem('nhlFavKey', e.target.value.split(', ')[1]);
			setNhlFav(e.target.value.split(', ')[0]);
			setNhlFavKey(e.target.value.split(', ')[1]);
		}
	};

	const handleTLClick = () => {
		setSpread(!spread);
		if (!temp) {
			dispatch(getNflFavNews(nflFavKey));
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
				<NewsLg />
			</div>
			<div className='tr'>
				<h1>Stats</h1>
			</div>
			<div className='c'>
				<div className='c-top'>
					<h1>Hub</h1>
				</div>
				<div className='c-bottom'>
					<div className='cb-top'>
						<div className='left' onClick={nflFav ? handleTLClick : null}>
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
							onClick={nbaFav ? () => setSpread(!spread) : null}
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
							onClick={mlbFav ? () => setSpread(!spread) : null}
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
							onClick={nhlFav ? () => setSpread(!spread) : null}
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
			</div>
			<div className='br'>
				<h1>Fantasy</h1>
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
	};
}

export default connect(mapStoreToProps)(Hub);
