import './app.scss';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
	// Navigate,
} from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Hub from './pages/hub/Hub';
import Template from './components/template/Template';
// import Football from './pages/football/Football';
// import Basketball from './pages/basketball/Basketball';
// import Baseball from './pages/baseball/Baseball';
// import Hockey from './pages/hockey/Hockey';
// import Soccer from './pages/soccer/Soccer';
// import Golf from './pages/golf/Golf';

const App = () => {
	return (
		<div className='app'>
			<Router>
				<Sidebar />
				<div className='canvas'>
					<Topbar />
					<Switch>
						<Route path='/'>
							<Route index element={<Hub />} />
							<Route path='football' element={<Template sport='football' />} />
							<Route
								path='basketball'
								element={<Template sport='basketball' />}
							/>
							<Route path='baseball' element={<Template sport='baseball' />} />
							<Route path='hockey' element={<Template sport='hockey' />} />
							<Route path='soccer' element={<Template sport='soccer' />} />
							<Route path='golf' element={<Template sport='golf' />} />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
