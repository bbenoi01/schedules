import './teamSelect.scss';

const TeamSelect = ({ sport, teams, handleChange }) => {
	return (
		<select
			name={sport}
			id={sport}
			className='team-select'
			onChange={handleChange}
		>
			<option value=''>Favorite Team...</option>
			{teams &&
				teams.map((team) => (
					<option key={team.Key} value={team.Name + ', ' + team.Key}>
						{team.Name}
					</option>
				))}
		</select>
	);
};

export default TeamSelect;
