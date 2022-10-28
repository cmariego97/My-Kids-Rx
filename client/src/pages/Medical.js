import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_INFO } from '../utils/queries';

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//import components
import Vitals from '../components/Vitals';
import Vaccine from '../components/Vaccine';
import Medication from '../components/Medication';


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
            fontWeight: 400,
            fontSize: 50,
        },
        h4: {
            fontWeight: 600,
            fontSize: 28,
            lineHeight: '2rem',
        },
        h5: {
            fontWeight: 100,
            lineHeight: '2rem',
        },
    },
});

const Medical = () => {
    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_INFO, {
        variables: { email }
    });

    var titleCase = function(str) {
        var result = [];
        var words = str.split(" ");
        for (var i = 0; i < words.length; i++) {
          var word = words[i].split("");
          word[0] = word[0].toUpperCase();
          result.push(word.join(""));
        }
        return result.join(" ");
      };

    if(loading) {
        return (
            <h1>Loading profile...</h1>
        )
    }
    else {
        console.log(data);
        const info = data.onePatient;
        const vitals = info.vitals;
        const vaccines = info.vaccines;
        const meds = info.medications;
        const fullName = titleCase(`${info.firstName} ${info.middleName} ${info.lastName}`);
        return (
            <div>
                {/* //TODO: Name here is quite redundant, delete this if no issue */}
                <h1>{`Info For ${fullName}`}</h1>
                <Typography variant="h4">
                    My Medical Information
                </Typography>
                <Typography variant="h5">Allergies:</Typography>
                <Typography>{`${info.allergies}`}</Typography>
                <p>{`Medical History: ${info.medicalHistory}`}</p>
                <p>Medications:</p>
                <Medication meds={meds} />
                <p>Vaccines:</p>
                <Vaccine vaccines={vaccines}/>
                <p>Vital Signs:</p>
                <Vitals vitals={vitals}/>
            </div>
        )
    }
}

export default Medical;

