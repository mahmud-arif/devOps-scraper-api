import React from 'react';
import ApolloClient from 'apollo-client'; 
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache} from 'apollo-cache-inmemory';

import WebsiteLists from './components/websitLists'; 

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id 
});

const link = new HttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link, 
  cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <WebsiteLists/>
      </div>
    </ApolloProvider>
  );
}

export default App;
