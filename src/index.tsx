import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/store';

import 'style/style';
import App from './App';
import { Global } from 'style/style';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Global />
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
