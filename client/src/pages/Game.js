import React, {useState} from 'react';
import Button from '@mui/material/Button';
//import all game pages
import Matching from './Matching';
import TTT from './TTT';

const Game = () => {
    const [game, setGame] = useState('Home');
    //for each specific game
    if (game === 'Matching') {
            return (
                <Matching />
            )
        }
    if (game === 'TTT') {
            return (
                <TTT />
            )
        }
    //if not a specific game then render game homepage
    return (
        <div>
            <h1>Choose a game to play!</h1>
            <Button variant="outlined" onClick={() => setGame('Matching')}>Matching
            </Button>
            <Button variant="outlined">Tic Tac Toe
            </Button>
        </div>
    )

}

export default Game;