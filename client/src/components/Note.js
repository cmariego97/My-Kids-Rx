import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_NOTES } from '../utils/queries';

const Note = () => {
     //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
     const email = 'mgreen@test.com';
     const { loading, data } = useQuery(QUERY_NOTES, {
         variables: { email }
     });

    if(loading) {
        return (
            <h1>Loading notes...</h1>
        )
    }
    else {
      console.log(data)
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

export default Note;