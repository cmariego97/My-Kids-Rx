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
      //TODO: just drag to trash can icon or something
      //TODO: add timer
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        score++;
        document.querySelector('#score').textContent = score;
        document.querySelector('#warning').textContent = 'Object successfully removed! +1 point!'
      }

      function penalty() {
        score--;
        document.querySelector('#score').textContent = score;
        document.querySelector('#warning').textContent = 'Oh no! You touched the patient or table! -1 point!'
      }
      function next() {
        document.querySelector('#warning').textContent = 'Remove the objects that do not belong! Do not touch the patient or table!';
      }
    return (
        <Container maxWidth="lg" sx={{display: 'flex'}}>
        <div style={{ background: 'white', height: '100vh', width: '50%' }}>
                <img src={Man} alt='operation-game' style={{height: '100vh', border: '1px solid black'}} onClick={penalty}>
                </img>
                <img src={Pencil} alt='pencil' style={{width: '100px', position: 'relative', bottom: '500px'}} draggable="true" onDragStart={drag}
                id="drag1"></img>
                <img src={Butterfly} alt='butterfly' style={{width: '50px', position: 'relative', bottom: '300px'}} draggable="true" onDragStart={drag}
                id="drag2"></img>
                <img src={Wishbone} alt='wishbone' style={{width: '30px', position: 'relative', bottom: '100px'}} draggable="true" onDragStart={drag}
                id="drag3"></img>
                <img src={Apple} alt='apple' style={{width: '30px', position: 'relative', bottom: '100px', right: '200px'}} draggable="true" onDragStart={drag}
                id="drag4"></img>
                <img src={Hammer} alt='hammer' style={{width: '30px', position: 'relative', bottom: '300px', right: '200px'}} draggable="true" onDragStart={drag}
                id="drag5"></img>
                <img src={Light} alt='light' style={{width: '30px', position: 'relative', bottom: '600px', right: '200px'}} draggable="true" onDragStart={drag}
                id="drag6"></img>
         </div>
         <div 
            style={{background: 'black', height: '100vh', width: '25%'}}
            onDrop={drop}
            onDragOver={allowDrop}
            id="div1"
            ></div>
        <div 
            style={{background: 'white', height: '100vh', width: '25%'}}
        >
            <h2>Score: <span id='score'>0</span></h2>
            <p id='warning'>Remove the objects that do not belong! Do not touch the patient or table!</p>
            <button onClick={next}>Try Again</button>
        </div>
      </Container>
    )
}

export default Operation;