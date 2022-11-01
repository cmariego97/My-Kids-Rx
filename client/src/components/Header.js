import React, { useEffect, useState } from 'react';

// import MUI styles
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse, Typography } from '@material-ui/core';

// import components
import HeaderAppBar from './HeaderAppBar';

// import icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import react scroll
import { Link as Scroll } from 'react-scroll';
//import image
import background from '../assets/images/site-design-images/plain-animal-bg.svg';

/* website theme palette hex codes:
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
    • kidsrxblue: #f4f6fc;
    • kidsrxgreen: #F5FCFF;
    
-- collapse this to hide -claire <3 --*/

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        marginBottom: '400px'
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
    icon: {
        color: '#DE7171',
        fontSize: '2rem',
    },
    container: {
        textAlign: 'center',
        marginTop: '750px'
    },
    containerInfo: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5rem',
        marginBottom: '5rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWelcome: {
        color: '#DE7171',
        FontFamily: ['Josefin Sans', 'sans-serif'],
        textTransform: 'uppercase',
        textShadow: '2px 2px 8px #9CA6B5',
    },
    textTitle: {
        marginTop: '2rem',
        marginBottom: '5rem',
        color: '#3F4868',
        fontSize: '20rem',
        fontFamily: ['Atma', 'cursive',],
        fontWeight: '700',
        textShadow: '0 0 5px #FF0000, 0 0 8px #0000FF',
    },
    textInfo: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
        color: '#B5765C',
        FontFamily: ['Josefin Sans', 'sans-serif'],
        fontSize: '1.8rem',
        fontWeight: '500',
        textShadow: '1px 1px 5px #9CA6B5',
        lineHeight: '1.5',
    },
    goDown: {
        color: '#a68674',
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

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <Typography variant="h4" className={classes.textWelcome}>
                        welcome to
                    </Typography>
                    <Typography variant="h1" className={classes.textTitle}>
                       My Kids Rx
                    </Typography>
                    <Typography variant="h4" className={classes.textWelcome}>
                        Pediatric Health Records
                    </Typography>
                    <div className={classes.containerInfo}>
                        <Typography variant='h5' className={classes.textInfo}>
                            phone: (038) 532 - 5237
                            <br></br>
                            email: kidsrx@email.com
                        </Typography>
                        <Typography variant='h5' className={classes.textInfo}>
                            Mon-Fri: 8:00 AM - 5:00 PM
                            <br></br>
                            Sat-Sun: 10:00 AM - 2:00 PM
                            <br></br>
                            Holidays: 11:00 AM - 1:00 PM
                        </Typography>
                        <Typography variant='h5' className={classes.textInfo}>
                            420 Carlisle St.
                            <br></br>
                            Seattle, Washington
                            <br></br>
                            25408
                        </Typography>
                    </div>

                    {/* a button that will scroll down to the about us section */}
                    <Typography variant="h4" className={classes.textInfo} sx={{textAlign: 'center'}}>
                    View Our Services + Features
                </Typography>
                    <Scroll to="our-services" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}