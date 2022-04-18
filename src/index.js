import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import rootStore from './rootStore';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={rootStore}>
			<App />
		</Provider>
	</React.StrictMode>
);
