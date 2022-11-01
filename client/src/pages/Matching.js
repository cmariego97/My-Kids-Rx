import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// import all images
import Brain from '../assets/images/brain.jpg'
import Ear from '../assets/images/ear.jpg'
import Heart from '../assets/images/heart.jpg'
import Lungs from '../assets/images/lungs.jpg'
import Stomach from '../assets/images/stomach.jpg'
import Toes from '../assets/images/toes.jpg'
//import custom css
import '../assets/css/match.css';

const Matching = ({changeGame}) => {
  //styling for grid items
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '250px',
    border: '1px solid black'
  }));
    //control visibility of individual cards
   const [visable1,changeVisable1] = useState('invisible')
   const [visable2,changeVisable2] = useState('invisible')
   const [visable3,changeVisable3] = useState('invisible')
   const [visable4,changeVisable4] = useState('invisible')
   const [visable5,changeVisable5] = useState('invisible')
   const [visable6,changeVisable6] = useState('invisible')
   const [visable7,changeVisable7] = useState('invisible')
   const [visable8,changeVisable8] = useState('invisible')
   const [visable9,changeVisable9] = useState('invisible')
   const [visable10,changeVisable10] = useState('invisible')
   const [visable11,changeVisable11] = useState('invisible')
   const [visable12,changeVisable12] = useState('invisible')
  //styling options
   const cardBack = {display:'none'};
   const cardFront = {display:'block', margin: '0 auto', width: '75%'};
   const unmatched = {display:'none'};
   //color code each matched set
   const matched1 = {display:'inline', color: 'black', border: '1px solid black', padding: '1%', borderRadius: '5px'}
   const matched2 = {display:'inline', color: 'red', border: '1px solid red', padding: '1%', borderRadius: '5px'};
   const matched3 = {display:'inline', color: 'blue', border: '1px solid blue', padding: '1%', borderRadius: '5px'}
   const matched4 = {display:'inline', color: 'orange', border: '1px solid orange', padding: '1%', borderRadius: '5px', background: 'grey'}
   const matched5 = {display:'inline', color: 'green', border: '1px solid green', padding: '1%', borderRadius: '5px'}
   const matched6 = {display:'inline', color: 'pink', border: '1px solid pink', padding: '1%', borderRadius: '5px', background: 'grey'}
  //state variable for click count
   const[count, setCount] = useState(0);
   useEffect(() => {
    localStorage.setItem('myCount', count);
   })
   //this will instruct user to flip over unmatched cards every other click (excluding when actually flipping over the unmatched cards)
   const incrementClick = () => {
    setCount(count + 1);
    if(((count+1) !== 0) && ((count+1) % 2 === 0) && ((count+1) % 4 !==0)) {
      document.querySelector('#flip-message').textContent = 'Flip over your unmatched cards and try again!'
    }
    else {
      document.querySelector('#flip-message').textContent = ''
    }
   }
   
   const matches = () => {
    //if all sets matched
    if(visable1 === 'matched' && visable2 === 'matched' && visable3 === 'matched' && visable4 === 'matched' && visable5 === 'matched' && visable6 === 'matched' && visable7 === 'matched' && visable8 === 'matched' && visable9 === 'matched' && visable10 === 'matched' && visable11 === 'matched' && visable12 === 'matched') {
      document.querySelector('#message').textContent = 'All matches found!';
    }
    //if 1 set matched then indicate so
    if (visable1 === 'visible' && visable2 === 'visible') {
      changeVisable1('matched');
      changeVisable2('matched');
    }
    if (visable3 === 'visible' && visable4 === 'visible') {
      changeVisable3('matched');
      changeVisable4('matched');
    }
    if (visable5 === 'visible' && visable6 === 'visible') {
      changeVisable5('matched');
      changeVisable6('matched');
    }
    if (visable7 === 'visible' && visable8 === 'visible') {
      changeVisable7('matched');
      changeVisable8('matched');
    }
    if (visable9 === 'visible' && visable10 === 'visible') {
      changeVisable9('matched');
      changeVisable10('matched');
    }
    if (visable11 === 'visible' && visable12 === 'visible') {
      changeVisable11('matched');
      changeVisable12('matched');
    }
   }
   //resets game
   const resetGame = () => {
    changeVisable1('invisible');
    changeVisable2('invisible');
    changeVisable3('invisible');
    changeVisable4('invisible');
    changeVisable5('invisible');
    changeVisable6('invisible');
    changeVisable7('invisible');
    changeVisable8('invisible');
    changeVisable9('invisible');
    changeVisable10('invisible');
    changeVisable11('invisible');
    changeVisable12('invisible');
    document.querySelector('#message').textContent = '';
   }
//TODO: fix buttons design
    return (
      <Box sx={{ flexGrow: 1, background: "#a68674", padding: "1%" }}>
         {matches()}
        <h1 style={{textAlign: 'center'}}>Human Body Matching Game</h1>
        <Button sx={{margin: '0 auto', backgroundColor: '#3f4868', display: 'flex', justifyContent: 'center', my:'15px'}}variant="contained" onClick={() => changeGame('Home')}>Back to gaming homepage
            </Button>
        <Button sx={{margin: '0 auto', backgroundColor: '#3f4868', display: 'flex', justifyContent: 'center'}}variant="contained" onClick={() => resetGame()}>Play Again
            </Button>
        <Typography id='flip-message' sx={{textAlign: 'center', marginTop: '2%', marginBottom: '2%'}}></Typography>
        <Typography id='message' sx={{textAlign: 'center', marginTop: '2%', marginBottom: '2%'}}></Typography>
        <Grid container spacing={2} onClick={() => incrementClick()} id='grid'>
            {/* card 6 */}
            <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable6(visable6 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
            <Typography variant="body2" color="text.secondary" sx={visable6 === 'invisible' ? cardBack : cardFront}>
            Heart: it pumps blood to the rest of your body!
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={visable6 === 'invisible' ? cardFront : cardBack}>
          Matching Game!
            </Typography>
          </CardContent>
          <p style={visable6 === 'matched' ? matched3 : unmatched}>Matched</p>
            </Item>
          </Grid>
          {/* card 2 */}
          <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable2(visable2 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
            <Typography variant="body2" color="text.secondary"  sx={visable2 === 'invisible' ? cardBack : cardFront}>
            Brain: it is helping you understand what you are reading and seeing right now!
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={visable2 === 'invisible' ? cardFront : cardBack}>
          Matching Game!
            </Typography>
          </CardContent>
          <p style={visable2 === 'matched' ? matched1 : unmatched}>Matched</p>
            </Item>
          </Grid>
            {/* card 8 */}
            <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable8(visable8 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
            <Typography variant="body2" color="text.secondary" sx={visable8 === 'invisible' ? cardBack : cardFront}>
            Lungs: you can't breathe without them!
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={visable8 === 'invisible' ? cardFront : cardBack}>
          Matching Game!
            </Typography>
          </CardContent>
          <p style={visable8 === 'matched' ? matched4 : unmatched}>Matched</p>
            </Item>
          </Grid>
        {/* card 3 */}
          <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable3(visable3 === 'visible' ? 'invisible' : 'visible')}>
            <CardMedia
              component="img"
              height="194"
              image={Ear}
              alt="Test"
              sx={visable3 === 'invisible' ? cardBack : cardFront}
                  />
                    <CardContent sx={visable3 === 'invisible' ? cardFront : cardBack}>
              <Typography variant="body2" color="text.secondary">
              Matching Game!
              </Typography>
            </CardContent>
            <p style={visable3 === 'matched' ? matched2 : unmatched}>Matched</p>
            </Item>
          </Grid>
            {/* card 10 */}
            <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable10(visable10 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
            <Typography variant="body2" color="text.secondary" sx={visable10 === 'invisible' ? cardBack : cardFront}>
            Stomach: it breaks down all the food that you eat!
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={visable10 === 'invisible' ? cardFront : cardBack}>
          Matching Game!
            </Typography>
          </CardContent>
          <p style={visable10 === 'matched' ? matched5 : unmatched}>Matched</p>
            </Item>
          </Grid>
            {/* card 11 */}
            <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable11(visable11 === 'visible' ? 'invisible' : 'visible')}>
            <CardMedia
            component="img"
            height="194"
            image={Toes}
            alt="Test"
            sx={visable11 === 'invisible' ? cardBack : cardFront}
                />
                  <CardContent sx={visable11 === 'invisible' ? cardFront : cardBack}>
            <Typography variant="body2" color="text.secondary">
            Matching Game!
            </Typography>
          </CardContent>
          <p style={visable11 === 'matched' ? matched6 : unmatched}>Matched</p>
            </Item>
          </Grid>
          {/* card 4 */}
          <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable4(visable4 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
            <Typography variant="body2" color="text.secondary" sx={visable4 === 'invisible' ? cardBack : cardFront}>
            Ear: it helps you hear when your name is called!
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={visable4 === 'invisible' ? cardFront : cardBack}>
          Matching Game!
            </Typography>
          </CardContent>
          <p style={visable4 === 'matched' ? matched2 : unmatched}>Matched</p>
            </Item>
          </Grid>
            {/* card 1 */}
            <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable1(visable1 === 'visible' ? 'invisible' : 'visible')}>
            <CardMedia
              component="img"
              height="194"
              image={Brain}
              alt="Test"
              sx={visable1 === 'invisible' ? cardBack : cardFront}
                  />
                  <CardContent sx={visable1 === 'invisible' ? cardFront : cardBack}>
              <Typography variant="body2" color="text.secondary">
              Matching Game!
              </Typography>
            </CardContent>
            <p style={visable1 === 'matched' ? matched1 : unmatched}>Matched</p>
            </Item>
          </Grid>
          {/* card 5 */}
          <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable5(visable5 === 'visible' ? 'invisible' : 'visible')}>
            <CardMedia
            component="img"
            height="194"
            image={Heart}
            alt="Test"
            sx={visable5 === 'invisible' ? cardBack : cardFront}
                />
                  <CardContent sx={visable5 === 'invisible' ? cardFront : cardBack}>
            <Typography variant="body2" color="text.secondary">
            Matching Game!
            </Typography>
          </CardContent>
          <p style={visable5 === 'matched' ? matched3 : unmatched}>Matched</p>
            </Item>
          </Grid>
            {/* card 9 */}
            <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable9(visable9 === 'visible' ? 'invisible' : 'visible')}>
            <CardMedia
            component="img"
            height="194"
            image={Stomach}
            alt="Test"
            sx={visable9 === 'invisible' ? cardBack : cardFront}
                />
                  <CardContent sx={visable9 === 'invisible' ? cardFront : cardBack}>
            <Typography variant="body2" color="text.secondary">
            Matching Game!
            </Typography>
          </CardContent>
          <p style={visable9 === 'matched' ? matched5 : unmatched}>Matched</p>
            </Item>
          </Grid>
          {/* card 7 */}
          <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable7(visable7 === 'visible' ? 'invisible' : 'visible')}>
            <CardMedia
            component="img"
            height="194"
            image={Lungs}
            alt="Test"
            sx={visable7 === 'invisible' ? cardBack : cardFront}
                />
                  <CardContent sx={visable7 === 'invisible' ? cardFront : cardBack}>
            <Typography variant="body2" color="text.secondary">
            Matching Game!
            </Typography>
          </CardContent>
          <p style={visable7 === 'matched' ? matched4 : unmatched}>Matched</p>
            </Item>
          </Grid>
          {/* card 12 */}
          <Grid item xs={8} sm={8} md={4} sx={{margin: '0 auto', width: '75%'}}>
            <Item onClick={() => changeVisable12(visable12 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
            <Typography variant="body2" color="text.secondary" sx={visable12 === 'invisible' ? cardBack : cardFront}>
            Phalanges: this is the medical term for your toes!
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={visable12 === 'invisible' ? cardFront : cardBack}>
          Matching Game!
            </Typography>
          </CardContent>
          <p style={visable12 === 'matched' ? matched6 : unmatched}>Matched</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Matching;