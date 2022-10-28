const connection = require('../config/connection');

const { Disease, Fact, User, Patient, Provider } = require('../models');

const diseaseSeeds = require('./diseaseData.json');
const factSeeds = require('./factData.json');
const patientSeeds = require('./patientData.json');
const userSeeds = require('./userData.json');
const providerSeeds = require('./providerData.json');

connection.once('open', async() => {
    await Disease.deleteMany({});
    await Fact.deleteMany({});
    await Patient.deleteMany({});
    await User.deleteMany({});
    await Provider.deleteMany({});
    
    await Disease.collection.insertMany(diseaseSeeds); 
    await Fact.collection.insertMany(factSeeds); 
    await Patient.collection.insertMany(patientSeeds); 
    await User.collection.insertMany(userSeeds);
    await Provider.collection.insertMany(providerSeeds);

    console.log('Seeding complete')
    process.exit(0);
})