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
   const [visable,changeVisable] = useState(true)
   const cardBack = {display:'none'}
   const cardFront = {display:'block'}

    return (
        <div> 
            <Card variant="outlined">
            <CardMedia
        component="img"
        height="194"
        image={Brain}
        alt="Test"
        sx={!visable ? cardBack : cardFront}
             />
             <CardContent sx={!visable ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardContent>
        <Typography variant="body2" color="text.secondary"  sx={!visable ? cardBack : cardFront}>
        Brain: it is helping you understand what you are reading and seeing right now!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardMedia
        component="img"
        height="194"
        image={Ear}
        alt="Test"
        sx={!visable ? cardBack : cardFront}
             />
              <CardContent sx={!visable ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardBack : cardFront}>
        Ear: it helps you hear when your name is called!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardMedia
        component="img"
        height="194"
        image={Heart}
        alt="Test"
        sx={!visable ? cardBack : cardFront}
             />
              <CardContent sx={!visable ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardBack : cardFront}>
        Heart: it pumps blood to the rest of your body!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardMedia
        component="img"
        height="194"
        image={Lungs}
        alt="Test"
        sx={!visable ? cardBack : cardFront}
             />
              <CardContent sx={!visable ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardBack : cardFront}>
        Lungs: you can't breathe without them!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardMedia
        component="img"
        height="194"
        image={Stomach}
        alt="Test"
        sx={!visable ? cardBack : cardFront}
             />
              <CardContent sx={!visable ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardBack : cardFront}>
        Stomach: it breaks down all the food that you eat!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardMedia
        component="img"
        height="194"
        image={Toes}
        alt="Test"
        sx={!visable ? cardBack : cardFront}
             />
              <CardContent sx={!visable ? cardFront : cardBack}>
        <Typography variant="body2" color="text.secondary">
        Matching Game!
        </Typography>
      </CardContent>
            </Card>

            <Card variant="outlined">
            <CardContent>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardBack : cardFront}>
        Phalanges: this is the medical term for your toes!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={!visable ? cardFront : cardBack}>
       Matching Game!
        </Typography>
      </CardContent>
            </Card>
        </div>
    )
}

export default Matching;