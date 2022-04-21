import './standingsLg.scss';

const StandingsLg = ({ standings }) => {
	return (
		<div className='standings-lg'>
			<div className='wrapper'>
				{standings ? (
					standings.map((item) => (
						<div className='item-card' key={item.TeamID}>
							<div className='ic-top'>
								<div className='img-container'>
									<img src={item?.photo} alt='' />
								</div>
							</div>
							<div className='ic-center'>
								<div className='name-container'>
									<h5>{item.Name}</h5>
								</div>
								<div className='division-conference'>
									<h5>{item.Conference + ' ' + item.Division}</h5>
								</div>
							</div>
							<div className='ic-bottom'>
								<div className='stat-wrapper'>
									<h5>Season:</h5>
									<span>{item.Season}</span>
								</div>
								<div className='stat-wrapper'>
									<h5>Wins:</h5>
									<span>{item.Wins}</span>
								</div>
								<div className='stat-wrapper'>
									<h5>Losses:</h5>
									<span>{item.Losses}</span>
								</div>
								<div className='stat-wrapper'>
									<h5>Div Rank</h5>
									<span>{item.DivisionRank}</span>
								</div>
								<div className='stat-wrapper'>
									<h5>Div Wins</h5>
									<span>{item.DivisionWins}</span>
								</div>
								<div className='stat-wrapper'>
									<h5>Div Losses</h5>
									<span>{item.DivisionLosses}</span>
								</div>
							</div>
						</div>
					))
				) : (
					<h2>Error Getting Standings</h2>
				)}
			</div>
		</div>
	);
};

export default StandingsLg;
