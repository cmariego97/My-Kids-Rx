import React from 'react';
//query
import {useQuery} from '@apollo/client';
import { QUERY_MESSAGES } from '../utils/queries';

const Message = () => {
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_MESSAGES, {
        variables: { email }
    });
    const messages = data.onePatient.messages;
    //to, date, time, content
    return (
        <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
        </Typography>
    )
}

export default Message;