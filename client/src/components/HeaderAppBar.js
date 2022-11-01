import React from 'react'
import Auth from '../utils/auth';

// import MUI styles
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, Avatar } from '@material-ui/core';
import { Box, Typography } from '@mui/material'

// import components
import NavBurger from './NavBurger';

// import logo
import KidsRxLogo from '../assets/images/site-design-images/kidsrx-logo.svg';

//TODO: fix display of header, fix display of grid

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#f4f6fc',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        justifyContent: 'between',
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
                    <Typography variant="p" className="loginTitle">Logged in as {email}</Typography>
                )
            }
        }
        return (
            <Box className="navBarWrapper">
                <CssBaseline />
                <AppBar className="appBarContainer" elevation={0}>
                    <Toolbar className="appBarWrap">
                        <Avatar className="appBarLogo" variant="square" src={`${KidsRxLogo}`} sx={{ width:100, height:100 }}/>
                        {status()}
                        <NavBurger page={props.page} changePage={props.changePage}/>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

export default HeaderAppBar;