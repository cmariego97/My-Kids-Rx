const { Patient, User, Disease, Fact, Provider } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        //finds single patient by email
        onePatient: async (parent, args) => {
            return await Patient.findOne({ guardianEmail: args.email})
        },
        //finds single user by email
        oneUser: async (parent, args) => {
            return await User.findOne({ email: args.email})
        },
        //finds all diseases
        diseases: async () => {
            return await Disease.find({})
        },
        //finds all facts
        facts: async () => {
            return await Fact.find({})
        },
        //finds all providers
        providers: async () => {
            return await Provider.find({})
        }
    },
    Mutation: {
        //adds new user and utilizes jwt
        addUser: async(parent, { firstName, lastName, provider, email, password}) => {
           const profile = await User.create({firstName, lastName, provider, email, password}) 
           const token = signToken(profile);
            return { token, profile };

        },
        //adds new message to specified patient found by email
        addMessage: async (parent, { email, to, date, time, content}) => {
            return await Patient.findOneAndUpdate(
                { guardianEmail: email },
                { $addToSet: { messages: { to, date, time, content} }},
                { runValidators: true , new: true}
                )
        },
        //finds user by email and updates password
        updateUser: async (parent, {email, password}) => {
            return await User.findOneAndUpdate(
                {email},
                {password},
                { runValidators: true, new: true}
            )
        },
        //finds user by email and deletes user
        deleteUser: async(parent, {email}) => {
            return await User.findOneAndDelete({email})
        },
        //finds user by email and utilizes jwt
        login: async (parent, { email, password }) => {
            //check if user with email exists
            const profile = await User.findOne({ email });
            if (!profile) {
              throw new AuthenticationError('No profile with this email found!');
            }
            //check if correct password was given
            if (password !== profile.password) {
            throw new AuthenticationError('Incorrect password!');  
            }
            const token = signToken(profile);
            return { token, profile };
          },
    }
}

module.exports = resolvers;