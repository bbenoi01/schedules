import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FootballIcon from '@mui/icons-material/SportsFootball';
import BasketballIcon from '@mui/icons-material/SportsBasketball';
import BaseballIcon from '@mui/icons-material/SportsBaseball';
import HockeyIcon from '@mui/icons-material/SportsHockey';
import SoccerIcon from '@mui/icons-material/SportsSoccer';
import GolfIcon from '@mui/icons-material/SportsGolf';
import { useState } from 'react';
import { connect } from 'react-redux';

import { getNflTeams } from '../../reducers/footballReducer/FootballActions';
import { getNbaTeams } from '../../reducers/basketballReducer/BasketballActions';
import { getMlbTeams } from '../../reducers/baseballReducer/BaseballActions';
import { getNhlTeams } from '../../reducers/hockeyReducer/HockeyActions';
import { getMlsTeams } from '../../reducers/soccerReducer/SoccerAction';
import { getPgaGolfers } from '../../reducers/golfReducer/GolfActions';

const Sidebar = ({
	dispatch,
	nflTeams,
	nbaTeams,
	mlbTeams,
	nhlTeams,
	mlsTeams,
	pgaGolfers,
}) => {
	const [menuOpen, setMenuOpen] = useState(true);

	return (
		<div className={menuOpen ? 'sidebar active' : 'sidebar'}>
			<div className='top'>
				<div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
					<span className='line1'></span>
					<span className='line2'></span>
					<span className='line3'></span>
				</div>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<Link to='/' className='router-link'>
						<li>
							<DashboardIcon className='icon' />
							<span>Hub</span>
						</li>
					</Link>
					<Link
						to='/football'
						className='router-link'
						onClick={!nflTeams ? () => dispatch(getNflTeams()) : null}
					>
						<li>
							<FootballIcon className='icon' />
							<span>Football</span>
						</li>
					</Link>
					<Link
						to='/basketball'
						className='router-link'
						onClick={!nbaTeams ? () => dispatch(getNbaTeams()) : null}
					>
						<li>
							<BasketballIcon className='icon' />
							<span>Basketball</span>
						</li>
					</Link>
					<Link
						to='/baseball'
						className='router-link'
						onClick={!mlbTeams ? () => dispatch(getMlbTeams()) : null}
					>
						<li>
							<BaseballIcon className='icon' />
							<span>Baseball</span>
						</li>
					</Link>
					<Link
						to='/hockey'
						className='router-link'
						onClick={!nhlTeams ? () => dispatch(getNhlTeams()) : null}
					>
						<li>
							<HockeyIcon className='icon' />
							<span>Hockey</span>
						</li>
					</Link>
					<Link
						to='/soccer'
						className='router-link'
						onClick={!mlsTeams ? () => dispatch(getMlsTeams()) : null}
					>
						<li>
							<SoccerIcon className='icon' />
							<span>Soccer</span>
						</li>
					</Link>
					<Link
						to='/golf'
						className='router-link'
						onClick={!pgaGolfers ? () => dispatch(getPgaGolfers()) : null}
					>
						<li>
							<GolfIcon className='icon' />
							<span>Golf</span>
						</li>
					</Link>
				</ul>
			</div>
			<div className='bottom'></div>
		</div>
	);
};

function mapStoreToProps(store) {
	return {
		nflTeams: store.football.nflTeams,
		nbaTeams: store.basketball.nbaTeams,
		mlbTeams: store.baseball.mlbTeams,
		nhlTeams: store.hockey.nhlTeams,
		mlsTeams: store.soccer.mlsTeams,
		pgaGolfers: store.golf.pgaGolfers,
	};
}

export default connect(mapStoreToProps)(Sidebar);
