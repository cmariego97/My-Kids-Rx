import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_NOTES } from '../utils/queries';
import Auth from '../utils/auth';

const Note = () => {
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
     const { loading, data } = useQuery(QUERY_NOTES, {
         variables: { email }
     });

    if(loading) {
        return (
            <h1>Loading notes...</h1>
        )
    }
    else {
        if (!data.onePatient) {
            return (
                <p>No visit reports found for this email, you must first contact your provider to set up your profile!</p>
            )
        }
        else {
            var note = data.onePatient.notes
            if (note.length !== 0) {
                return (
                    <div>
                        {note.map((visit) =>(
                            <div>
                                <li>Date:{visit.date}</li>
                                <li>Report:{visit.notes}</li>
                            </div>
                        )
                        )}
                    </div>
                )
            }
            else {
                return (
                    <p>No past appointment reports found!</p>
                )
            }
        }
    }
}

export default Note;