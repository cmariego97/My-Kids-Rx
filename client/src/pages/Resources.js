import React from "react"; 
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

//import components
import Fact from '../components/Fact';
import Disease from '../components/Disease';

//import images
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
import { Typography } from "@material-ui/core";

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
      h1: {
          fontWeight: 600,
          fontSize: 80,
      },
      h2: {
          fontWeight: 500,
          fontSize: 70,
      },
      h3: {
          fontFamily: 'Atma',
          fontSize: 50,
      },
      h4: {
          fontWeight: 600,
          fontSize: 28,
          textTransform: 'uppercase',
          lineHeight: '2rem',
      },
      h5: {
          fontFamily: 'Nunito',
          fontWeight: 500,
          fontSize: 18,
          textTransform: 'uppercase',
          lineHeight: '2rem',
      },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
      minHeight: '100vh',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  },
  bigSpace: {
    margin: '5rem 1rem 2rem',     
  },
  littleSpace: {
      margin: '2.5rem 1rem 2rem',
  },
  wrapContainer: {
    margin: '0 auto',
    width: '80%',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardDisease: {
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    margin: '10rem 0.25rem 0 1rem',
    padding: '0 1rem',
    width: '800px',
    minHeight: '500px',
    backgroundColor: '#F5F2EF',
    borderRadius: '10px',
    boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
  },
  cardFunFact: {
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    margin: '10rem 1rem 0 0.25rem',
    padding: '0 1rem',
    width: '800px',
    minHeight: '500px',
    backgroundColor: '#F5F2EF',
    borderRadius: '10px',
    boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
  },
  cardContent: {},
}));

const Resources = () => {
    const classes = useStyles();

  return (

    <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.wrapContainer}>
            <div className={classes.contentContainer}>
              
                {/* Disease of the Day */}
                <div className={classes.cardDisease}>
                  <div className={classes.cardContent}>
                    <div class={classes.bigSpace}>
                      <Typography variant="h3">Disease of the Day</Typography>
                    </div>
                    <div class={classes.littleSpace}>
                      <Typography variant="h5">Illnesses in Children:</Typography>
                      <Typography variant="p">With so many little ones running around, it is important to stay informed on childhood illnesses!</Typography>
                      <Disease />
                    </div>
                  </div>
                </div>

                {/* Fun Fact of the Day */}
                <div className={classes.cardFunFact}>
                  <div className={classes.cardContent}>
                    <div class={classes.bigSpace}>
                      <Typography variant="h3">Fun Fact of the Day</Typography>
                    </div>
                    <div class={classes.littleSpace}>
                      <Typography variant="h5">Medical Fun Facts:</Typography>
                      <Typography variant="p">We won't bore you with a long boring story about how the body works...but check out this fun fact!</Typography>
                      <Fact />
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
    </ThemeProvider>
  )
} 

export default Resources;