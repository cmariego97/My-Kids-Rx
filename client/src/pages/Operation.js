import React from 'react';
import Container from '@mui/material/Container';
import '../assets/css/operation.css';
//import game images
import Pencil from '../assets/images/pencil.png';
import Butterfly from '../assets/images/butterfly.jpeg';
import Wishbone from '../assets/images/wishbone.jpeg';
import Apple from '../assets/images/apple.jpeg';
import Hammer from '../assets/images/hammer.jpeg';
import Light from '../assets/images/light.png'
//import arrow icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Operation = ({changeGame}) => {
    //keeps track of current score
    let score = 0;
    //declare global variables for timer
    var timerInterval;
    var secondsLeft = 30;
    function startGame(ev) {
      ev.preventDefault();
      //hide start game button once game starts
      document.querySelector('#start').style.display = 'none';
      document.querySelector('#item').textContent = 'Remove the apple!'
      //start timer
      timerInterval = setInterval(function() {
        secondsLeft--;
        document.querySelector('#timer').textContent = "🕓 " + secondsLeft + " seconds left";
        //end game if time expires
        if(secondsLeft === 0) {
          endGame();
        }
      }, 1000)
    }
    //while dragging
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }

      function allowDrop(ev) {
        ev.preventDefault();
      }
      //upon drop
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        //add 1 to score
        score++;
        document.querySelector('#score').textContent = score;
        document.querySelector('#warning').textContent = 'Object successfully removed! +1 point!'
        //prevent dragged item from continuing to be displayed in previous position
        var items = document.querySelector('#target').children.length;
        var index = items - 1;
        var discardedItem = document.querySelector('#target').children[index];
        discardedItem.style.display = 'none';
        //set next item to draggables and instruct user which object it is
        if (discardedItem.id === 'drag4') {
          document.querySelector('#drag6').setAttribute('draggable', 'true');
          document.querySelector('#item').textContent = 'Remove the light bulb!'
        }
        if (discardedItem.id === 'drag6') {
          document.querySelector('#drag3').setAttribute('draggable', 'true');
          document.querySelector('#item').textContent = 'Remove the wishbone!'
        }
        if (discardedItem.id === 'drag3') {
          document.querySelector('#drag1').setAttribute('draggable', 'true');
          document.querySelector('#item').textContent = 'Remove the pencil!'
        }
        if (discardedItem.id === 'drag1') {
          document.querySelector('#drag5').setAttribute('draggable', 'true');
          document.querySelector('#item').textContent = 'Remove the hammer!'
        }
        if (discardedItem.id === 'drag5') {
          document.querySelector('#drag2').setAttribute('draggable', 'true');
          document.querySelector('#item').textContent = 'Remove the butterfly!'
        }
        //end game if all objects removed
        if (items === 6) {
            endGame();
        }
      }

      function endGame() {
            clearInterval(timerInterval);
            document.querySelector('#timer').textContent = '';
            document.querySelector('#item').textContent = '';
            document.querySelector('#trash').textContent = '';
            document.querySelector('#game-over').textContent = `Game over! Your final score is ${score}`;
            //reveal play gain button
            document.querySelector('#again').style.display = 'block';
            //retrieve high score from local storage
            var oldScore = localStorage.getItem('highScore');
            if (oldScore === null || oldScore < score) {
                localStorage.setItem('highScore', score);
                document.querySelector('#high-score').textContent = `High score: ${score}`
            }
            else {
                document.querySelector('#high-score').textContent = `High score: ${oldScore}`
            }
      }

      function penalty() {
        //decrease score by 1
        score--;
        document.querySelector('#score').textContent = score;
        document.querySelector('#warning').textContent = 'Oh no! You touched the patient! -1 point!'
      }
    return (
        <div id='screen' style={{marginTop: '70px'}}>
            <h1 id='title'>Operation</h1>
        <Container id='cont' maxWidth="lg">
            {/* column 1 */}
        <div id='col-1'>
                <div id='man' onClick={penalty}></div>
                  <img src={Pencil} alt='pencil' draggable="false" onDragStart={drag}
                  id="drag1"></img>
                  <img src={Butterfly} alt='butterfly' draggable="false" onDragStart={drag}
                  id="drag2"></img>
                  <img src={Wishbone} alt='wishbone' draggable="false" onDragStart={drag}
                  id="drag3"></img>
                  <img src={Apple} alt='apple' draggable="true" onDragStart={drag}
                  id="drag4"></img>
                  <img src={Hammer} alt='hammer' draggable="false" onDragStart={drag}
                  id="drag5"></img>
                  <img src={Light} alt='light' draggable="false" onDragStart={drag}
                  id="drag6"></img>
         </div>
         {/* column 2 */}
         <div id='col-2' style={{display: 'flex'}}>
            <div 
            id='info' style={{background: '#a68674'}}
            >
                <h2 id='timer'></h2>
                <button id='back' onClick={() => changeGame('Home')}>
                  <FontAwesomeIcon icon={faArrowLeft}style={{marginRight:'10px'}}></FontAwesomeIcon>
                  Back to Gaming Homepage</button>
                <h2>Score: <span id='score'>0</span></h2>
                <p id='warning'>Remove the objects that do not belong! Do not touch the patient!</p>
                <p id='game-over'></p>
                <button id='again' onClick={() => changeGame('Home')} style={{display: 'none'}}>Play Again</button>
                <button id='start' onClick={startGame}>Start Game</button>
                <p id='high-score'></p>
                <p id='item' style={{color: 'white'}}></p>
                <p id='trash' style={{marginTop: '10%'}}>Throw away objects in the container below</p>
            </div>
            <div 
                style={{background: 'black',borderRadius: '10px', border: '10px solid grey'}}
                onDrop={drop}
                onDragOver={allowDrop}
                id="target"
            >
            </div>
         </div>
      </Container>
        </div>
    )
}

export default Operation;