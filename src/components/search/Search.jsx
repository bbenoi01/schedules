import './search.scss';
import React, { useState } from 'react';
import TeamSelect from '../teamSelect/TeamSelect';

const Search = ({ sport, teams }) => {
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [selectedYear, setSelectedYear] = useState('');

	return (
		<div className='search'>
			<div className='input-group'>
				<label htmlFor='teams'>Choose a team</label>
				<TeamSelect sport={'teams'} teams={teams} />
				{/* <select
					name='teams'
					id='teams'
					onChange={(e) => setSelectedTeam(e.target.value)}
				>
					<option value=''>Choose Team...</option>
					{teams && teams.map((team) => <TeamOption team={team} />)}
				</select> */}
			</div>
			<div className='input-group'>
				<label htmlFor='year'>Enter year</label>
				<input
					id='year'
					className='search-input'
					type='text'
					placeholder='year'
					onChange={(e) => setSelectedYear(e.target.value)}
				/>
			</div>
			<button className={sport}>Get Schedule</button>
		</div>
	);
};

export default Search;
