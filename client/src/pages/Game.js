import React, {useState} from 'react';
//import mui components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//import all game pages
import Matching from './Matching';
import TTT from './TTT';
import Operation from './Operation';
//import images
import OpImg from '../assets/images/game-operation.jpeg';
import TttImg from '../assets/images/game-ttt.png';
import MatchImg from '../assets/images/game-match.jpeg';
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
//import custom css
import '../assets/css/game.css';

const Game = () => {
    //styling for grid items
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '75vh',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center'
    }));
    //game state variable to control which game screen is rendered
    const [game, setGame] = useState('Home');
    //fxn to change value of game state variable
    const changeGame = (newGame) => setGame(newGame);
    //for each specific game
    if (game === 'Matching') {
            return (
                <Matching changeGame={changeGame} />
            )
        }
    if (game === 'TTT') {
            return (
                <TTT changeGame={changeGame} />
            )
        }
    if (game === 'Operation') {
        return (
            <Operation changeGame={changeGame}/>
        )
    }
    //if not a specific game then render game homepage
    return (
        <div style={{background: "#a68674", padding: "1%", marginTop: '70px'}}>
            <h1 style={{textAlign: 'center'}}>Choose a game to play!</h1>
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2} id='grid'>
                <Grid class='cust-col'>
                    <Item>
                        <img src={OpImg} alt='operation' style={{width: '250px', margin: '0 auto'}}></img>
                        <p style={{fontSize: '120%'}}>A classic!</p>
                        <Button id='op' sx={{margin: '0 auto', backgroundColor: '#3f4868'}}variant="contained"  onClick={() => changeGame('Operation')}>Play Operation
                         </Button>
                    </Item>
                </Grid>
                <Grid class='cust-col'>
                    <Item>
                        <img src={TttImg} alt='tic tac toe' style={{width: '250px', margin: '0 auto'}}></img>
                        <p style={{fontSize: '120%'}}>Just like you play at school...but check out our game pieces!</p>
                        <Button id='ttt' sx={{margin: '0 auto', backgroundColor: '#3f4868'}}variant="contained" onClick={() => changeGame('TTT')}>Play Tic Tac Toe
                        </Button>
                    </Item>
                </Grid>
                <Grid class='cust-col'>
                    <Item>
                        <img src={MatchImg} alt='matching game' style={{width: '250px', margin: '0 auto'}}></img>
                        <p style={{fontSize: '120%'}}>Play this memory matching game to learn about the human body!</p>
                        <Button id='match' sx={{margin: '0 auto', backgroundColor: '#3f4868'}}variant="contained" onClick={() => changeGame('Matching')}>Play Matching
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        </div>
    )

}

export default Game;