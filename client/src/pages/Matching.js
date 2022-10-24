import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import all images
import Brain from '../assets/images/brain.jpg'
import Ear from '../assets/images/ear.jpg'
import Heart from '../assets/images/heart.jpg'
import Lungs from '../assets/images/lungs.jpg'
import Stomach from '../assets/images/stomach.jpg'
import Toes from '../assets/images/toes.jpg'

const Matching = () => {
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

   const cardBack = {display:'none'};
   const cardFront = {display:'block'};
   const unmatched = {display:'none'};
   const matched = {display:'block'};
    //TODO: make this a prettier message
   const matches = () => {
    if(visable1 === 'matched' && visable2 === 'matched' && visable3 === 'matched' && visable4 === 'matched' && visable5 === 'matched' && visable6 === 'matched' && visable7 === 'matched' && visable8 === 'matched' && visable9 === 'matched' && visable10 === 'matched' && visable11 === 'matched' && visable12 === 'matched') {
      //TODO: make this better than a window popup
      alert('All matches found!')
      //TODO: may have to reload in a different way
      window.location.reload();
    }
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
    //TODO: make this look like a card grid
    return (
        <div> 
            {/* card 1 */}
            {matches()}
            <Card variant="outlined" onClick={() => changeVisable1(visable1 === 'visible' ? 'invisible' : 'visible')}>
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
      <p style={visable1 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 2 */}
            <Card variant="outlined" onClick={() => changeVisable2(visable2 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
        <Typography variant="body2" color="text.secondary"  sx={visable2 === 'invisible' ? cardBack : cardFront}>
        Brain: it is helping you understand what you are reading and seeing right now!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={visable2 === 'invisible' ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={visable2 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
        {/* card 3 */}
            <Card variant="outlined" onClick={() => changeVisable3(visable3 === 'visible' ? 'invisible' : 'visible')}>
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
      <p style={visable3 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 4 */}
            <Card variant="outlined" onClick={() => changeVisable4(visable4 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={visable4 === 'invisible' ? cardBack : cardFront}>
        Ear: it helps you hear when your name is called!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={visable4 === 'invisible' ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={visable4 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 5 */}
            <Card variant="outlined" onClick={() => changeVisable5(visable5 === 'visible' ? 'invisible' : 'visible')}>
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
      <p style={visable5 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 6 */}
            <Card variant="outlined" onClick={() => changeVisable6(visable6 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={visable6 === 'invisible' ? cardBack : cardFront}>
        Heart: it pumps blood to the rest of your body!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={visable6 === 'invisible' ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={visable6 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 7 */}

            <Card variant="outlined" onClick={() => changeVisable7(visable7 === 'visible' ? 'invisible' : 'visible')}>
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
      <p style={visable7 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 8 */}
            <Card variant="outlined" onClick={() => changeVisable8(visable8 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={visable8 === 'invisible' ? cardBack : cardFront}>
        Lungs: you can't breathe without them!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={visable8 === 'invisible' ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={visable8 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 9 */}
            <Card variant="outlined" onClick={() => changeVisable9(visable9 === 'visible' ? 'invisible' : 'visible')}>
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
      <p style={visable9 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 10 */}
            <Card variant="outlined" onClick={() => changeVisable10(visable10 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={visable10 === 'invisible' ? cardBack : cardFront}>
        Stomach: it breaks down all the food that you eat!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={visable10 === 'invisible' ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={visable10 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 11 */}
            <Card variant="outlined" onClick={() => changeVisable11(visable11 === 'visible' ? 'invisible' : 'visible')}>
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
      <p style={visable11 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
            {/* card 12 */}
            <Card variant="outlined" onClick={() => changeVisable12(visable12 === 'visible' ? 'invisible' : 'visible')}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={visable12 === 'invisible' ? cardBack : cardFront}>
        Phalanges: this is the medical term for your toes!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={visable12 === 'invisible' ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={visable12 === 'matched' ? matched : unmatched}>Matched</p>
            </Card>
        </div>
    )
}

export default Matching;