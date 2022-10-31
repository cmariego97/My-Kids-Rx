import { ClassNames } from '@emotion/react';
import React from 'react';
//import components
import Appt from '../components/Appt'
import Note from '../components/Note'

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';
//import image
import background from '../assets/images/site-design-images/plain-animal-bg.svg';

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
       width: '70%',
   },
   rowContainer: {
       display: 'flex',
   },
   cardAppointments: {
       display: 'flex',
       position: 'relative',
       flexDirection: 'column',
       flexWrap: 'nowrap',
       margin: '0.25rem auto',
       padding: '2rem 2.5rem',
       width: '55%',
       minWidth: '550px',
       minHeight: '500px',
       backgroundColor: '#F5F2EF',
       borderRadius: '5px',
       boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
   },
   avatarImage: {
       margin: '-30px auto 0',
       position: 'relative',
       overflow: 'hidden',
       boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
   },
   greeting: {
       fontFamily: [ 'Nunito Sans', 'sans-serif' ],
       textTransform: 'uppercase',
   },
   boxUserName: {
       display: 'flex',
       overflow: 'hidden',
   },
   boxUserInfo: {
       display: 'flex',
       justifyContent: 'space-between',
   },
   userName: {
       margin: '0 auto',
       textAlign: 'space-between',
   },
   userInfo: {
       margin: '0 auto',
       padding: '0.25rem',
   }
}))

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

const Appointment = () => {
   const classes = useStyles();
   return(
   <div className={classes.cardAppointments}>
    <h1>Upcoming Appointments</h1>
    <Appt/>
    <h1>Past Appointments</h1>
    <Note/>
   </div>

   );
}

export default Appointment;

