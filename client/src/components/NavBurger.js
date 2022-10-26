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

export default function FadeMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Our Services</MenuItem>
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Contact Us</MenuItem>
            <hr></hr>
            <MenuItem onClick={handleClose}>Create Account</MenuItem>
            <MenuItem onClick={handleClose}>Staff Login</MenuItem>
            <MenuItem onClick={handleClose}>Patient Login</MenuItem>
            <hr></hr>
            <MenuItem onClick={handleClose}>My Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </div>
    );
}
