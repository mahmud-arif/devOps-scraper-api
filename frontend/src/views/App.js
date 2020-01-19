import React from 'react';
import { ApolloProvider } from 'react-apollo';
import 'antd/dist/antd.css';

import apolloClient from './apolloSetup';
import TitleScrap from '../pages/titleScrap';
import './App.css';


function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<div className="App">
				<TitleScrap />
			</div>
		</ApolloProvider>
	);
}

export default App;
