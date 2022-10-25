import React, {useState} from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// import from MUI
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// import pages
import Homepage from './pages/Homepage';
import Matching from './pages/Matching';
import Jeopardy from './pages/Jeopardy';
import TTT from './pages/TTT';
import Game from './pages/Game';
import Resources from './pages/Resources';

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
      // gull gray
      main: "#9CA6B5"
    }
  },
  typography: {
    fontFamily: [
      'Nunito', 'sans-serif', 'Nunito Sans', 'Atma', 'cursive', 'Londrina Solid'
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
        <Matching />
      )
    }
    if (page === 'Jeopardy') {
      return (
        <Jeopardy />
      )
    }
    if (page === 'TTT') {
      return (
        <TTT />
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
      <div className="App">
        {/* <ThemeProvider theme={theme}>
          <div> */}
            {/* Navigation bar */}
            {/* function call */}
            {/* <Navbar page={page} changePage={changePage}/>
          </div> */}

          {/* Site Wrap */}
          {/* <div className={classes.wrapper}> */}
            {/* Header */}
            {/* <Header/> */}

            {/* Testing Testing */}
            {/* <Typography variant="h4" className={classes.bigSpace} color="primary">
              Claire, why are you awake at 4am?
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="secondary">
              Do you wear wigs? <em>uh, no, i do not.</em>
              <br></br>
              Have you worn wigs? <em>no, i have not.</em>
              <br></br>
              Will you wear wigs? <em>maybe!</em>
              <br></br>
              When will you wear wigs? <em>X_X</em>
            </Typography> */}
          {/* </div> */}

          {/*renderPage()*/}

          {/* Footer */}
          {/* <div className={classes.bigSpace}>
            <Footer/>
          </div> */}

        {/* </ThemeProvider> */}
      </div>

      {/* <Homepage/> */}

      {/* <Matching/> */}
      {/* call fxn to render page */}
        {/* <Jeopardy />  */}
      {/* <TTT /> */}
      <Game />

      {/* <Resources/> */}
    </ApolloProvider>
//something like this in app function (inside apollo provider)
  //navbar
  //call function
  //footer
    
  );
}

export default App;