import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUserGear } from '@fortawesome/free-solid-svg-icons';

export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
        <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
            <FontAwesomeIcon icon={faUserGear} style={{color: "#3f4868", height: "18", width: "18"}} />
        </IconButton>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <Typography sx={{ p: 2 }}>
                The content of the Popover.
            </Typography>
        </Popover>
        </div>
    );
}
