import React from 'react';
import { ExternalLink } from 'react-external-link';

const Vitals = ({vitals}) => {
    //converts ht and wt to bmi
    const getBMI = (height, weight) => {
        const meters = function (height) {
        return height * .0254
        };
        const kilograms = function (weight) {
        return weight * .453592
        }
        const bmi = kilograms(weight) / meters(height) ** 2;
        return parseInt(bmi);
    }

    if (vitals.length === 0) {
        //if no vitals on file for patient
        return (
            <p>No vital signs on file!</p>
        )
    }
    else {
        return (
            vitals.map((result) => (
                <div>
                    <p>{result.date}</p>
                    <li>{` Height: ${result.height} inches`}</li>
                    <li>{ `Weight: ${result.weight} pounds`}</li>
                    <li>{`BMI: ${getBMI(result.height, result.weight)}`}</li>
                    <ExternalLink href='https://www.cdc.gov/healthyweight/assessing/bmi/index.html'>
                    <span>What is BMI?</span>
                    </ExternalLink>
                    <li>{`Blood Pressure: ${result.systolicBP}/${result.diastolicBP}`}</li>
                    <li>{`Heart Rate: ${result.hr} bpm`}</li>
                    <li>{`SpO2: ${result.o2} %`}</li>
                </div>
            ))
        )
    }
}

export default Vitals;