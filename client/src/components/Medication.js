import React from 'react';


const Medication = ({meds}) => {
    if (meds.length === 0) {
        //if no medications for this patient
        return (
            <p style={{fontSize: '110%'}}>No medications on file!</p>
        )
    }
    else {
        return (
            meds.map((med) => (
                <li style={{fontSize: '110%'}}>{`${med.name} ${med.dose}: ${med.directions}`}</li>
            ))
        )
    }
}

export default Medication;