import './template.scss';
import Search from '../../components/search/Search';
import ScheduleItem from '../../components/scheduleItem/ScheduleItem';

import { games } from '../../data';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Template = ({
	sport,
	nflTeams,
	nbaTeams,
	mlbTeams,
	nhlTeams,
	mlsTeams,
	pgaGolfers,
}) => {
	const [teams, setTeams] = useState(null);

	useEffect(() => {
		switch (sport) {
			case 'football':
				setTeams(nflTeams);
				break;

			case 'basketball':
				setTeams(nbaTeams);
				break;

			case 'baseball':
				setTeams(mlbTeams);
				break;

			case 'hockey':
				setTeams(nhlTeams);
				break;

			case 'soccer':
				setTeams(mlsTeams);
				break;

			case 'golf':
				setTeams(pgaGolfers);
				break;

			default:
				break;
		}
	}, [sport, nflTeams, nbaTeams, mlbTeams, nhlTeams, mlsTeams, pgaGolfers]);

	return (
		<div className={`template ${sport}`}>
			<div className='top'>
				<h2>{sport.charAt(0).toUpperCase() + sport.slice(1)}</h2>
			</div>
			<div className='center'>
				<div className='left'>
					<h3>Favorite Team:</h3> <span>Lakers</span>
				</div>
				<div className='right'>
					<h3>Current Record:</h3> <span>5-10-1</span>
				</div>
			</div>
			<div className='bottom'>
				<div className='left'>
					<Search sport={sport} teams={teams} />
				</div>
				<div className='right'>
					<div className='wrapper'>
						{games &&
							games.map((game) => (
								<ScheduleItem
									key={game.id}
									game={game}
									sequence={games.indexOf(game)}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

function mapStoretoProps(store) {
	return {
		nflTeams: store.football.nflTeams,
		nbaTeams: store.basketball.nbaTeams,
		mlbTeams: store.baseball.mlbTeams,
		nhlTeams: store.hockey.nhlTeams,
		mlsTeams: store.soccer.mlsTeams,
		pgaGolfers: store.golf.pgaGolfers,
	};
}

export default connect(mapStoretoProps)(Template);
