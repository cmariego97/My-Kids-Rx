import React from 'react'
import Auth from '../utils/auth';

// import MUI styles
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar } from '@material-ui/core';
import { Box } from '@mui/material'
// import components
import NavBurger from './NavBurger';
//TODO: fix display of header, fix display of grid

const useStyles = makeStyles((theme) => ({
    navbarWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Nunito',
    },
    appbar: {
        backgroundColor: '#f4f6fc',
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
    //this needs to be in place because sometimes the program tries to read props before the page finishes loading
    if (!props.changePage) {
        return (
            <h1 className="loader"></h1>
        )
    }
    else {
        //indicates which user is logged in (if logged in)
        const status = ()=> {
            if(Auth.loggedIn()) {
                const acctData = Auth.getProfile();
                const email = acctData.data.email;
                return (
                    <h2 className={classes.appbarTitle}>Logged in as {email}</h2>
                )
            }
        }
        return (
            <Box className={classes.navbarWrapper}>
                <CssBaseline />
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar className={classes.appbarWrapper}>
                        <h1 className={classes.appbarTitle}>
                            My Kids-Rx
                            {/* <img src={`${KidsRxLogo}`} className={classes.icon}/> */}
                        </h1>
                        {status()}
                        <NavBurger page={props.page} changePage={props.changePage}/>
                        {/* <IconButton>
                            <SortIcon className={classes.icon} />
                        </IconButton> */}
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

export default HeaderAppBar;