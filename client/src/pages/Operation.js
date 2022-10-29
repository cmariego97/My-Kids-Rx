import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
//import images
import Man from '../assets/images/operation.jpeg';

const Operation = ({changeGame}) => {
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }

      function allowDrop(ev) {
        ev.preventDefault();
      }
      //TODO: just drag to trash can icon or something
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        console.log('dropped');
      }

      function penalty() {
        console.log(true);
      }
    return (
        <Container maxWidth="sm" sx={{display: 'flex'}}>
        <div style={{ background: '#cfe8fc', height: '100vh', width: '50%' }}>
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
            style={{background: 'black', height: '100vh', width: '50%'}}
            onDrop={drop}
            onDragOver={allowDrop}
            id="div1"
            ></div>
      </Container>
    )
}

export default Operation;