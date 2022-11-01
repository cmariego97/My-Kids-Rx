import React from 'react';
//import components
import Appt from '../components/Appt'
import Note from '../components/Note'

// import MUI styles
import { Box, Typography } from '@mui/material';

const Appointment = () => {
    return(
        <Box className="wrap siteWrap">
            <Box className="card">
                <Typography variant="h5">Upcoming Appointments</Typography>
                <Appt/>
                <Typography variant="h5" className="littleSpace">Past Appointments</Typography>
                <Note/>
            </Box>
        </Box>
        
    );
}

export default Appointment;

