import React,{useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PROFILE } from '../utils/queries';
import { UPDATE_PASS, DEL_USER } from '../utils/mutations';

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Typography } from '@material-ui/core';

// import MUI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

//import images
import background from '../assets/images/site-design-images/plain-animal-bg.svg';

const theme = createTheme({
    palette: {
        primary: {
        // Sunglo
            main: "#de7171",
        },
        secondary: {
        // sandrift
            main: "#a68674",
        },
        error: {
        // pomegranate
            main: "#f44336",
        },
        warning: {
        // carrot-orange
            main: "#f58c22"
        },
        info: {
        // fiord
            main: "#3f4868"
        },
        success: {
        // asparagus
            main: "#67a35b"
        },
        neutral: {
        // gull gray
            main: "#9CA6B5"
        }
    },
    typography: {
        fontFamily: [
            'Nunito', 'sans-serif', 'Nunito Sans', 'Atma', 'cursive', 'Londrina Solid'
        ],
        h4: {
            fontWeight: 600,
            fontSize: 28,
            lineHeight: '2rem',
        },
        h5: {
            fontWeight: 100,
            lineHeight: '2rem',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
    },
    bigSpace: {
        marginTop: "5rem"
    },
    littleSpace: {
        marginTop: "2.5rem",
    },
    grid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
    aboutUsWrapper: {
        backgroundColor: "#f4f6fc",
    },
    aboutUs: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "5rem",
    },
    textInfo: {
        color: "#3F4868",
        textAlign: "justify",
    },
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Profile = () => {
    const classes = useStyles();

    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
    //for query
    const { loading, data } = useQuery(QUERY_PROFILE, {
        variables: { email }
    });
    //for mutation
    const [updatePass, {error}] = useMutation(UPDATE_PASS);
    const [delUser, {errorDel}] = useMutation(DEL_USER);

    var titleCase = function(str) {
        var result = [];
        var words = str.split(" ");
        for (var i = 0; i < words.length; i++) {
            var word = words[i].split("");
            word[0] = word[0].toUpperCase();
            result.push(word.join(""));
        }
        return result.join(" ");
    };

    //for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //for password change
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    //for deleting profile
    const [visible, setVisible] = useState(false);
    const [inputVis, setInputVis] = useState(false);
    const show = {display: 'block'};
    const hidden = {display: 'none'};
    const [delPass, setDelPass] = useState('');

    if(loading) {
        return (
            <h1>Loading profile...</h1>
        )
    }
    else {
        const user = data.oneUser
        const fullName= titleCase(`${user.firstName} ${user.lastName}`);

        const handleChange = (e) => {
            const { name, value } = e.target;
            if (name === 'currentPass') {
                setCurrentPass(value);
            }
            if (name === 'newPass') {
                setNewPass(value);
            }
        }

        const handleDelChange = (e) => {
            const {value} = e.target;
            setDelPass(value);
        }

        const changePassword = async (e) => {
            e.preventDefault();
            if (currentPass !== user.password) {
                document.querySelector('#message-el').textContent = 'Current password incorrect, unable to change password'
            }
            else if (!newPass) {
                document.querySelector('#message-el').textContent = 'Please enter a new password'
            }
            else {
                try {
                    const {data} = await updatePass({
                        variables: {email: user.email, password: newPass}
                    })
                    console.log(data);
                    document.querySelector('#message-el').textContent = 'Password successfully changed!'
                }
                catch(err) {
                    console.error(err);
                    document.querySelector('#message-el').textContent = 'Error changing password'
                }
            }
        } 

        const initDelete = () => {
            document.querySelector('#conf-delete').textContent = 'Are you sure you want to delete your patient account?';
            setVisible(true);

        }
        const cxDelete = () => {
            document.querySelector('#conf-delete').textContent = '';
            setVisible(false);
        }
        const confDelete = async(e) => {
            e.preventDefault();
            setInputVis(true);
        }
        const delAcct = async(e) => {
            e.preventDefault();
            if (delPass !== user.password) {
                document.querySelector('#user-del').textContent = 'Incorrect password'
            }
            else {
            try {
                const {data} = await delUser({
                    variables: {email: user.email}
                })
                console.log(data);
                document.querySelector('#user-del').textContent = 'User account deleted!'
                //TODO: logout of acct
            }
            catch(err) {
                console.error(err);
                document.querySelector('#user-del').textContent = 'Error deleting account'
            }
        }
        }

        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <div>
                        <h1>{`Hello, ${fullName}`}</h1>
                        <li>{`Email: ${user.email}`}</li>
                        <li>{`Provider: ${user.provider}`}</li>
                        <h2>Settings:</h2>
                    <Button variant="outlined" onClick={handleOpen}>Change Password
                    </Button>
                    <Button variant="outlined" onClick={initDelete}>Delete Account
                    </Button>
                    <p id='conf-delete'></p>
                    <button style={visible ? show : hidden} onClick={confDelete}>Yes</button>
                    <label style={inputVis ? show : hidden}>Enter password:</label>
                    <input value={delPass} onChange={handleDelChange} style={inputVis ? show : hidden} type='password'></input>
                    <button style={inputVis ? show : hidden} onClick={delAcct}>Delete Account</button>
                    <button style={visible ? show : hidden} onClick={cxDelete}>Cancel</button>
                    <p id='user-del'></p>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Enter Current Password
                        </Typography>
                        <input type='password' name='currentPass'value={currentPass} onChange={handleChange}></input>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Enter New Password
                        </Typography>
                        <input type='password' name='newPass' value={newPass} onChange={handleChange}></input>
                        <button onClick={changePassword}>Change Password</button>
                        <p id='message-el'></p>
                        </Box>
                    </Modal>

                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default Profile;


