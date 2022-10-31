import React from 'react';

// import CSS
import '../assets/css/styles.css'

// import MUI styles
import {Box, Typography} from '@mui/material'
import { CssBaseline } from '@material-ui/core';

//import images
import AboutUsWhale from '../assets/images/site-design-images/about-us-whale.svg';

//import components
import Header from '../components/Header';
import Grid from '../components/Grid';

//import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faSyringe, faBriefcaseMedical, faMicroscope, faXRay, faFilePrescription } from '@fortawesome/free-solid-svg-icons';

export default function Homepage() {
    return (
        <Box>
            {/* Header */}
            <Box className="root">
                <CssBaseline />
                <Header/>\
            </Box>

            {/* Features and Services */}
            <Box className="wrapper">
                <Typography variant="h4" className="bigSpace" color="#DE7171">
                    Our Services + Features
                </Typography>
            </Box>
            
            {/* Services Grid */}
            {/* TODO: figure out what to do with the buttons*/}
            <Box className="grid bigSpace" id="our-services">
                {/* <!-- service #1 - physical exams --> */}
                <Grid icon={<FontAwesomeIcon icon={faStethoscope} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Appointments" btnTitle="Set Appointment" />

                {/* <!-- service #2  - vaccines --> */}
                <Grid icon={<FontAwesomeIcon icon={faSyringe} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Vaccinations" btnTitle="Resources Info" />

                {/* <!-- service #3 - first aid? --> */}
                <Grid icon={<FontAwesomeIcon icon={faBriefcaseMedical} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title=" Health Tips" btnTitle="Learn More" />

                {/* <!-- service #4 - Lab Works --> */}
                <Grid icon={<FontAwesomeIcon icon={faMicroscope} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Lab Work" btnTitle="View Results" />

                {/* <!-- service #5 - radiology --> */}
                <Grid icon={<FontAwesomeIcon icon={faXRay} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Radiology" btnTitle="View Results" />

                {/* <!-- service #6 - prescription --> */}
                <Grid icon={<FontAwesomeIcon icon={faFilePrescription} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Medications" btnTitle="Check Orders" />
            </Box>

            {/* About Us */}
            <Box className="aboutUsWrapper">   
                <Box id="about" className="aboutUs">
                    <Box className="sectionImg">
                        <img src={`${AboutUsWhale}`}/>
                    </Box>
                    <Typography variant="h5" color="#3F4868"> 
                        We are a small technology company with a big solution: electronic medical records (EMR) specifically designed for pediatrics! Pediatric patients
                        must be treated differently than adults, as they are still growing and developing. 
                        Why not have the EMR system for their records also be different?! Our staff is composed of four highly motivated full-stack developers 
                        looking to provide your facility with your newest technology upgrade.
                    </Typography>
                </Box>
            </Box>

                {/* Footer */}
                {/* <div className={classes.bigSpace}>
                    <Footer/>
                </div> */}
        </Box>
    );
}