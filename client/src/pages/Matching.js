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
   const [visable1,changeVisable1] = useState(false)
   const [visable2,changeVisable2] = useState(false)
   const [visable3,changeVisable3] = useState(false)
   const [visable4,changeVisable4] = useState(false)
   const [visable5,changeVisable5] = useState(false)
   const [visable6,changeVisable6] = useState(false)
   const [visable7,changeVisable7] = useState(false)
   const [visable8,changeVisable8] = useState(false)
   const [visable9,changeVisable9] = useState(false)
   const [visable10,changeVisable10] = useState(false)
   const [visable11,changeVisable11] = useState(false)
   const [visable12,changeVisable12] = useState(false)
    //indicate if each set is matched
   const [set1, changeSet1] = useState(false);
   const [set2, changeSet2] = useState(false);
   const [set3, changeSet3] = useState(false);
   const [set4, changeSet4] = useState(false);
   const [set5, changeSet5] = useState(false);
   const [set6, changeSet6] = useState(false);

   const cardBack = {display:'none'};
   const cardFront = {display:'block'};
   const unmatched = {display:'none'};
   const matched = {display:'block'};
    //TODO: make this a prettier message
   const matches = () => {
    if (visable1 && visable2) {
        changeSet1(true);
        changeVisable1(!visable1);
        changeVisable2(!visable2);
    }
    // if (visable3 && visable4) {
    //     // alert('You got a match');
    //     changeVisable3(!visable3);
    //     changeVisable4(!visable4);
    // }
    // if (visable5 && visable6) {
    //     // alert('You got a match');
    //     changeVisable5(!visable5);
    //     changeVisable6(!visable6);
    // }
   }
    //TODO: make 'matched' p tags look better
    //TODO: make this look like a card grid
    return (
        <div> 
            {/* card 1 */}
            {matches()}
            <Card variant="outlined" onClick={() => changeVisable1(!visable1)}>
            <CardMedia
        component="img"
        height="194"
        image={Brain}
        alt="Test"
        sx={!visable1 ? cardBack : cardFront}
             />
             <CardContent sx={!visable1 ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
      <p style={!set1 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 2 */}
            <Card variant="outlined" onClick={() => changeVisable2(!visable2)}>
            <CardContent>
        <Typography variant="body2" color="text.secondary"  sx={!visable2 ? cardBack : cardFront}>
        Brain: it is helping you understand what you are reading and seeing right now!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable2 ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={!set1 ? unmatched : matched}>Matched</p>
            </Card>
        {/* card 3 */}
            <Card variant="outlined" onClick={() => changeVisable3(!visable3)}>
            <CardMedia
        component="img"
        height="194"
        image={Ear}
        alt="Test"
        sx={!visable3 ? cardBack : cardFront}
             />
              <CardContent sx={!visable3 ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
      <p style={!set2 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 4 */}
            <Card variant="outlined" onClick={() => changeVisable4(!visable4)}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable4 ? cardBack : cardFront}>
        Ear: it helps you hear when your name is called!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable4 ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={!set2 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 5 */}
            <Card variant="outlined" onClick={() => changeVisable5(!visable5)}>
            <CardMedia
        component="img"
        height="194"
        image={Heart}
        alt="Test"
        sx={!visable5 ? cardBack : cardFront}
             />
              <CardContent sx={!visable5 ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
      <p style={!set3 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 6 */}
            <Card variant="outlined" onClick={() => changeVisable6(!visable6)}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable6 ? cardBack : cardFront}>
        Heart: it pumps blood to the rest of your body!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable6 ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={!set3 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 7 */}

            <Card variant="outlined" onClick={() => changeVisable7(!visable7)}>
            <CardMedia
        component="img"
        height="194"
        image={Lungs}
        alt="Test"
        sx={!visable7 ? cardBack : cardFront}
             />
              <CardContent sx={!visable7 ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
      <p style={!set4 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 8 */}
            <Card variant="outlined" onClick={() => changeVisable8(!visable8)}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable8 ? cardBack : cardFront}>
        Lungs: you can't breathe without them!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable8 ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={!set4 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 9 */}
            <Card variant="outlined" onClick={() => changeVisable9(!visable9)}>
            <CardMedia
        component="img"
        height="194"
        image={Stomach}
        alt="Test"
        sx={!visable9 ? cardBack : cardFront}
             />
              <CardContent sx={!visable9 ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
      <p style={!set5 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 10 */}
            <Card variant="outlined" onClick={() => changeVisable10(!visable10)}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable10 ? cardBack : cardFront}>
        Stomach: it breaks down all the food that you eat!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable10 ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={!set5 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 11 */}
            <Card variant="outlined" onClick={() => changeVisable11(!visable11)}>
            <CardMedia
        component="img"
        height="194"
        image={Toes}
        alt="Test"
        sx={!visable11 ? cardBack : cardFront}
             />
              <CardContent sx={!visable11 ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
      <p style={!set6 ? unmatched : matched}>Matched</p>
            </Card>
            {/* card 12 */}
            <Card variant="outlined" onClick={() => changeVisable12(!visable12)}>
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable12 ? cardBack : cardFront}>
        Phalanges: this is the medical term for your toes!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable12 ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
      <p style={!set6 ? unmatched : matched}>Matched</p>
            </Card>
        </div>
    )
}

export default Matching;