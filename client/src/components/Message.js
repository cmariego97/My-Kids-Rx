import React from 'react';
import Typography from '@mui/material/Typography';
//query
import {useQuery} from '@apollo/client';
import { QUERY_MESSAGES } from '../utils/queries';

const Message = () => {
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_MESSAGES, {
        variables: { email }
    });
    
    if (loading) {
        return (
            <Typography variant="body2" color="text.secondary">
                Loading messages...
        </Typography>
        )
    }
    else {
        console.log(data)
        const messages = data.onePatient.messages;
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

export default Message;