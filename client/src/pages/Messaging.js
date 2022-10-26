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
//TODO: have messages update after sending message
const Messaging = () => {
    const email = 'mgreen@test.com';
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
            console.log(data)
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

    //for mutation
    const date = moment().format('YYYY-DD-MM');
    const time = moment().format('mm:ss:SS A');
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
            document.querySelector('#conf-message').textContent = `The following message was sent to ${success[index].to}: ${success[index].content}`
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

    return (
        <div>
        {/* load sent messages */}
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                My Sent Messages
                </Typography>
                {renderMessage()}
            </CardContent>
        </Card>
        {/* form to send a message */}
        <Card sx={{ maxWidth: 345 }}>
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
        </Card>
    </div>
    )
}

export default Messaging;