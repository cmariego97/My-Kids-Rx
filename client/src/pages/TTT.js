import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
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
      //alternate between player X's turn and player O's turn
      const [turn, setTurn] = useState('X');
      const changeTurn = () => {
        if (turn === 'X') {
            setTurn('O')
        }
        if (turn === 'O') {
            setTurn('X')
        }
      }
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
      //for each square have image hidden until clicked on
      const [click1, setClick1] = useState(false)
      const [click2, setClick2] = useState(false)
      const [click3, setClick3] = useState(false)
      const [click4, setClick4] = useState(false)
      const [click5, setClick5] = useState(false)
      const [click6, setClick6] = useState(false)
      const [click7, setClick7] = useState(false)
      const [click8, setClick8] = useState(false)
      const [click9, setClick9] = useState(false)

      //hide or show image
      const hidden = {display:'none'};
      const visible = {display: 'inline'};

      return (
        <Box sx={{ flexGrow: 1 }}>
            <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
            <Button variant="outlined" onClick={() => changeTurn()}>Change Player
            </Button>
            <h2>{`It is player ${turn}'s turn`}</h2>

            <Grid container spacing={2}>
                {/* column 1 */}
                <Grid item xs={4}>
                    <Item onClick={() => setClick1(!click1)}>
                        <img 
                            alt='game piece' 
                            style={!click1 ? hidden : visible}
                            src={player1 === 'X' ? X : O}
                            ></img>
                    </Item>
                    <Item onClick={() => setClick2(!click2)}>
                        <img 
                            alt='game piece' src={player2 === 'X' ? X : O}
                            style={!click2 ? hidden : visible}
                            ></img>
                    </Item>
                    <Item onClick={() => setClick3(!click3)}>
                        <img alt='game piece' src={player3 === 'X' ? X : O}
                        style={!click3 ? hidden : visible}
                        ></img>
                    </Item>
                </Grid>
                {/* column 2 */}
                <Grid item xs={4}>
                    <Item onClick={() => setClick4(!click4)}>
                        <img alt='game piece' src={player4 === 'X' ? X : O}
                        style={!click4 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => setClick5(!click5)}>
                        <img alt='game piece' src={player5 === 'X' ? X : O}
                        style={!click5 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => setClick6(!click6)}>
                        <img alt='game piece' src={player6 === 'X' ? X : O}
                        style={!click6 ? hidden : visible}
                        ></img>
                    </Item>
                </Grid>
                {/* column 3 */}
                <Grid item xs={4}>
                    <Item onClick={() => setClick7(!click7)}>
                        <img alt='game piece' src={player7 === 'X' ? X : O}
                        style={!click7 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => setClick8(!click8)}>
                        <img alt='game piece' src={player8 === 'X' ? X : O}
                        style={!click8 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => setClick9(!click9)}>
                        <img alt='game piece' src={player9 === 'X' ? X : O}
                        style={!click9 ? hidden : visible}
                        ></img>
                    </Item>
                </Grid>
            </Grid>
        </Box>
      )
}

export default TTT;