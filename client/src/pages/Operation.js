import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Operation = ({changeGame}) => {
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }

      function allowDrop(ev) {
        ev.preventDefault();
      }
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
    return (
        <Container maxWidth="sm" sx={{display: 'flex'}}>
        <div style={{ background: '#cfe8fc', height: '100vh', width: '50%' }}>
            <div 
                style={{height: '100px', width: '100px', background: 'red', marginTop: '30%'}}
                draggable="true" onDragStart={drag}
                id="drag1"
                ></div>
                <div 
                style={{height: '100px', width: '100px', background: 'green', marginTop: '70%'}}
                draggable="true" onDragStart={drag}
                id="drag2"
                ></div>
         </div>
         <div 
            style={{background: 'black', height: '100vh', width: '50%'}}
            onDrop={drop}
            onDragOver={allowDrop}
            id="div1"
            ></div>
      </Container>
    )
}

export default Operation;