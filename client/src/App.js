import React from 'react';
import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import all pages
import Matching from './pages/Matching';
import Jeopardy from './pages/Jeopardy';

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
            {/* call fxn to render page */}
        <Jeopardy /> 
        {/* <Matching /> */}
    </ApolloProvider>
  );
}

export default App;