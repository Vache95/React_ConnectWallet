import React from 'react';
import ReactDOM from 'react-dom/client';

import 'style/style';
import App from './App';
import { Global } from 'style/style';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
			<Global />
		</ThemeProvider>
	</React.StrictMode>
);
