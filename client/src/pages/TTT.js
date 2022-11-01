import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//import images 
import X from '../assets/images/x.jpg';
import O from '../assets/images/cell.jpeg';
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
//import custom css
import '../assets/css/ttt.css';
//import arrow icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function TTT({ changeGame }) {
    //styling for grid items
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '300px',
        border: '1px solid black',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center'
    }));
    //alternate between player X's turn and player O's turn
    const [turn, setTurn] = useState('X');
    const changeTurn = () => {
        if (turn === 'X') {
            setTurn('O');
        }
        if (turn === 'O') {
            setTurn('X');
        }
    };
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
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);
    const [click5, setClick5] = useState(false);
    const [click6, setClick6] = useState(false);
    const [click7, setClick7] = useState(false);
    const [click8, setClick8] = useState(false);
    const [click9, setClick9] = useState(false);

    //hide or show image
    const hidden = { display: 'none' };
    const visible = { display: 'inline' };
    //render x or o when each square is clicked on depending on whose turn it is
    const square1 = () => {
        if (turn === 'X') {
            setPlayer1('X');
        }
        if (turn === 'O') {
            setPlayer1('O');
        }
        setClick1(!click1);
    };
    const square2 = () => {
        if (turn === 'X') {
            setPlayer2('X');
        }
        if (turn === 'O') {
            setPlayer2('O');
        }
        setClick2(!click2);
    };
    const square3 = () => {
        if (turn === 'X') {
            setPlayer3('X');
        }
        if (turn === 'O') {
            setPlayer3('O');
        }
        setClick3(!click3);
    };
    const square4 = () => {
        if (turn === 'X') {
            setPlayer4('X');
        }
        if (turn === 'O') {
            setPlayer4('O');
        }
        setClick4(!click4);
    };
    const square5 = () => {
        if (turn === 'X') {
            setPlayer5('X');
        }
        if (turn === 'O') {
            setPlayer5('O');
        }
        setClick5(!click5);
    };
    const square6 = () => {
        if (turn === 'X') {
            setPlayer6('X');
        }
        if (turn === 'O') {
            setPlayer6('O');
        }
        setClick6(!click6);
    };
    const square7 = () => {
        if (turn === 'X') {
            setPlayer7('X');
        }
        if (turn === 'O') {
            setPlayer7('O');
        }
        setClick7(!click7);
    };
    const square8 = () => {
        if (turn === 'X') {
            setPlayer8('X');
        }
        if (turn === 'O') {
            setPlayer8('O');
        }
        setClick8(!click8);
    };
    const square9 = () => {
        if (turn === 'X') {
            setPlayer9('X');
        }
        if (turn === 'O') {
            setPlayer9('O');
        }
        setClick9(!click9);
    };
    //initially hide play again button
    var btnDisplay;
    btnDisplay = { display: 'none' };

    const chooseWinner = () => {
        //all cases of 1 player winning
        if ((player1 === 'X' && click1 && player2 === 'X' && click2 && player3 === 'X' && click3) ||
            (player4 === 'X' && click4 && player5 === 'X' && click5 && player6 === 'X' && click6) ||
            (player7 === 'X' && click7 && player8 === 'X' && click8 && player9 === 'X' && click9) ||
            (player1 === 'X' && click1 && player4 === 'X' && click4 && player7 === 'X' && click7) ||
            (player2 === 'X' && click2 && player5 === 'X' && click5 && player8 === 'X' && click8) ||
            (player3 === 'X' && click3 && player6 === 'X' && click6 && player9 === 'X' && click9) ||
            (player1 === 'X' && click1 && player5 === 'X' && click5 && player9 === 'X' && click9) ||
            (player7 === 'X' && click7 && player5 === 'X' && click5 && player3 === 'X' && click3) ||
            (player1 === 'O' && click1 && player2 === 'O' && click2 && player3 === 'O' && click3) ||
            (player4 === 'O' && click4 && player5 === 'O' && click5 && player6 === 'O' && click6) ||
            (player7 === 'O' && click7 && player8 === 'O' && click8 && player9 === 'O' && click9) ||
            (player1 === 'O' && click1 && player4 === 'O' && click4 && player7 === 'O' && click7) ||
            (player2 === 'O' && click2 && player5 === 'O' && click5 && player8 === 'O' && click8) ||
            (player3 === 'O' && click3 && player6 === 'O' && click6 && player9 === 'O' && click9) ||
            (player1 === 'O' && click1 && player5 === 'O' && click5 && player9 === 'O' && click9) ||
            (player7 === 'O' && click7 && player5 === 'O' && click5 && player3 === 'O' && click3)) {
            document.querySelector('#test').textContent = `Game over! The winner is player ${turn}`;
            //give option to play again
            btnDisplay = { display: 'block', marginBottom: '2%' };
        }
    };
    //resets game
    const resetGame = () => {
        setClick1(false);
        setClick2(false);
        setClick3(false);
        setClick4(false);
        setClick5(false);
        setClick6(false);
        setClick7(false);
        setClick8(false);
        setClick9(false);
        btnDisplay = { display: 'none' };
        document.querySelector('#test').textContent = '';
    };
    
    return (
        <Box sx={{ flexGrow: 1, background: "#a68674", padding: "1%", marginTop: '70px'}}>
            {chooseWinner()}
            <h1 style={{ textAlign: 'center', fontSize: "250%" }}>Tic Tac Toe</h1>
            <Button id='back-btn' sx={{margin: '0 auto', backgroundColor: '#3f4868', display: 'flex', justifyContent: 'center', my:'15px'}}variant="contained" onClick={() => changeGame('Home')}>
                <FontAwesomeIcon icon={faArrowLeft} style={{marginRight:'10px'}}></FontAwesomeIcon>
                Back to gaming homepage
            </Button>
            <Button id='change-btn' sx={{margin: '0 auto', backgroundColor: '#3f4868', display: 'flex', justifyContent: 'center'}}variant="contained" onClick={() => changeTurn()}>Change Player
            </Button>
            <h2 style={{textAlign: 'center'}}>{`It is player ${turn}'s turn`}</h2>
            <h3 id='test'></h3>
            <Button id='again-btn' variant="contained" sx={btnDisplay} onClick={() => resetGame()}>Play Again
            </Button>

            <Grid container spacing={2}>
                {/* column 1 */}
                <Grid item xs={4}>
                    <Item onClick={() => square1()}>
                        <img
                            alt='game piece'
                            style={!click1 ? hidden : visible}
                            src={player1 === 'X' ? X : O}
                        ></img>
                    </Item>
                    <Item onClick={() => square2()}>
                        <img
                            alt='game piece' src={player2 === 'X' ? X : O}
                            style={!click2 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => square3()}>
                        <img alt='game piece' src={player3 === 'X' ? X : O}
                            style={!click3 ? hidden : visible}
                        ></img>
                    </Item>
                </Grid>
                {/* column 2 */}
                <Grid item xs={4}>
                    <Item onClick={() => square4()}>
                        <img alt='game piece' src={player4 === 'X' ? X : O}
                            style={!click4 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => square5()}>
                        <img alt='game piece' src={player5 === 'X' ? X : O}
                            style={!click5 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => square6()}>
                        <img alt='game piece' src={player6 === 'X' ? X : O}
                            style={!click6 ? hidden : visible}
                        ></img>
                    </Item>
                </Grid>
                {/* column 3 */}
                <Grid item xs={4}>
                    <Item onClick={() => square7()}>
                        <img alt='game piece' src={player7 === 'X' ? X : O}
                            style={!click7 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => square8()}>
                        <img alt='game piece' src={player8 === 'X' ? X : O}
                            style={!click8 ? hidden : visible}
                        ></img>
                    </Item>
                    <Item onClick={() => square9()}>
                        <img alt='game piece' src={player9 === 'X' ? X : O}
                            style={!click9 ? hidden : visible}
                        ></img>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TTT;