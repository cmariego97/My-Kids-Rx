import React from 'react';

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Typography } from '@material-ui/core';

//import images
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
import AboutUsWhale from '../assets/images/site-design-images/about-us-whale.svg';

//import components
import Header from '../components/Header';
import Grid from '../components/Grid';

//import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faSyringe, faGamepad, faMicroscope, faXRay, faFilePrescription } from '@fortawesome/free-solid-svg-icons';

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
    aboutUsWrapper: {
        backgroundColor: "#f4f6fc",
    },
    aboutUs: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "5rem",
    },
    textInfo: {
        color: "#3F4868",
        textAlign: "justify",
    },
}))

export default function Homepage({changePage}) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <Header/>\
            </div>

            {/* Features and Services */}
            <div className={classes.wrapper}>
                <Typography variant="h4" className={classes.bigSpace} color="primary">
                    Our Services + Features
                </Typography>
            </div>
            
            {/* Services Grid */}
            {/* //TODO: figure out what to do with the buttons*/}
            <div className={`${classes.grid} ${classes.bigSpace}`} id="our-services">
                {/* <!-- service #1 - physical exams --> */}
                <Grid icon={<FontAwesomeIcon icon={faStethoscope} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Appointments" btnTitle="View Appointments" changePage={changePage} newPage='Appt'id='appt'/>

                {/* <!-- service #2  - vaccines --> */}
                <Grid icon={<FontAwesomeIcon icon={faSyringe} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Health Tips" btnTitle="Learn More" changePage={changePage} newPage='Resources'id='resources'/>

                {/* <!-- service #3 - first aid? --> */}
                
                <Grid icon={<FontAwesomeIcon icon={faGamepad} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title=" Health Tips" btnTitle="Learn More" />

                {/* <!-- service #4 - Lab Works --> */}
                <Grid icon={<FontAwesomeIcon icon={faMicroscope} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Lab Work" btnTitle="View Results" changePage={changePage} newPage='Lab' id='lab'/>

                {/* <!-- service #5 - radiology --> */}
                <Grid icon={<FontAwesomeIcon icon={faXRay} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Radiology" btnTitle="View Results" changePage={changePage} newPage='Imaging' id='image'/>

                {/* <!-- service #6 - prescription --> */}
                <Grid icon={<FontAwesomeIcon icon={faFilePrescription} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Medications" btnTitle="View Medications" changePage={changePage} newPage='Profile'id='profile'/>
            </div>

            {/* About Us */}
            <div className={classes.aboutUsWrapper}>   
                <section id="about" className={classes.aboutUs}>
                    <div className={classes.sectionImg}>
                        <img src={`${AboutUsWhale}`}/>
                    </div>
                    <Typography variant="h5" color="#3F4868"> 
                        We are a small technology company with a big solution: electronic medical records (EMR) specifically designed for pediatrics! Pediatric patients
                        must be treated differently than adults, as they are still growing and developing. 
                        Why not have the EMR system for their records also be different?! Our staff is composed of four highly motivated full-stack developers 
                        looking to provide your facility with your newest technology upgrade.
                    </Typography>
                </section>
            </div>

                {/* Footer */}
                {/* <div className={classes.bigSpace}>
                    <Footer/>
                </div> */}
        </ThemeProvider>
    );
}