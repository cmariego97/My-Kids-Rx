import React from 'react'

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar } from '@material-ui/core';

// import components
import NavBurger from './NavBurger';

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        justifyContent: 'between',
    },
    appbarTitle: {
        color: '#3F4868',
        flexGrow: '1',
    },
}));

const HeaderAppBar = (props) => {
    const classes = useStyles();
    if (!props.changePage) {
        return (
            <h1></h1>
        )
    }
    else {
        console.log(props);
        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar className={classes.appbarWrapper}>
                        <h1 className={classes.appbarTitle}>
                            My Kids-Rx
                            {/* <img src={`${KidsRxLogo}`} className={classes.icon}/> */}
                        </h1>
                        <NavBurger page={props.page} changePage={props.changePage}/>
                        {/* <IconButton>
                            <SortIcon className={classes.icon} />
                        </IconButton> */}
                    </Toolbar>
                    </AppBar>
                </div>
            </ThemeProvider>
        )
    }
}

export default HeaderAppBar;