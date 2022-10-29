import React from 'react';

const Vaccine = ({vaccines}) => {
    if (vaccines.length === 0) {
        //if patient does not have any vaccines
        return (
            <p>No vaccines on file!</p>
        )
    }
    else {
        return (
            vaccines.map((vax) => (
                <li>{`${vax.name} given on ${vax.date}`}</li>
            ))
        )
    }
}

export default Vaccine;