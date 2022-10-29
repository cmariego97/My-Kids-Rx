import React from 'react';


const Medication = ({meds}) => {
    if (meds.length === 0) {
        //if no medications for this patient
        return (
            <p>No medications on file!</p>
        )
    }
    else {
        return (
            meds.map((med) => (
                <li>{`${med.name} ${med.dose}: ${med.directions}`}</li>
            ))
        )
    }
}

export default Medication;