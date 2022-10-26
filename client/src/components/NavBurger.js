import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: '#DE7171',
        fontSize: '2rem',
    },
}));

const FadeMenu = ({page, changePage})  => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // const handleClose = (newPage) => {
    //     setAnchorEl(null);
    //     changePage(newPage);
    // };

    return (
        <div>
        <IconButton
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <SortIcon className={classes.icon} />
        </IconButton>
        <Menu
            id="fade-menu"
            MenuListProps={{
            'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            // onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={() => changePage('Home')}>Home</MenuItem>
            <hr></hr>
            {/* <MenuItem onClick={handleClose('Create')}>Create Account</MenuItem>
            <MenuItem onClick={handleClose('Login')}>Patient Login</MenuItem> */}
            <hr></hr>
            <MenuItem onClick={() => changePage('Profile')}>My Profile</MenuItem>
            <MenuItem onClick={() => changePage('Medical')}>Medical Info</MenuItem>
            <hr></hr>
            {/* <MenuItem onClick={handleClose('Appt')}>Appointments</MenuItem>
            <MenuItem onClick={handleClose('Imaging')}>Imaging Results</MenuItem>
            <MenuItem onClick={handleClose('Lab')}>Lab Results</MenuItem>
            <hr></hr>
            <MenuItem onClick={handleClose('Game')}>Play Games</MenuItem>
            <MenuItem onClick={handleClose('Resources')}>Resources</MenuItem>
            <MenuItem onClick={handleClose('Messaging')}>Messaging</MenuItem> */}
        </Menu>
        </div>
    );
}

export default FadeMenu;
