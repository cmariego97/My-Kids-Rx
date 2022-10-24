const { Schema, model } = require('mongoose');
//import models for labs, vitals, etc
const Medication = require('./Medication');
const Note = require('./Note');
const Vaccine = require('./Vaccine');
const Vitals = require('./Vitals');
const Lab = require('./Lab');
const Imaging = require('./Imaging')
const Appointment = require('./Appointment')
const Message = require('./Message')

// Schema to create patient model
const patientSchema = new Schema(
  {
    mrn: {
      type: String,
      required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    provider: {
      type: String,
      required: true
    },
    messages: [Message],
    gender: {
        type: String,
        required: true
    },
    allergies: {
        type: String,
        required: true
    },
    medicalHistory: {
        type: String,
        required: true
    },
    guardianName: {
        type: String,
        required: true
    },
    guardianPhone: {
        type: String,
        required: true
    },
    guardianEmail: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
    },
    appointments: [Appointment],
    medications: [Medication],
    notes: [Note],
    vaccines: [Vaccine],
    vitals: [Vitals],
    labs: [Lab],
    imaging: [Imaging]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

const Patient = model('Patient', patientSchema);

module.exports = Patient;