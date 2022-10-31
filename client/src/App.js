import React, {useState} from 'react';
import { ApolloClient,
      ApolloProvider, 
      InMemoryCache, 
      createHttpLink
    } 
  from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';
// import from MUI
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// import pages
import Homepage from './pages/Homepage';
import AccountLoginPatient from './pages/AccountLoginPatient';
import AccountCreate from './pages/AccountCreate';
import Game from './pages/Game';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Medical from './pages/Medical';
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

{/* website theme palette hex codes:
  • light shades - snowdrift: #FAFBF9 || pampas: #F5F2EF
    --Use this color as the background for your dark-on-light designs, or the text color of an inverted design
  • light accent - gull gray: #9CA6B5 || indian khaki: #C5A284
    --Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.
  • main brand color / primary - sunglo: #DE7171 || pharlap: #AA858E
    --This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.
  • dark accent - santa fe: #B5765C || fountain blue: #55C4BA
    --Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.
  • dark shades / info - fiord: #3F4868 || butterfly bush: #5F5088
    --Use as the text color for dark-on-light designs, or as the background for inverted designs.
  • success - asparagus: #67a35b
  • warning - carrot-orange: #f58c22
  • danger - pomegranate: #f44336

-- collapse this to hide -claire <3 --*/}

// MUI - theme
const theme = createTheme({
  palette: {
    primary: {
      // Sunglo
      main: "#de7171", 
    },
    secondary: {
      // sandrift
      main: "#a68674", 
    },
    error: {
      // pomegranate
      main: "#f44336", 
    },
    warning: {
      // carrot-orange
      main: "#f58c22" 
    },
    info: {
      // fiord
      main: "#3f4868" 
    },
    success: {
      // asparagus
      main: "#67a35b" 
    },
    neutral: {
      // gull-gray
      main: "#9CA6B5"
    }
  },
  typography: {
    fontFamily: [
      'Nunito', 'sans-serif', 'Nunito Sans', 'Atma', 'cursive', 'Londrina Solid', 'Josefin Sans'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
    p: {
      fontSize: 18,
    }
  },
});

// MUI - styles
const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();
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
    if (page === 'Medical') {
      return <Medical />
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