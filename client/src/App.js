import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        {/* this needs to wrap around everything else so the data can be accessed by all parts */}
    </ApolloProvider>
  );
}

export default App;