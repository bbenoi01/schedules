import './newsLg.scss';

const NewsLg = ({ news }) => {
	return (
		<div className='news-lg'>
			<div className='wrapper'>
				{news ? (
					news.map((item) => (
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

export default NewsLg;
