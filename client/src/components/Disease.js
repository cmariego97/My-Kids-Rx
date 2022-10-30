import React from 'react';
import { ExternalLink } from 'react-external-link';
import { useQuery } from '@apollo/client';
import { QUERY_DISEASES } from '../utils/queries';

const Disease = () => {
    //find diseases query
    const { loading, data } = useQuery(QUERY_DISEASES);

    if(loading) {
        return (
            <h1>Loading disease...</h1>
        )
    }
    else {
        //generate random number
        var randomNum = Math.floor(Math.random()* data.diseases.length);
        //pick random disease
        var disease = data.diseases[randomNum]
        return (
            <div>
                <h3>{disease.name}</h3>
                <li>{`Affected ages: ${disease.ageGroup}`}</li>
                <li>{`Symptoms include: ${disease.symptoms}`}</li>
                <li>{`Prevention methods: ${disease.prevention}`}</li>
                <li>
                    <ExternalLink href={disease.link}>
                    <span>Click here for more information!</span>
                    </ExternalLink>
                </li> 
            </div>
        )
    }
}

export default Disease;