import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_IMAGING } from '../utils/queries';
import Auth from '../utils/auth';

const Imaging= () => {
    //retrieve email from jwt to use to find specific patient
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    //imaging results query
    const { loading, data } = useQuery(QUERY_IMAGING, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading Imaging Results...</h1>
        )
    }
    else {
        //if patient not in database
        if (!data.onePatient) {
            return (
                <p>No imaging results found for this email, you must first contact your provider to set up your profile!</p>
            )
        }
        else {
            const imaging = data.onePatient.imaging
            if (imaging.length !== 0) {
                return (
                    <div>
                       <h1>Imaging Results</h1>
                       {imaging.map((result) => (
                        <div>
                            <li>{`Date: ${result.date}`}</li>
                            <li>{`Test: ${result.type} of ${result.site}`}</li>
                            <li>{`Results: ${result.report}`}</li>
                        </div>
                      
                       )
                       )}
        
                    </div>
                )
            }
            else {
                //if no imaging results for the patient
                return (
                    <p>No imaging results on file!</p>
                )
            }
        }
    }
}

export default Imaging;


