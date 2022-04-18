import './scheduleItem.scss';

import React from 'react';

const ScheduleItem = ({ game, sequence }) => {
	return (
		<div className='schedule-item'>
			<div className='si-top'>Week {sequence + 1}</div>
			<hr />
			<div className='si-center'>
				<span>Date: {game.date}</span>
				<div className='score-block'>
					<div className='home'>
						<div className='digit'>{game.score.split('-')[1]}</div>
						<span>Home: {game.home}</span>
					</div>
					<div className='away'>
						<div className='digit'>{game.score.split('-')[0]}</div>
						<span>Away: {game.away}</span>
					</div>
				</div>
				<span>Forecast: {game.forecast}</span>
			</div>
			<div className='si-bottom'>
				<img src={game.map} alt='' />
			</div>
		</div>
	);
};

export default ScheduleItem;
