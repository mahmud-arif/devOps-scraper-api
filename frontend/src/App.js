import React from 'react';
import ApolloClient from 'apollo-client'; 
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import './App.css';

const link = new HttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link, 
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
