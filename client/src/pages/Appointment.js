import { ClassNames } from '@emotion/react';
import React from 'react';
//import components
import Appt from '../components/Appt'
import Note from '../components/Note'

// import MUI styles
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';
//import image
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
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
    }
}))

const Appointment = () => {
const classes = useStyles();
    return(
        <Box className="wrap siteWrap">
            <Box className={classes.cardAppointments}>
                <Typography variant="h5">Upcoming Appointments</Typography>
                <Appt/>
                <Typography variant="h5">Past Appointments</Typography>
                <Note/>
            </Box>
        </Box>
        
    );
}

export default Appointment;

