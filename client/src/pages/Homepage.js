import React from 'react';

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Typography } from '@material-ui/core';

//import components
import background from '../assets/images/animal-bg.png';
import Header from '../components/Header';
import Grid from '../components/Grid';
//import Footer from './components/Footer';

//import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faSyringe, faBriefcaseMedical, faMicroscope, faXRay, faFilePrescription } from '@fortawesome/free-solid-svg-icons';

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

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
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
}))

export default function Homepage() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <Header/>\
            </div>

            {/* Section Title - Services */}
            <div className={classes.wrapper}>
                <Typography variant="h4" className={classes.bigSpace} color="primary">
                    Our Services + Features
                </Typography>
            </div>

            {/* Top Row */}
            <div className={`${classes.grid} ${classes.bigSpace}`}>
                {/* <!-- service #1 - physical exams --> */}
                <Grid icon={<FontAwesomeIcon icon={faStethoscope} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Appointments" btnTitle="Set Appointment" />

                {/* <!-- service #2  - vaccines --> */}
                <Grid icon={<FontAwesomeIcon icon={faSyringe} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Vaccinations" btnTitle="Resources Info" />

                {/* <!-- service #3 - first aid? --> */}
                <Grid icon={<FontAwesomeIcon icon={faBriefcaseMedical} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="First Aid Tips" btnTitle="Learn More" />

                {/* <!-- service #4 - Lab Works --> */}
                <Grid icon={<FontAwesomeIcon icon={faMicroscope} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Lab Work" btnTitle="View Results" />

                {/* <!-- service #5 - radiology --> */}
                <Grid icon={<FontAwesomeIcon icon={faXRay} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Radiology" btnTitle="View Results" />

                {/* <!-- service #6 - prescription --> */}
                <Grid icon={<FontAwesomeIcon icon={faFilePrescription} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Medications" btnTitle="Check Orders" />
            </div>

                {/* Footer */}
                {/* <div className={classes.bigSpace}>
                    <Footer/>
                </div> */}
        </ThemeProvider>
    );
}