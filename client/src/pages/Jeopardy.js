import React from 'react';
import data from '../utils/jeopardyData';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

//TODO: change into having a card rendered for each question that is styled and has onclick funcionality but for now using this to see how to correctly reference the data
const Jeopardy = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
        // <div>
        //     {data.map((category) => (
        //         <div>
        //             <h1>{category.category}</h1>
        //             <p>{category.questions[0].points}</p>
        //             <p>{category.questions[0].question}</p>
        //             <p>{category.questions[0].answer}</p>

        //             <p>{category.questions[1].points}</p>
        //             <p>{category.questions[1].question}</p>
        //             <p>{category.questions[1].answer}</p>

        //             <p>{category.questions[2].points}</p>
        //             <p>{category.questions[2].question}</p>
        //             <p>{category.questions[2].answer}</p>

        //             <p>{category.questions[3].points}</p>
        //             <p>{category.questions[3].question}</p>
        //             <p>{category.questions[3].answer}</p>
        //         </div>
        //     ))}
            
        // </div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {data.map((category) => (
        <Grid item xs={3}>
        <Item>{category.category}</Item>
      </Grid>
                ))}
        {/* <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
    )
}

export default Jeopardy;