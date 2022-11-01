import React, {useState} from 'react';
import moment from 'moment';
//import MUI components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//query
import {useQuery} from '@apollo/client';
import { QUERY_MESSAGES } from '../utils/queries'
//mutation
import { useMutation } from '@apollo/client';
import { ADD_MESSAGE } from '../utils/mutations';
import Auth from '../utils/auth';
// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
//import custom css
import '../assets/css/message.css';
//import image
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
    cardMessages: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: '0.25rem auto',
        padding: '2rem 2.5rem',
        width: '40%',
        minWidth: '550px',
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

const Messaging = () => {
    const classes = useStyles();
    //retrieve email from jwt to use to find specific patient
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    //for query
    const { loading, data } = useQuery(QUERY_MESSAGES, {
        variables: { email }
    });
    //retrieves patient's provider from jwt, used in the provider input field of form
    const to = acctData.data.provider;
    //renders sent messages section
    const renderMessage = () => {
        if (loading) {
            return (
                <Typography variant="body2" color="text.secondary">
                    Loading messages...
            </Typography>
            )
        }
        else {
            //if patient not in database
            if (!data.onePatient) {
                return (
                    <p>Email not on file with a provider, contact your provider for details!</p>
                )
            }
            else {
                const messages = data.onePatient.messages;
                if (messages.length !== 0) {
                    return (
                        <Typography variant="body2" color="text.secondary">
                            {messages.map((message)=> (
                                <div>
                                    <h2>{`Message to ${message.to}`}</h2>
                                    <h3>{`Sent on ${message.date} at ${message.time}`}</h3>
                                    <p>{message.content}</p>
                                </div>
                            ))}
                        </Typography>
                    )
                }
                else {
                    //if no messages in database for the patient
                    return (
                        <p>No sent messages on file!</p>
                    ) 
                }
            }
        }
    }
    //renders form
    const renderForm = () => {
        if (loading) {
            return (
                <Typography variant="body2" color="text.secondary">
                    Loading...
            </Typography>
            )
        }
        else {
            //if patient not in database
            if (!data.onePatient) {
                return (
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                        Send a Message
                        </Typography>
                        <p>Messaging will not be enabled until you contact your provider!</p>
                    </div>
                )
            }
            else {
                return(
                    <div sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Send a Message
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={[{label: to}]}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="To" />}
                            />
                            <TextField
                            id="standard-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            value={content}
                            onChange={handleChange}
                            variant="standard"
                            />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button id='send' sx={{backgroundColor: '#de7171'}} variant="contained" onClick={handleFormSubmit}>Send</Button>
                    </CardActions>
                    <p id="conf-message"></p>
                </div>
                )
            }
        }
    }

    //for mutation
    const date = moment().format('YYYY-MM-DD');
    const time = moment().format('hh:mm:ss A');
    const [content, setContent] = useState('');

    const [addMessage, {error}] = useMutation(ADD_MESSAGE);

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        try {
            const { data } = await addMessage({
                variables: {email, to, date, time, content}
            })
            //reset content field
            setContent('');
            
            const success = data.addMessage.messages
            const index = success.length - 1
            //confirmation message
            document.querySelector('#conf-message').textContent = `Message delivered at to ${success[index].to} at ${success[index].time}`;
            //add new message to messages list
            const recipient = document.createElement('h2');
            recipient.textContent = `Message to ${success[index].to}`;
            const when = document.createElement('h3');
            when.textContent = `Sent on ${success[index].date} at ${success[index].time}`;
            const text = document.createElement('p');
            text.textContent = success[index].content;
            document.querySelector('#new-container').append(recipient, when, text)
            document.querySelector('#new-header').textContent = 'New Messages';
        }
        catch (err) {
            console.error(err);
            document.querySelector('#conf-message').textContent = `Message unable to be sent to ${to}`
        }
    }
    //set value of content state variable from input field
    const handleChange = (e) => {
        const { value } = e.target;
        setContent(value);

    }
    //if not sent message screen render messaging homepage
    return (
        <div className={classes.cardMessages}>
            {/* load sent messages */}
            <div sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Past Messages
                    </Typography>
                    {renderMessage()}
                    {/* new messages header that displays when new message is added */}
                    <Typography gutterBottom variant="h5" component="div" id='new-header'>
                    </Typography>
                    {/* new messages go here */}
                    <Typography variant="body2" color="text.secondary">
                    <div id='new-container'>
                    </div>
                    </Typography>
                </CardContent>
            </div>
            {/* form to send a message */}
            {renderForm()}
    </div>
    )
}

export default Messaging;