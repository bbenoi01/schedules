import { connect } from 'react-redux';
import './newsLg.scss';

const NewsLg = ({ nflFavNews }) => {
	return (
		<div className='news-lg'>
			{nflFavNews ? (
				nflFavNews.map((item) => (
					<div className='wrapper' key={item.NewsID}>
						<h3>{item.Title}</h3>
						<p>{item.Content}</p>
					</div>
				))
			) : (
				<h2>No News</h2>
			)}
		</div>
	);
};

function mapStoreToProps(store) {
	return {
		nflFavNews: store.football.nflFavNews,
	};
}

export default connect(mapStoreToProps)(NewsLg);
