import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_INFO } from '../utils/queries';

const Medical = () => {
    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_INFO, {
        variables: { email }
    });

    var titleCase = function(str) {
        var result = [];
        var words = str.split(" ");
        for (var i = 0; i < words.length; i++) {
          var word = words[i].split("");
          word[0] = word[0].toUpperCase();
          result.push(word.join(""));
        }
        return result.join(" ");
      };

    if(loading) {
        return (
            <h1>Loading profile...</h1>
        )
    }
    else {
        console.log(data);
        const info = data.onePatient
        const index= info.vitals.length-1
        const fullName = titleCase(`${info.firstName} ${info.middleName} ${info.lastName}`);
        return (
            <div>
                <h1>{`Info For ${fullName}`}</h1>
                <p>{`Allergies: ${info.allergies}`}</p>
                <p>{`Medical History: ${info.medicalHistory}`}</p>
                <p>Vaccines:</p>
                {info.vaccines.map((vaccine) => 
                (<li>

                    {`${vaccine.name} given on ${vaccine.date}`}

                </li>)
                
                )}

               <p>Lastest Vitals:</p>
               <li>
                   {` Date: ${info.vitals[index].date}`}
                </li>
                <li>
                   {` Height: ${info.vitals[index].height} inches`}
                </li>
                <li>
                   { `Weight: ${info.vitals[index].weight} pounds`}
                </li>
                <li>
                    {`Blood Pressure: ${info.vitals[index].systolicBP}/${info.vitals[index].diastolicBP}`}
                </li>
                
                <li>
                    {`Heart Rate: ${info.vitals[index].hr} bpm`}
                </li>
                <li>
                    {`SpO2: ${info.vitals[index].o2} percent`}
                </li>
            </div>
        )
    }
}

export default Medical;

