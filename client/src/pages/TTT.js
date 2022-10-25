import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//import x and o images 
//TODO: change these to chromosome and rbc once game is functional
import X from '../assets/images/x.png';
import O from '../assets/images/o.png';

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
      //for each square set as player X or player O
      const [player1, setPlayer1] = useState('X');
      const [player2, setPlayer2] = useState('X');
      const [player3, setPlayer3] = useState('X');
      const [player4, setPlayer4] = useState('X');
      const [player5, setPlayer5] = useState('X');
      const [player6, setPlayer6] = useState('X');
      const [player7, setPlayer7] = useState('X');
      const [player8, setPlayer8] = useState('X');
      const [player9, setPlayer9] = useState('X');

      return (
        <Box sx={{ flexGrow: 1 }}>
            <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <img alt='x' src={player1 === 'X' ? X : O}></img>
                    </Item>
                    <Item>
                        <img alt='x' src={player2 === 'X' ? X : O}></img>
                    </Item>
                    <Item>
                        <img alt='x' src={player3 === 'X' ? X : O}></img>
                    </Item>
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