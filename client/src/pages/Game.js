import React, {useState} from 'react';
import Button from '@mui/material/Button';
//import all game pages
import Matching from './Matching';
import TTT from './TTT';
import Operation from './Operation';

const Game = () => {
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
        <div>
            <h1>Choose a game to play!</h1>
            <Button variant="outlined" onClick={() => changeGame('Matching')}>Matching
            </Button>
            <Button variant="outlined" onClick={() => changeGame('TTT')}>Tic Tac Toe
            </Button>
            <Button variant="outlined" onClick={() => changeGame('Operation')}>Operation
            </Button>
        </div>
    )

}

export default Game;