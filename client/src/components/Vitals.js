import React from 'react';

const Vitals = ({vitals}) => {
    if (vitals.length === 0) {
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
                    <li>{`Blood Pressure: ${result.systolicBP}/${result.diastolicBP}`}</li>
                    <li>{`Heart Rate: ${result.hr} bpm`}</li>
                    <li>{`SpO2: ${result.o2} %`}</li>
                </div>
            ))
        )
    }
}

export default Vitals;