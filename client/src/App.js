import React, {useState} from 'react';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';

// import from MUI
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// import pages
import Homepage from './pages/Homepage';
import Game from './pages/Game';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Medical from './pages/Medical';
import Lab from './pages/Lab';
import Imaging from './pages/Imaging';
import Appointment from './pages/Appointment';
import Messaging from './pages/Message';

// import components
import Navbar from './components/Navbar'
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// Apollo Client
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

{/* website theme palette hex codes:
  • light shades - snowdrift: #FAFBF9
    --Use this color as the background for your dark-on-light designs, or the text color of an inverted design
  • light accent - gull gray: #9CA6B5
    --Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.
  • main brand color / primary - sunglo: #DE7171
    --This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.
  • dark accent - santa fe: #B5765C
    --Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.
  • dark shades / info - fiord: #3F4868
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
  //define function to render specific page
  //if page === 'Home' return (<Home />)
  const classes = styles();
  const [page, setPage] = useState('Home')
  //do this for all pages
  const renderPage = () => {
    if (page === 'Home') {
      return(
        <Homepage />
      )
    }
    if (page === 'Matching') {
      return (
        <Profile />
      )
    }

    // Other future pages go here to check if rendering them

    else {
      return (
        <Homepage />
      )
    }
  }
  //fxn change value of page state variable
  const changePage = (newPage) => setPage(newPage);

  return (
    <ApolloProvider client={client}>
      {/* this needs to wrap around everything else so the data can be accessed by all parts */}

      {/* Homepage is complete with its own NavBar = "NavBurger" */}
      {/* <Homepage/> */}
      {/* Navigation bar */}
            {/* function call */}
            {/* <Navbar page={page} changePage={changePage}/> */}

        
        {/* call fxn to render page */}

        {/* <Profile /> */}
        {/* <Medical/> */}
        {/* <Lab/> */}
        {/* <Imaging/> */}
        {/* <Appointment/>*/}
        <Messaging />
      </ApolloProvider> 
//something like this in app function (inside apollo provider)
  //navbar
  //call function
  //footer
    
  );
}

export default App;