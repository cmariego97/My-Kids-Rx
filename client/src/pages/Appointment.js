import React from 'react';
//import components
import Appt from '../components/Appt'
import Note from '../components/Note'

const Appointment = () => {
   return(
   <div>
    <h1>Upcoming Appointments</h1>
    <Appt/>
    <h1>Past Appointments</h1>
    <Note/>
   </div>

   );
}

export default Appointment;

