import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const TTT = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '200px',
        border: '1px solid black'
      }));

      return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </Grid>
            </Grid>
        </Box>
      )
}

export default TTT;