import React from 'react';

const Vaccine = ({vaccines}) => {
    if (vaccines.length === 0) {
        //if patient does not have any vaccines
        return (
            <p style={{fontSize: '110%'}}>No vaccines on file!</p>
        )
    }
    else {
        return (
            vaccines.map((vax) => (
                <li style={{fontSize: '110%'}}>{`${vax.name} given on ${vax.date}`}</li>
            ))
        )
    }
}

export default Vaccine;