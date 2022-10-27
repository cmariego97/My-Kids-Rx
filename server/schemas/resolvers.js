const { Patient, User, Disease, Fact } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        onePatient: async (parent, args) => {
            return await Patient.findOne({ guardianEmail: args.email})
        },
        oneUser: async (parent, args) => {
            return await User.findOne({ email: args.email})
        },
        diseases: async () => {
            return await Disease.find({})
        },
        facts: async () => {
            return await Fact.find({})
        }
    },
    Mutation: {
        addUser: async(parent, { firstName, lastName, provider, email, password}) => {
            // return await User.create({firstName, lastName, provider, email, password})
           const profile = await User.create({firstName, lastName, provider, email, password}) 
           const token = signToken(profile.email);
            return { token, profile };

        },
        addMessage: async (parent, { email, to, date, time, content}) => {
            return await Patient.findOneAndUpdate(
                { guardianEmail: email },
                { $addToSet: { messages: { to, date, time, content} }},
                { runValidators: true , new: true}
                )
        },
        updateUser: async (parent, {email, password}) => {
            return await User.findOneAndUpdate(
                {email},
                {password},
                { runValidators: true, new: true}
            )
        },
        deleteUser: async(parent, {email}) => {
            return await User.findOneAndDelete({email})
        },
        // login: async (parent, { email, password }) => {
        //     const profile = await User.findOne({ email });
        //     if (!profile) {
        //       throw new AuthenticationError('No profile with this email found!');
        //     }

        //     if (password !== profile.password) {
        //     throw new AuthenticationError('Incorrect password!');  
        //     }
        //     const token = signToken(profile.email);
        //     return { token, profile };
        //   },
    }
}

module.exports = resolvers;