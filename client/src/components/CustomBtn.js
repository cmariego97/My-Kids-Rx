import React from 'react';
import Auth from '../utils/auth';
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';

// styled button
const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: "5%",
        background: "#FAFBF9",
        color: "#3F4868",
        transform: "none",
        boxShadow: "#3F4868",
        transition: "background .3s,border-color,color .3s",
        "&:hover": {
            color: "#FAFBF9",
            backgroundColor: "#DE7171"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function CustomBtn({changePage, newPage, txt, id}) {
    const btnAction = () => {
        console.log('hi');
        if(!Auth.loggedIn()) {
            document.querySelector(`#${id}`).textContent = 'You must log in or create an account first!';
        }
        else {
            changePage(newPage);
        }
    }

    return (
        <div>
            <StyledButton variant="contained" onClick={()=> btnAction(newPage)}>{txt}</StyledButton>
            <p id={id}></p>
        </div>
    )
}

export default CustomBtn
