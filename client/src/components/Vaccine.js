import React from 'react';

const Vaccine = ({vaccines}) => {
    if (vaccines.length === 0) {
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