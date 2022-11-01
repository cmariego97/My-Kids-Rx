import React from 'react';
import { ExternalLink } from 'react-external-link';
import { useQuery } from '@apollo/client';
import { QUERY_DISEASES } from '../utils/queries';
//import custom css
import '../assets/css/resources.css';

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
            <div style={{fontSize: '110%', listStyleType: 'square'}}>
                <h3>{disease.name}</h3>
                <li style={{marginBottom: '5px'}}>{`Affected ages: ${disease.ageGroup}`}</li>
                <li style={{marginBottom: '5px'}}>{`Symptoms include: ${disease.symptoms}`}</li>
                <li style={{marginBottom: '5px'}}>{`Prevention methods: ${disease.prevention}`}</li>
                <p>
                    <ExternalLink href={disease.link} id='link'>
                    <span>Click here for more information!</span>
                    </ExternalLink>
                </p> 
            </div>
        )
    }
}

export default Disease;