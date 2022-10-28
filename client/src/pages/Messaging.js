import React, {useState} from 'react';
import moment from 'moment';
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

const Messaging = () => {
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    //for query
    const { loading, data } = useQuery(QUERY_MESSAGES, {
        variables: { email }
    });
    var messages;
    var to;
    const renderMessage = () => {
        if (loading) {
            return (
                <Typography variant="body2" color="text.secondary">
                    Loading messages...
            </Typography>
            )
        }
        else {
            if (!data.onePatient) {
                return (
                    <p>No messages found for this email, you must first contact your provider to set up your profile!</p>
                )
            }
            else {
                messages = data.onePatient.messages;
                to = messages[0].to
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
        }
    }

    const renderForm = () => {
        if (loading) {
            return (
                <Typography variant="body2" color="text.secondary">
                    Loading...
            </Typography>
            )
        }
        else {
            if (!data.onePatient) {
                return (
                    <p>Messaging will not be enabled until you contact your provider to set up your profile!</p>
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
                        <Button variant="outlined" onClick={handleFormSubmit}>Send</Button>
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
            console.log(data);
            setContent('');
            
            const success = data.addMessage.messages
            const index = success.length - 1
            document.querySelector('#conf-message').textContent = `Message delivered at to ${success[index].to} at ${success[index].time}`;
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

    const handleChange = (e) => {
        const { value } = e.target;
        setContent(value);

    }
    //if not sent message screen render messaging homepage
    return (
        <div>
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