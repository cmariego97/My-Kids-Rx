import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_APPTS } from '../utils/queries';
import Auth from '../utils/auth';

const Appt = () => {
    //retrieve email from jwt to use to find specific patient
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    //find appts query
    const { loading, data } = useQuery(QUERY_APPTS, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading upcoming appointments...</h1>
        )
    }
    else {
        //if user not a patient in database
        if (!data.onePatient) {
            return (
                <p>Email not on file with a provider, contact your provider to schedule an appointment!</p>
            )
        }
        else {
            var appointment = data.onePatient.appointments
            if (appointment.length !== 0) {
                return (
                    <div>
                        {appointment.map((visit) =>(
                            <div>
                                <li>Date: {visit.date}</li>
                                <li>Time: {visit.time}</li>
                                <li>Reason: {visit.reason}</li>
                            </div>
                        )
                        )}
                    </div>
                )
            }
            else {
                //if in database but no appts on file
                return (
                    <p>No upcoming appointments, contact your provider to schedule!</p>
                )
            }
        }
    }
}

export default Appt;