import React from 'react';

// import from MUI
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

// import components
import Grid from '../components/Grid'

// import icons
import SecurityIcons from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

// MUI - theme
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

// MUI - styles
const styles = makeStyles({
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
})

const Homepage = () => {
    const classes = styles();

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div className={`${classes.grid} ${classes.bigSpace}`}>
                    <Grid icon={<SecurityIcons style={{fill: "#4360A6", height: "125", width: "125"}}/>} title="Secure" btnTitle="Show Me More" />
                    <Grid icon={<EventNoteIcon style={{fill: "#449A76", height: "125", width: "125"}}/>} title="Secure" btnTitle="Show Me More" />
                    <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height: "125", width: "125"}}/>} title="Secure" btnTitle="Show Me More" />
                </div>
                <div className={`${classes.grid} ${classes.littleSpace}`}>
                    <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height: "125", width: "125"}}/>} title="Secure" btnTitle="Show Me More" />
                    <Grid icon={<ComputerIcon style={{fill: "#E69426", height: "125", width: "125"}}/>} title="Secure" btnTitle="Show Me More" />
                    <Grid icon={<HttpIcon style={{fill: "#2EA09D", height: "125", width: "125"}}/>} title="Secure" btnTitle="Show Me More" />
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Homepage;