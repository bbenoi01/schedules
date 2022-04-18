import './template.scss';
import Search from '../search/Search';
import ScheduleItem from '../scheduleItem/ScheduleItem';

import { games } from '../../data';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Template = ({ sport, nflTeams }) => {
	const [teams, setTeams] = useState(null);

	useEffect(() => {
		switch (sport) {
			case 'football':
				setTeams(nflTeams);
				break;

			default:
				break;
		}
	}, [sport, nflTeams]);

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
		nflTeams: store.football.teams,
	};
}

export default connect(mapStoretoProps)(Template);
