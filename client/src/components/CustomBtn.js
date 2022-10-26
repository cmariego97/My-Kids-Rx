import React from 'react'
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

function CustomBtn(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomBtn
