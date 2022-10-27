import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_APPTS } from '../utils/queries';

const Appt = () => {
    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_APPTS, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading upcoming appointments...</h1>
        )
    }
    else {
      console.log(data)
        var appointment = data.onePatient.appointments
        if (appointment.length !== 0) {
            return (
                <div>
                    {appointment.map((visit) =>(
                        <div>
                            <li>Date:{visit.date}</li>
                            <li>Time:{visit.time}</li>
                            <li>Reason:{visit.reason}</li>
                        </div>
                    )
                    )}
                </div>
            )
        }
        else {
            return (
                <p>No upcoming appointments!</p>
            )
        }
    }
}

export default Appt;