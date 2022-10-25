import React, {useState} from 'react';
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
    // return (

    // )

}

export default Game;