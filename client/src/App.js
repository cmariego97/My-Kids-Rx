import React, {useState} from 'react';
import { ApolloClient,
      ApolloProvider, 
      InMemoryCache, 
      createHttpLink
    } 
  from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';

// import pages
import Homepage from './pages/Homepage';
import AccountLoginPatient from './pages/AccountLoginPatient';
import AccountCreate from './pages/AccountCreate';
import Game from './pages/Game';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Lab from './pages/Lab';
import Imaging from './pages/Imaging';
import Appointment from './pages/Appointment';
import Messaging from './pages/Messaging';

// import components
import HeaderAppBar from './components/HeaderAppBar';
import Footer from './components/Footer'; 

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  //state variable to indicate which page to display
  const [page, setPage] = useState('Home')
  //renders main content based on value of page state variable
  const renderPage = () => {
    if (page === 'Profile') {
      return <Profile />
    }
    if (page === 'Appt') {
      return <Appointment />
    }
    if (page === 'Game') {
      return <Game />
    }
    if (page === 'Imaging') {
      return <Imaging />
    }
    if (page === 'Lab') {
      return <Lab />
    }
    if (page === 'Messaging') {
      return <Messaging />
    }
    if (page === 'Resources') {
      return <Resources />
    }
    if (page === 'Home') {
      return <Homepage changePage={changePage}/>
    }
    if (page === 'Login') {
      return <AccountLoginPatient changePage={changePage}/>
    }
    if (page === 'Create') {
      return <AccountCreate changePage={changePage}/>
    }
  }
  //fxn to change value of page state variable
  const changePage = (newPage) => setPage(newPage);

  return (
    <ApolloProvider client={client}>
        <HeaderAppBar page={page} changePage={changePage}/>
        {renderPage()}
        <Footer />
    </ApolloProvider> 
    
  );
}

export default App;