//jeopardy feature not yet implemented
// import React, {useState} from 'react';
// import data from '../utils/jeopardyData';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// const Jeopardy = () => {

//     const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//         ...theme.typography.body2,
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//       }));

//     return(
//     <Box sx={{ flexGrow: 1 }}>
//     <h1 style={{textAlign: 'center'}}>Jeopardy</h1>
//       <Grid container spacing={2}>
//       {data.map((category) => (
//         <Grid item xs={3}>
//         <Item sx={{background: 'red'}}>{category.category}</Item>
//         <Item>
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 {`${category.questions[0].points} points` }
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 {category.questions[0].question}
//                 </Typography>
//             </CardContent>
//         </Item>

//         <Item>
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 {`${category.questions[1].points} points` }
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 {category.questions[1].question}
//                 </Typography>
//             </CardContent>
//         </Item>

//         <Item>
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 {`${category.questions[2].points} points` }
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 {category.questions[2].question}
//                 </Typography>
//             </CardContent>
//         </Item>

//         <Item>
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 {`${category.questions[3].points} points` }
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 {category.questions[3].question}
//                 </Typography>
//             </CardContent>
//         </Item>
//       </Grid>
//                 ))}
//       </Grid>
//     </Box>
//     )
// }

// export default Jeopardy;