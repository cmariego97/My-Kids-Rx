import { gql } from '@apollo/client';

//for user profile
export const QUERY_PROFILE = gql`
    query OneUser($email: String!) {
        oneUser(email: $email) {
        firstName
        lastName
        provider
        email
        }
    }
`
//for basic medical info
export const QUERY_INFO = gql`
    query OnePatient($email: String!) {
        onePatient(email: $email) {
        firstName
        middleName
        lastName
        allergies
        medicalHistory
        vaccines {
            date
            name
        }
        vitals {
            date
            height
            weight
            systolicBP
            diastolicBP
            hr
            o2
        }
    }
    }
`

//for lab results
export const QUERY_LAB = gql`
    query OnePatient($email: String!) {
        onePatient(email: $email) {
        labs {
            date
            cbc {
            rbc
            wbc
            platelets
            hematocrit
            }
            cmp {
            sodium
            potassium
            chloride
            calcium
            glucose
            carbonDioxide
            bun
            creatinine
            alp
            alt
            ast
            bilirubin
            albumin
            totalProtein
            }
            lipid {
            total
            ldl
            hdl
            tg
            }
            hb
        }
        }
    }
`

//for imaging results
export const QUERY_IMAGING = gql`
    query onePatient($email: String!) {
        onePatient(email: $email) {
        imaging {
            date
            type
            site
            report
        }
        }
    }
`

//for appts
export const QUERY_APPTS = gql`
    query Appointments($email: String!) {
        onePatient(email: $email) {
        appointments {
            date
            time
            reason
        }
       
        }
    }
`
//for notes
export const QUERY_NOTES = gql`
    query Appointments($email: String!) {
        onePatient(email: $email) {
            
        notes {
            date
            notes
        }
        }
    }
`
 
//for messages
export const QUERY_MESSAGES = gql`
    query OnePatient($email: String!) {
        onePatient(email: $email) {
        messages {
            to
            date
            time
            content
        }
        }
    }
`

//for resources
export const QUERY_DISEASES = gql`
    query Diseases {
        diseases {
            name
            ageGroup
            symptoms
            prevention
            link
            }
    }
`
export const QUERY_FACTS = gql`
    query Facts {
        facts {
            fact
            }
    }
`