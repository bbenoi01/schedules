import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './newsLg.scss';

const NewsLg = ({ sport, nflFavNews, nbaNews }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		switch (sport) {
			case 'football':
				setData(nflFavNews);
				break;

			case 'basketball':
				setData(nbaNews);
				break;

			default:
				break;
		}
	}, [sport, nflFavNews, nbaNews]);

	return (
		<div className='news-lg'>
			<div className='wrapper'>
				{data ? (
					data.map((item) => (
						<a
							href={item.Url}
							target='_blank'
							rel='noreferrer'
							key={item.NewsID}
						>
							<div className='item-container'>
								<h5>{item.Title}</h5>
								<p>{item.Content}</p>
							</div>
						</a>
					))
				) : (
					<h2>No News</h2>
				)}
			</div>
		</div>
	);
};

function mapStoreToProps(store) {
	return {
		nflFavNews: store.football.nflFavNews,
		nbaNews: store.basketball.nbaNews,
	};
}

export default connect(mapStoreToProps)(NewsLg);
