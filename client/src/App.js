import React from 'react';
import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Matching from './pages/Matching';
import Homepage from './pages/Homepage';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

//something like this in app function (inside apollo provider)
  //navbar
  //call function
  //footer

function App() {
  //define function to render specific page
    //if page === 'Home' return (<Home />)
  return (
    <ApolloProvider client={client}>
        {/* this needs to wrap around everything else so the data can be accessed by all parts */}
        <Navbar />
        <Homepage />
        <Matching /> 
    </ApolloProvider>
  );
}

export default App;