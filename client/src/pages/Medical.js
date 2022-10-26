import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_INFO } from '../utils/queries';

const Medical = () => {
    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_INFO, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading profile...</h1>
        )
    }
    else {
        console.log(data);
        const info = data.onePatient
        return (
            <div>
                <h1>Info For {info.firstName} {info.middleName} {info.lastName}</h1>
                <p>Allergies:{info.allergies}</p>
                <p>Medical History:{info.medicalHistory}</p>
                <p>Vaccines:</p>
                {info.vaccines.map((vaccine) => 
                (<li>

                    {vaccine.name} given on 
                    {vaccine.date}

                </li>)
                
                )}

               <p>Lastest Vitals:</p>
               <li>
                    Date:{info.vitals[0].date}
                </li>
                <li>
                    Height:{info.vitals[0].height}inches
                </li>
                <li>
                    Weight:{info.vitals[0].weight}pounds
                </li>
                <li>
                    {`Blood Pressure:${info.vitals[0].systolicBP}/${info.vitals[0].diastolicBP}`}
                </li>
                
                <li>
                    Heart Rate:{info.vitals[0].hr} bpm
                </li>
                <li>
                    SpO2:{info.vitals[0].o2} percent
                </li>
            </div>
        )
    }
}

export default Medical;

