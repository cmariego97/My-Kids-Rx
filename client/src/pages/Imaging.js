import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_IMAGING } from '../utils/queries';
import Auth from '../utils/auth';

// import MUI styles
import { Box, Typography } from '@material-ui/core';

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
        const renderImaging = () => {
            //if patient not in database
            if (!data.onePatient) {
                return (
                    <p>Email not on file with a provider, contact your provider for details!</p>
                )
            }
            else {
                const imaging = data.onePatient.imaging
                if (imaging.length !== 0) {
                    return (
                        imaging.map((result) => (
                            <div>
                                <li>{`Date: ${result.date}`}</li>
                                <li>{`Test: ${result.type} of ${result.site}`}</li>
                                <li>{`Results: ${result.report}`}</li>
                            </div>
                        
                        )
                        )
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
        return (
            <Box className="wrap siteWrap">
                <Box className="card">
                    <Typography variant="h5">Imaging Results</Typography>
                    {renderImaging()}
                </Box>
            </Box>
        )
    }
}

export default Imaging;


