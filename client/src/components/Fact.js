import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FACTS } from '../utils/queries';

const Fact = () => {
    //find facts query
    const { loading, data } = useQuery(QUERY_FACTS);

    if(loading) {
        return (
            <h1>Loading fact...</h1>
        )
    }
    else {
        //generate random number
        var randomNum = Math.floor(Math.random()* data.facts.length);
        //pick random disease
        var fact = data.facts[randomNum]
        console.log(fact)
        return (
            <h3>{fact.fact}</h3>
        )
    }
}

export default Fact;