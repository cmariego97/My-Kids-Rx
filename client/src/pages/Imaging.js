import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_IMAGING } from '../utils/queries';

const Imaging= () => {
    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_IMAGING, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading Imagin Results...</h1>
        )
    }
    else {
        console.log(data);
        const imaging = data.onePatient.imaging
        return (
            <div>
               <h1>Imaging Results</h1>
               {imaging.map((result) => (
                <div>
                    <li>Date: {result.date}</li>
                    <li>{`Test: ${result.type} of ${result.site}`}</li>
                    <li>Results:{result.report}</li>
                </div>
              
               )
               )}

            </div>
        )
    }
}

export default Imaging;


