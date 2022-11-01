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
import { faStethoscope, faGamepad, faMicroscope, faXRay, faFilePrescription, faComments } from '@fortawesome/free-solid-svg-icons';

export default function Homepage({changePage}) {
    return (
        <Box>
            {/* Header */}
            {/* <Box className="root">
                <CssBaseline />
                <Header/>\
            </Box> */}

            {/* Features and Services */}
            <Box className="wrapper">
                <Typography variant="h4" className="bigSpace" color="#DE7171">
                    Our Services + Features
                </Typography>
            </Box>
            
            {/* Services Grid */}

            <Box className="grid bigSpace" id="our-services">
                {/* <!-- service #1 - physical exams --> */}
                <Grid icon={<FontAwesomeIcon icon={faStethoscope} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Appointments" btnTitle="View Appointments" changePage={changePage} newPage='Appt'id='appt'/>

                {/* <!-- service #2  - messaging --> */}
                <Grid icon={<FontAwesomeIcon icon={faComments} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Messaging" btnTitle="Learn More" changePage={changePage} newPage='Messaging'id='messaging'/>

                {/* <!-- service #3 - games --> */}
                
                <Grid icon={<FontAwesomeIcon icon={faGamepad} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Games" btnTitle="Play" changePage={changePage} newPage='Game'id='game'/>

                {/* <!-- service #4 - Lab Works --> */}
                <Grid icon={<FontAwesomeIcon icon={faMicroscope} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Lab Work" btnTitle="View Results" changePage={changePage} newPage='Lab' id='lab'/>

                {/* <!-- service #5 - radiology --> */}
                <Grid icon={<FontAwesomeIcon icon={faXRay} style={{color: "#a68674", height: "125", width: "125"}}></FontAwesomeIcon>} title="Radiology" btnTitle="View Results" changePage={changePage} newPage='Imaging' id='image'/>

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