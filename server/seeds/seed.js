const connection = require('../config/connection');

const { Disease, Fact, User, Patient } = require('../models');

const apptSeeds = require('./apptData.json');
const diseaseSeeds = require('./diseaseData.json');
const factSeeds = require('./factData.json');
const patientSeeds = require('./patientData.json');
const userSeeds = require('./userData.json');

connection.once('open', async() => {
    await Disease.deleteMany({});
    await Fact.deleteMany({});
    await Patient.deleteMany({});
    await User.deleteMany({});
    
    await Disease.collection.insertMany(diseaseSeeds); 
    await Fact.collection.insertMany(factSeeds); 
    await Patient.collection.insertMany(patientSeeds); 
    await User.collection.insertMany(userSeeds);

    console.log('Seeding complete')
    process.exit(0);
})