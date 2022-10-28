import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_APPTS } from '../utils/queries';
import Auth from '../utils/auth';

const Appt = () => {
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    const { loading, data } = useQuery(QUERY_APPTS, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading upcoming appointments...</h1>
        )
    }
    else {
        if (!data.onePatient) {
            return (
                <p>No appointments found for this email, you must first contact your provider to set up your profile!</p>
            )
        }
        else {
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
}

export default Appt;