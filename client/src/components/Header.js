import React from 'react'

// import from MUI
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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

function Header() {
    const classes = styles();

    return (
        <div>
            <ThemeProvider>
                <header>
                    
                </header>
            </ThemeProvider>
        </div>
    )
}

export default Header