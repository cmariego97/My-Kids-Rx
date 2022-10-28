const { gql } = require('apollo-server-express');
//for client side
    //copy queries saved in apollo
const typeDefs = gql`
    type Disease {
        _id: ID
        name: String
        ageGroup: String
        symptoms: String
        prevention: String
        link: String
    }
    type Fact {
        _id: ID
        fact: String
    }
    type User {
        _id: ID
        firstName: String
        lastName: String
        provider: String
        email: String
        password: String
    }

    type Message {
        _id: ID
        to: String
        date: String
        time: String
        content: String
    }
    type Appointment {
        _id: ID
        date: String
        time: String
        reason: String
    }
    type Medication {
        _id: ID
        name: String
        dose: Float
        directions: String
    }
    type Note {
        _id: ID
        date: String
        notes: String
    }
    type Vaccine {
        _id: ID
        name: String
        dose: Float
        date: String
        site: String
        lotNumber: Int
        expDate: String
    }
    type Vitals {
        _id: ID
        date: String
        height: Int
        weight: Float
        systolicBP: Int
        diastolicBP: Int
        hr: Int
        o2: Int
    }
    type CBC {
        _id: ID
        rbc: Int
        wbc: Int
        platelets: Int
        hematocrit: Float
    }
    type CMP {
        _id: ID
        sodium: Int
        potassium: Float
        chloride: Int
        calcium: Float
        glucose: Int
        carbonDioxide: Int
        bun: Int
        creatinine: Float
        alp: Int
        alt: Int
        ast: Int
        bilirubin: Float
        albumin: Float
        totalProtein: Float
    }
    type Lipid {
        _id: ID
        total: Int
        ldl: Int
        hdl: Int
        tg: Int
    }
    type Imaging {
        _id: ID
        date: String
        type: String
        site: String
        report: String
    }

    type Lab {
        _id: ID
        date: String
        cbc: CBC
        cmp: CMP
        lipid: Lipid
        hb: Float
    }
    type Patient {
        _id: ID
        mrn: String
        firstName: String
        middleName: String
        lastName: String
        dob: String
        provider: String
        messages: [Message]
        gender: String
        allergies: String
        medicalHistory: String
        guardianName: String
        guardianPhone: String
        guardianEmail: String
        appointments: [Appointment]
        medications: [Medication]
        notes: [Note]
        vaccines: [Vaccine]
        vitals: [Vitals]
        labs: [Lab]
        imaging: [Imaging]
    }

    type Auth {
        token: ID!
        profile: User
      }

    type Query {
        diseases: [Disease]
        facts: [Fact]
        oneUser(email: String!): User
        onePatient(email: String!): Patient
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, provider: String!, email: String!, password: String!): Auth

        addMessage(email: String!, to: String!, date: String!, time: String!, content: String!): Patient

        updateUser(email: String!, password: String!): User

        deleteUser(email: String!): User

        login(email: String!, password: String!): Auth
    }
`
module.exports = typeDefs;