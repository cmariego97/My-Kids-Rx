import React from 'react';
// import MUI styles
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline } from '@material-ui/core';

//import components
import background from '../assets/images/animal-bg.png';
import Header from '../components/Header';
import GridAboutUs from '../components/GridAboutUs';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat', 
        backgroundSize: 'cover',
    },
}))

export default function Homepage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <GridAboutUs />
        </div>
    );
}