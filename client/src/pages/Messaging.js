import React, {useState} from 'react';
import moment from 'moment';
//import MUI components
import { Box, Typography } from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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

const Messaging = () => {

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
                    <Box>
                        <Typography gutterBottom variant="h5" component="div">
                        Send a Message
                        </Typography>
                        <p>Messaging will not be enabled until you contact your provider!</p>
                    </Box>
                )
            }
            else {
                return(
                    <Box sx={{ maxWidth: 345 }}>
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
                        {/* //TODO: make it prettier */}
                            <Button sx={{backgroundColor: '#3f4868'}} variant="contained" onClick={handleFormSubmit}>Send</Button>
                        </CardActions>
                        <Typography variant="p" id="conf-message"></Typography>
                    </Box>
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
        <Box className="wrap siteWrap">
            <Box className="card">
                {/* load sent messages */}
                <Box sx={{ maxWidth: 345 }}>
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
                </Box>
                {/* form to send a message */}
                {renderForm()}
            </Box>
        </Box>
        
    )
}

export default Messaging;