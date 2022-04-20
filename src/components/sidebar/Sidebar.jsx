import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FootballIcon from '@mui/icons-material/SportsFootball';
import BasketballIcon from '@mui/icons-material/SportsBasketball';
import BaseballIcon from '@mui/icons-material/SportsBaseball';
import HockeyIcon from '@mui/icons-material/SportsHockey';
import { useState } from 'react';
import { connect } from 'react-redux';

import { getNflTeams } from '../../reducers/footballReducer/FootballActions';
import { getNbaTeams } from '../../reducers/basketballReducer/BasketballActions';
import { getMlbTeams } from '../../reducers/baseballReducer/BaseballActions';
import { getNhlTeams } from '../../reducers/hockeyReducer/HockeyActions';

const Sidebar = ({ dispatch, nflTeams, nbaTeams, mlbTeams, nhlTeams }) => {
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
	};
}

export default connect(mapStoreToProps)(Sidebar);
