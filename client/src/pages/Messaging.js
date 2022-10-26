import React from 'react';
import Message from '../components/Message';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
//mutation
import { useMutation } from '@apollo/client';
import { ADD_MESSAGE } from '@apollo/client';

const Messaging = () => {

    const [addMessage, {error}] = useMutation(ADD_MESSAGE);
    const handleFormSubmmit = async(e) => {
        e.preventDefault();
        try {
            
        }
    }

    return (
        <div>
        {/* load sent messages */}
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                My Sent Messages
                </Typography>
                <Message />
            </CardContent>
        </Card>
        {/* form to send a message */}
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>
    )
}

export default Messaging;