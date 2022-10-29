import React from 'react';
import Container from '@mui/material/Container';
//import game images
import Man from '../assets/images/operation.jpeg';
import Pencil from '../assets/images/pencil.png';
import Butterfly from '../assets/images/butterfly.jpeg';
import Wishbone from '../assets/images/wishbone.jpeg';
import Apple from '../assets/images/apple.jpeg';
import Hammer from '../assets/images/hammer.jpeg';
import Light from '../assets/images/light.png'

const Operation = ({changeGame}) => {
    let score = 0;
    
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }

      function allowDrop(ev) {
        ev.preventDefault();
      }
      //TODO: add timer
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        score++;
        document.querySelector('#score').textContent = score;
        document.querySelector('#warning').textContent = 'Object successfully removed! +1 point!'
        var items = document.querySelector('#target').children.length;
        var index = items - 1;
        var discardedItem = document.querySelector('#target').children[index];
        discardedItem.style.display = 'none';
        if (items === 6) {
            document.querySelector('#game-over').textContent = `All items removed! Your final score is ${score}`;
            var oldScore = localStorage.getItem('highScore');
            if (oldScore === null || oldScore < score) {
                localStorage.setItem('highScore', score);
                document.querySelector('#high-score').textContent = `High score: ${score}`
            }
            else {
                document.querySelector('#high-score').textContent = `High score: ${oldScore}`
            }
        }
      }

      function penalty() {
        score--;
        document.querySelector('#score').textContent = score;
        document.querySelector('#warning').textContent = 'Oh no! You touched the patient or table! -1 point!'
      }
    return (
        <Container maxWidth="lg" sx={{display: 'flex'}}>
            {/* column 1 */}
        <div style={{ background: 'white', height: '100vh', width: '50%'}}>
                <img src={Man} alt='operation-game' style={{height: '100vh', border: '1px solid black'}} onClick={penalty}>
                </img>
                <img src={Pencil} alt='pencil' style={{width: '100px', position: 'absolute', bottom: '510px', left: '190px'}} draggable="true" onDragStart={drag}
                id="drag1"></img>
                <img src={Butterfly} alt='butterfly' style={{width: '50px', position: 'absolute', bottom: '350px', left: '230px'}} draggable="true" onDragStart={drag}
                id="drag2"></img>
                <img src={Wishbone} alt='wishbone' style={{width: '30px', position: 'absolute', bottom: '100px', left: '230px'}} draggable="true" onDragStart={drag}
                id="drag3"></img>
                <img src={Apple} alt='apple' style={{width: '30px', position: 'absolute', bottom: '100px', left: '170px'}} draggable="true" onDragStart={drag}
                id="drag4"></img>
                <img src={Hammer} alt='hammer' style={{width: '30px', position: 'absolute', bottom: '300px', left: '170px'}} draggable="true" onDragStart={drag}
                id="drag5"></img>
                <img src={Light} alt='light' style={{width: '30px', position: 'absolute', bottom: '600px', left: '150px'}} draggable="true" onDragStart={drag}
                id="drag6"></img>
         </div>
         {/* column 2 */}
         <div style={{width: '50%', display: 'flex', flexDirection: 'column'}}>
            <div 
            style={{background: 'white', height: '50vh'}}
            >
                <h2>Score: <span id='score'>0</span></h2>
                <p id='warning'>Remove the objects that do not belong! Do not touch the patient or table!</p>
                <p id='game-over'></p>
                <button onClick={() => changeGame('Home')}>Play Again</button>
                <p id='high-score'></p>
                <p style={{marginTop: '30%'}}>Throw away objects in the container below</p>
            </div>
            <div 
                style={{background: 'black', height: '50vh', borderRadius: '10px', border: '10px solid grey'}}
                onDrop={drop}
                onDragOver={allowDrop}
                id="target"
            >
            </div>
         </div>
      </Container>
    )
}

export default Operation;