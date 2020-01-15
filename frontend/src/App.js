import React from 'react';
import { ApolloProvider } from 'react-apollo';
import 'antd/dist/antd.css';

import apolloClient from './apolloSetup';
import TitleScrap from './pages/titleScrap';
import './App.css';

function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<React.Fragment className="App">
				<TitleScrap />
			</React.Fragment>
		</ApolloProvider>
	);
}

export default App;
