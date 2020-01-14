import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import 'antd/dist/antd.css';
import './App.css';

import WebsiteLists from './components/WebsitLists';
import Form from './components/Form';

const cache = new InMemoryCache({
	dataIdFromObject: (object) => object.id
});

const httpLink = new HttpLink({
	uri: 'http://localhost:4000'
});

const wsLink = new WebSocketLink({
	uri: `ws://localhost:4000`,
	options: {
		reconnect: true
	}
});

const link = split(
	({ query }) => {
		const { kind, operation } = getMainDefinition(query);
		return kind === 'OperationDefinition' && operation === 'subscription';
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link,
	cache
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Form />
				<WebsiteLists />
			</div>
		</ApolloProvider>
	);
}

export default App;
