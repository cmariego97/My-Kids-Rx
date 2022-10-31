import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LAB } from '../utils/queries';
import Auth from '../utils/auth';
// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';
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
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    bigSpace: {
        margin: '5rem 1rem 2rem',     
    },
    littleSpace: {
        margin: '2.5rem 1rem 2rem',
    },
    wrapContainer: {
        margin: '0 auto',
        width: '70%',
    },
    rowContainer: {
        display: 'flex',
    },
    cardLabResults: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: '0.25rem auto',
        padding: '2rem 2.5rem',
        width: '20%',
        minWidth: '550px',
        minHeight: '500px',
        backgroundColor: '#F5F2EF',
        borderRadius: '5px',
        boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
    },
    avatarImage: {
        margin: '-30px auto 0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: [ '0 16px 38px -12px rgb(0 0 0 / 56%)', '0 4px 25px 0px rgb(0 0 0 / 12%)', '0 8px 10px -5px rgb(0 0 0 / 20%)' ],
    },
    greeting: {
        fontFamily: [ 'Nunito Sans', 'sans-serif' ],
        textTransform: 'uppercase',
    },
    boxUserName: {
        display: 'flex',
        overflow: 'hidden',
    },
    boxUserInfo: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    userName: {
        margin: '0 auto',
        textAlign: 'space-between',
    },
    userInfo: {
        margin: '0 auto',
        padding: '0.25rem',
    }
 }))
 
 const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
 };

const Lab = () => {
    const classes = useStyles();
    //retrieve email from jwt to use to find specific patient
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    //lab results query
    const { loading, data } = useQuery(QUERY_LAB, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading Lab Results</h1>
        )
    }
    else {
        const renderLabs = () => {
            //if patient not in database
            if (!data.onePatient) {
                return (
                    <p>Email not on file with a provider, contact your provider for details!</p>
                )
            }
            else {
                const labs = data.onePatient.labs;
                if (labs.length === 0) {
                    //if patient does not have any lab results in database
                    return (
                        <p>No lab results on file!</p>
                    )
                }
                else {
                    //styles lab results differently if outside of normal range
                    const abnormal = {color: 'red'};
                    const normal = {color: 'black'}
                    return (
                            labs.map((lab) => (
                            <div>
                            <p>{`Results from ${lab.date}`}</p>
                            <p>Complete Blood Count</p>
                            <li style={lab.cbc.rbc < 4000000 || lab.cbc.rbc > 5400000 ? abnormal : normal}>
                                {`RBC: ${lab.cbc.rbc} cells/mcL`}
                            </li>
                            <li style={lab.cbc.wbc < 4500 || lab.cbc.wbc > 14000 ? abnormal : normal}>
                                {`WBC: ${lab.cbc.wbc} cells/mcL`}
                            </li>
                            <li style={lab.cbc.platelets < 164000 || lab.cbc.platelets > 369000 ? abnormal : normal}>
                                {`Platelets: ${lab.cbc.platelets} cells/mcL`}
                            </li>  
                            <li style={lab.cbc.hematocrit < 30.9 || lab.cbc.hematocrit > 56.1 ? abnormal : normal}>
                                {`Hematocrit: ${lab.cbc.hematocrit} %`}
                            </li>
                            <p>Comprehensive Metabolic Panel</p>
                            <li style={lab.cmp.sodium < 136 || lab.cmp.sodium > 144 ? abnormal : normal}>
                                {`Sodium: ${lab.cmp.sodium} mEq/L`}
                            </li>
                            <li style={lab.cmp.potassium < 3.7 || lab.cmp.potassium > 5.2 ? abnormal : normal}>
                                {`Potassium: ${lab.cmp.potassium} mEq/L`}
                            </li>
                            <li style={lab.cmp.chloride < 96 || lab.cmp.chloride > 106 ? abnormal : normal}>
                               {` Chloride: ${lab.cmp.chloride} mmol/L`}
                            </li>
                            <li style={lab.cmp.calcium < 8.5 || lab.cmp.calcium > 10.2 ? abnormal : normal}>
                                {`Calcium: ${lab.cmp.calcium} mg/dL`}
                            </li>
                            <li style={lab.cmp.glucose < 60 || lab.cmp.glucose > 100 ? abnormal : normal}>
                                {`Glucose: ${lab.cmp.glucose} mg/dL`}
                            </li>
                            <li style={lab.cmp.carbonDioxide < 23 || lab.cmp.carbonDioxide > 29 ? abnormal : normal}>
                                {`Carbon dioxide: ${lab.cmp.carbonDioxide} mmol/L`}
                            </li>
                            <li style={lab.cmp.bun < 6 || lab.cmp.bun > 20 ? abnormal : normal}>
                               {`BUN: ${lab.cmp.bun} mg/dL`}
                            </li>
                            <li style={lab.cmp.creatinine < 0.8 || lab.cmp.creatinine > 1.2 ? abnormal : normal}>
                                {`Creatinine: ${lab.cmp.creatinine} mg/dL`}
                            </li>
                            <li style={lab.cmp.alp < 44 || lab.cmp.alp > 147 ? abnormal : normal}>
                                {`ALP: ${lab.cmp.alp} IU/L`}
                            </li>
                            <li style={lab.cmp.alt < 7 || lab.cmp.alt > 40 ? abnormal : normal}>
                                {`ALT: ${lab.cmp.alt} IU/L`}
                            </li>
                            <li style={lab.cmp.ast < 10 || lab.cmp.ast > 34 ? abnormal : normal}>
                                {`AST: ${lab.cmp.ast} IU/L`}
                            </li>
                            <li style={lab.cmp.bilirubin < 0.3 || lab.cmp.bilirubin > 1.9 ? abnormal : normal}>
                                {`Bilirubin: ${lab.cmp.bilirubin} mg/dL`}
                            </li>
                            <li style={lab.cmp.albumin < 3.5 || lab.cmp.albumin > 5.4 ? abnormal : normal}>
                                {`Albumin: ${lab.cmp.albumin} g/dL`}
                            </li>
                            <li style={lab.cmp.totalProtein < 6 || lab.cmp.totalProtein > 8.3 ? abnormal : normal}>
                                {`Total protein: ${lab.cmp.totalProtein} g/dL`}
                            </li>
                            <p>Lipid Panel</p>
                            <li style={lab.lipid.total > 170 ? abnormal : normal}>{`Total cholesterol: ${lab.lipid.total} mg/dL`}</li>
                            <li style={lab.lipid.ldl > 110 ? abnormal : normal}>{`LDL cholesterol: ${lab.lipid.ldl} mg/dL`}</li>
                            <li style={lab.lipid.hdl < 45 ? abnormal : normal}>{`HDL cholesterol: ${lab.lipid.hdl} mg/dL`}</li>
                            <li style={lab.lipid.tg > 100 ? abnormal : normal}>{`Triglycerides: ${lab.lipid.tg} mg/dL`}</li>
                            <p style={lab.hb < 11 ? abnormal : normal}>{`Hemoglobin: ${lab.hb} g/dL`}</p>
                            
                            
                        </div>
                        ))
                    )
                }
            }
        }
        return (
            <div className={classes.cardLabResults}>
                <h1>Lab Results</h1>
                {renderLabs()}
            </div>
        )
    }
}

export default Lab;

