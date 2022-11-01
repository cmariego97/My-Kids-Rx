import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_IMAGING } from '../utils/queries';
import Auth from '../utils/auth';
// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Box, CssBaseline, Typography } from '@material-ui/core';
//import image
import background from '../assets/images/site-design-images/plain-animal-bg.svg';

const theme = createTheme({
    palette: {
        primary: {
        // Sunglo
            main: "#de7171",
        },
        secondary: {
        // sandrift
            main: "#a68674",
        },
        error: {
        // pomegranate
            main: "#f44336",
        },
        warning: {
        // carrot-orange
            main: "#f58c22"
        },
        info: {
        // fiord
            main: "#3f4868"
        },
        success: {
        // asparagus
            main: "#67a35b"
        },
        neutral: {
        // gull gray
            main: "#9CA6B5"
        }
    },
    typography: {
        fontFamily: [
            'Nunito', 'sans-serif', 'Nunito Sans', 'Atma', 'cursive', 'Londrina Solid'
        ],
        h1: {
            fontWeight: 600,
            fontSize: 80,
        },
        h2: {
            fontWeight: 500,
            fontSize: 70,
        },
        h3: {
            fontFamily: 'Atma',
            fontSize: 50,
        },
        h4: {
            fontWeight: 600,
            fontSize: 28,
            textTransform: 'uppercase',
            lineHeight: '2rem',
        },
        h5: {
            fontFamily: 'Nunito',
            fontWeight: 500,
            fontSize: 18,
            textTransform: 'uppercase',
            lineHeight: '2rem',
        },
    },
 });
 
 const useStyles = makeStyles((theme) => ({
    cardImaging: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: '0.25rem auto',
        padding: '2rem 2.5rem',
        width: '70%',
        minWidth: '550px',
        minHeight: '500px',
        backgroundColor: '#F5F2EF',
        borderRadius: '5px',
        boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
    },
 }))

const Imaging= () => {
    const classes = useStyles();
    //retrieve email from jwt to use to find specific patient
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    //imaging results query
    const { loading, data } = useQuery(QUERY_IMAGING, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading Imaging Results...</h1>
        )
    }
    else {
        const renderImaging = () => {
            //if patient not in database
            if (!data.onePatient) {
                return (
                    <p>Email not on file with a provider, contact your provider for details!</p>
                )
            }
            else {
                const imaging = data.onePatient.imaging
                if (imaging.length !== 0) {
                    return (
                        imaging.map((result) => (
                            <div>
                                <li>{`Date: ${result.date}`}</li>
                                <li>{`Test: ${result.type} of ${result.site}`}</li>
                                <li>{`Results: ${result.report}`}</li>
                            </div>
                        
                        )
                        )
                    )
                }
                else {
                    //if no imaging results for the patient
                    return (
                        <p>No imaging results on file!</p>
                    )
                }
            }
        }
        return (
            <Box className="wrap siteWrap">
                <Box className={classes.cardImaging}>
                    <Typography variant="h5">Imaging Results</Typography>
                    {renderImaging()}
                </Box>
            </Box>
        )
    }
}

export default Imaging;


