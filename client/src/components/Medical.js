import React from 'react';
import { ExternalLink } from 'react-external-link';
import { useQuery } from '@apollo/client';
import { QUERY_INFO } from '../utils/queries';
import Auth from '../utils/auth';

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//import components
import Vitals from '../components/Vitals';
import Vaccine from '../components/Vaccine';
import Medication from '../components/Medication';


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
            fontWeight: 400,
            fontSize: 50,
        },
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

const useStyles = makeStyles({
    cardTitle: {
        color: '#5F5088',
    },
    infoLabel: {
        padding: '1rem',
        color: '#C5A284',
    },
    infoContent: {
        padding: '0 2rem',
        color: '#3f4868'
    },
})

const Medical = () => {
    const classes = useStyles();
    //retrieve email from jwt to use to find specific patient
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    //medical info query
    const { loading, data } = useQuery(QUERY_INFO, {
        variables: { email }
    });

    //converts dob to age
    const getAge = (dateString) => {
        var ageInMilliseconds = new Date() - new Date(dateString);
        return Math.floor(ageInMilliseconds/1000/60/60/24/365);
    }

    if(loading) {
        return (
            <h1>Loading profile...</h1>
        )
    }
    else {
        //it patient not in database
        if (!data.onePatient) {
            return (
                <div>
                    <Typography variant="h4" className={classes.cardTitle}>
                    My Medical Information
                    </Typography>
                    <p>No medical information found for this email, you must first contact your provider to complete your profile!</p>
                </div>
            )
        }
        else {
        const info = data.onePatient;
        const vitals = info.vitals;
        const vaccines = info.vaccines;
        const meds = info.medications;
        const age = getAge(info.dob)
        return (
            <div>
                <Typography variant="h4" className={classes.cardTitle}>
                    My Medical Information
                </Typography>

                <Typography variant="h5" className={classes.infoLabel}>Age:</Typography>
                <Typography className={classes.infoContent}>{age}</Typography>

                <Typography variant="h5" className={classes.infoLabel}>Allergies:</Typography>
                <Typography className={classes.infoContent}>{`${info.allergies}`}</Typography>

                <Typography variant="h5" className={classes.infoLabel}>Medical History:</Typography>
                <Typography className={classes.infoContent}>{`${info.medicalHistory}`}</Typography>

                <Typography variant="h5" className={classes.infoLabel}>Medications:</Typography>
                <div className={classes.infoContent}><Medication meds={meds}/></div>

                <Typography variant="h5" className={classes.infoLabel}>Vaccines:</Typography>
                <div className={classes.infoContent}><Vaccine vaccines={vaccines}/></div>
                <p style={{paddingLeft: '10px'}}>
                        <ExternalLink id='vax-link' href='https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html'>
                        Recommended Vaccination Schedule
                        </ExternalLink>
                        </p>

                <Typography variant="h5" className={classes.infoLabel}>Vital Signs:</Typography>
                <div className={classes.infoContent}><Vitals vitals={vitals}/></div>
                <p style={{paddingLeft: '10px'}}>
                        <ExternalLink id='vit-link' href='https://health.clevelandclinic.org/pediatric-vital-signs/'>
                        Normal Vital Signs
                        </ExternalLink>
                        </p>
            </div>
        )
        }
    }
}

export default Medical;

