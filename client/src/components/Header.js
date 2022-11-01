import React, { useEffect, useState } from 'react';

// import MUI styles
import { IconButton, Collapse, Typography } from '@material-ui/core';

// import icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import react scroll
import { Link as Scroll } from 'react-scroll';
import { Box } from '@mui/material';

export default function Header() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <Box className="wrap" id="header">
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <Box className="headerContainer">
                    <Typography variant="h4" className="textWelcome">
                        welcome to
                    </Typography>
                    <Typography variant="h1" className="headerTitle">
                        My Kids Rx
                    </Typography>
                    <Typography variant="h5" className="textWelcome">
                        Pediatric Health Records
                    </Typography>

                    {/* //TODO: find a place for this */}
                    {/* office info */}
                    {/* <Box className="headerInfoContainer">
                        <Typography variant='h5' className="headerInfoText">
                            phone: (038) 532 - 5237
                            <br></br>
                            email: kidsrx@email.com
                        </Typography>
                        <Typography variant='h5' className="headerInfoText">
                            Mon-Fri: 8:00 AM - 5:00 PM
                            <br></br>
                            Sat-Sun: 10:00 AM - 2:00 PM
                            <br></br>
                            Holidays: 11:00 AM - 1:00 PM
                        </Typography>
                        <Typography variant='h5' className="headerInfoText">
                            420 Carlisle St.
                            <br></br>
                            Seattle, Washington
                            <br></br>
                            25408
                        </Typography>
                    </Box> */}
                    {/* a button that will scroll down to the about us section */}
                    <Scroll to="our-services" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className="goDown" />
                        </IconButton>
                    </Scroll>
                </Box>
            </Collapse>
        </Box>
    );
}