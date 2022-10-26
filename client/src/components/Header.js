import React, { useEffect, useState } from 'react';
import NavBurger from './NavBurger';

// import MUI styles
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';

// import icons
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import react scroll
import { Link as Scroll } from 'react-scroll';

// import images
import KidsRxLogo from '../assets/images/site-design-images/kidsrx-logo.svg'

{/* website theme palette hex codes:
    • light shades - snowdrift: #FAFBF9
        --Use this color as the background for your dark-on-light designs, or the text color of an inverted design
    • light accent - gull gray: #9CA6B5
        --Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.
    • main brand color / primary - sunglo: #DE7171
        --This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.
    • dark accent - santa fe: #B5765C
        --Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.
    • dark shades / info - fiord: #3F4868
        --Use as the text color for dark-on-light designs, or as the background for inverted designs.
    • success - asparagus: #67a35b
    • warning - carrot-orange: #f58c22
    • danger - pomegranate: #f44336

-- collapse this to hide -claire <3 --*/}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
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
        flexGrow: '1',
    },
    icon: {
        color: '#DE7171',
        fontSize: '2rem',
    },
    colorText: {
        color: '#DE7171',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#3F4868',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#B5765C',
        fontSize: '4rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>
                    My<span className={classes.colorText}>Kids-Rx</span>
                    {/* <img src={`${KidsRxLogo}`} className={classes.icon}/> */}
                </h1>
                <NavBurger />
                {/* <IconButton>
                    <SortIcon className={classes.icon} />
                </IconButton> */}
            </Toolbar>
        </AppBar>

        <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
        >
            <div className={classes.container}>
            <h1 className={classes.title}>
                Welcome to <br />
                <span className={classes.colorText}>Kids-Rx</span>
            </h1>

            {/* a button that will scroll down to the about us section */}
            <Scroll to="about-us" smooth={true}>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                </IconButton>
            </Scroll>
            </div>
        </Collapse>
        </div>
    );
}