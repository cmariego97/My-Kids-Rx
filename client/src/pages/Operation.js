import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
//import images
import Man from '../assets/images/operation.jpeg';

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
        document.querySelector('#warning').textContent = 'Do not touch the patient or table!';
      }
    return (
        <Container maxWidth="lg" sx={{display: 'flex'}}>
        <div style={{ background: 'white', height: '100vh', width: '50%' }}>
                {/* <div 
                style={{height: '100px', width: '100px', background: 'green', marginTop: '70%'}}
                draggable="true" onDragStart={drag}
                id="drag2"
                ></div> */}
                <img src={Man} style={{height: '100vh'}} onClick={penalty}>
                </img>
                <div 
                style={{height: '100px', width: '100px', background: 'red', position: 'relative', bottom: '500px', zIndex: 8}}
                draggable="true" onDragStart={drag}
                id="drag1"
                ></div>
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
            <p id='warning'>Do not touch the patient or table!</p>
            <button onClick={next}>Try Again</button>
        </div>
      </Container>
    )
}

export default Operation;