import React,{useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PROFILE } from '../utils/queries';
import { UPDATE_PASS, DEL_USER } from '../utils/mutations';

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';

// import MUI components
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import other pages
import MedicalInfo from './Medical';
import Messages from './Messaging';
import Appointments from './Appointment';
import LabResults from './Lab';
import ImagingResults from './Imaging';

//import images
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
import avatarImg from '../assets/images/avatars/avatar1-pink.png';
import { textTransform } from '@mui/system';

// import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUserPen, faTrashCan, faEnvelope, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

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
        h1: {
            fontWeight: 600,
            fontSize: 80,
        },
        h2: {
            fontWeight: 500,
            fontSize: 70,
        },
        h3: {
            fontFamily: 'Atma',
            fontSize: 50,
        },
        h4: {
            fontWeight: 600,
            fontSize: 28,
            textTransform: 'uppercase',
            lineHeight: '2rem',
        },
        h5: {
            fontFamily: 'Nunito',
            fontWeight: 500,
            fontSize: 18,
            textTransform: 'uppercase',
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
    bigSpace: {
        margin: '5rem 1rem 2rem',     
    },
    littleSpace: {
        margin: '2.5rem 1rem 2rem',
    },
    wrapContainer: {
        margin: '0 auto',
        width: '70%',
    },
    rowContainer: {
        display: 'flex',
    },
    cardProfile: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: '10rem auto',
        width: '30%',
        minWidth: '320px',
        minHeight: '500px',
        backgroundColor: '#AA858E',
        borderRadius: '5px',
        boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
    },
    cardMedicalInfo: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: '10rem auto',
        padding: '2rem 2.5rem',
        width: '60%',
        minWidth: '320px',
        minHeight: '500px',
        backgroundColor: '#F5F2EF',
        borderRadius: '5px',
        boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
    },
    avatarImage: {
        margin: '-30px auto 0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
    },
    greeting: {
        fontFamily: [ 'Nunito Sans', 'sans-serif' ],
        textTransform: 'uppercase',
    },
    boxUserName: {
        display: 'flex',
        overflow: 'hidden',
    },
    boxUserInfo: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    userName: {
        margin: '0 auto',
        textAlign: 'space-between',
    },
    userInfo: {
        margin: '0 auto',
        padding: '0.25rem',
    }
}))

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#de7171',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#a68674',
        },
        '&:hover fieldset': {
            borderColor: '#f58c22',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#de7171',
        },
    },
});

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
    const btnstyle={margin:'8px 0'}

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

    //for popover
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickPopper = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClosePopper = () => {
        setAnchorEl(null);
    };
    const openPopper = Boolean(anchorEl);
    const id = openPopper ? 'simple-popover' : undefined;

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
                    <div className={classes.wrapContainer}>

                        {/* ROW 1 */}
                        <div className={classes.rowContainer}>
                            {/* Profile Card - avatar + name */}
                            <div className={classes.cardProfile}>
                                <Avatar 
                                    className={classes.avatarImage}
                                    alt="pink-haired girl with headphones" 
                                    src={`${avatarImg}`}
                                    sx={{ width: 280, height: 280 }}
                                />

                                {/* greeting + user name */}
                                <div className={classes.littleSpace}>
                                    <Typography variant="p" className={classes.greeting}>
                                        Hello there,
                                    </Typography>
                                    <div className={classes.boxUserName}>
                                        <Typography variant="h3" className={classes.userName}>
                                            {`${fullName}`}
                                        </Typography>
                                    </div>
                                </div>

                                <Divider variant="middle" textAlign="right">
                                    <div>
                                        <Typography variant="p">
                                            patient info 
                                        </Typography>
                                        <IconButton aria-describedby={id} onClick={handleClickPopper}>
                                            <FontAwesomeIcon icon={faUserPen} style={{color: "#3f4868", height: "18", width: "18"}} />
                                        </IconButton>

                                        <Popover
                                            id={id}
                                            open={openPopper}
                                            anchorEl={anchorEl}
                                            onClose={handleClosePopper}
                                            anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                            }}
                                        >
                                            {/* popover content here */}
                                            <Typography sx={{ p: 2 }}>User Settings</Typography>
                                            <div>
                                                <Button variant="outlined" onClick={handleOpen}>
                                                    <Typography variant="p" className={classes.settingsOption}>
                                                        Change Password
                                                    </Typography> 
                                                </Button>
                                                <Button variant="outlined" onClick={initDelete}>
                                                    <Typography variant="p" className={classes.settingsOption}>
                                                        Delete Account
                                                    </Typography> 
                                                </Button>
                                            </div>
                                        </Popover>
                                    </div>
                                </Divider>
                                
                                {/* user info + settings */}
                                <div className={classes.littleSpace}>
                                    <div className={classes.boxUserInfo}>
                                        <Typography variant="h5" className={classes.userInfo}>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <span>{`${user.email}`}</span>
                                        </Typography>
                                    </div>
                                    <div className={classes.boxUserInfo}>
                                        <Typography variant="h5" className={classes.userInfo}>
                                            <FontAwesomeIcon icon={faUserDoctor}/>
                                            <span>{`${user.provider}`}</span>
                                        </Typography>
                                    </div>
                                </div>
                            </div>

                            {/* confirm msg to delete */}
                            {/* // TODO: make this into a popover */}
                            <div className={classes.confirmDel}>
                                <p id='conf-delete'></p>

                                <Button style={visible ? show : hidden} onClick={confDelete}>Yes</Button>

                                <label style={inputVis ? show : hidden}>Enter password:</label>
                                <input value={delPass} onChange={handleDelChange} style={inputVis ? show : hidden} type='password'></input>

                                <Button style={inputVis ? show : hidden} onClick={delAcct}>Delete Account</Button>
                                <Button style={visible ? show : hidden} onClick={cxDelete}>Cancel</Button>
                                <p id='user-del'></p>
                            </div>
                            
                            {/* MODAL - change password */}
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

                            {/* -------------------------------- */}

                            {/* Medical Info */}
                            <div className={classes.cardMedicalInfo}>
                                <MedicalInfo/>
                            </div>
                        </div>
                        
                        {/* ROW 2 */}
                        <div className={classes.rowContainer}>
                            {/* Messages */}
                            <div className={classes.cardMessages}>
                                <Messages />
                            </div>

                            {/* Appointments */}
                            <div className={classes.cardAppointments}>
                                <Appointments />
                            </div>
                        </div>

                        {/* ROW 3 */}
                        <div className={classes.rowContainer}>
                            {/* Lab Results */}
                            <div className={classes.cardLabResults}>
                                <LabResults />
                            </div>

                            {/* Imaging */}
                            <div className={classes.cardImaging}>
                                <ImagingResults />
                            </div>
                        </div>

                    
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default Profile;