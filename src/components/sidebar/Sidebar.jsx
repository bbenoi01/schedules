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

const Sidebar = ({ dispatch, nflTeams }) => {
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
					<Link to='/basketball' className='router-link'>
						<li>
							<BasketballIcon className='icon' />
							<span>Basketball</span>
						</li>
					</Link>
					<Link to='/baseball' className='router-link'>
						<li>
							<BaseballIcon className='icon' />
							<span>Baseball</span>
						</li>
					</Link>
					<Link to='/hockey' className='router-link'>
						<li>
							<HockeyIcon className='icon' />
							<span>Hockey</span>
						</li>
					</Link>
					<Link to='/soccer' className='router-link'>
						<li>
							<SoccerIcon className='icon' />
							<span>Soccer</span>
						</li>
					</Link>
					<Link to='/golf' className='router-link'>
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
		nflTeams: store.football.teams,
	};
}

export default connect(mapStoreToProps)(Sidebar);
