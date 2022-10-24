import { gql } from '@apollo/client';

//add new user
export const ADD_USER = gql`
    mutation Mutation($firstName: String!, $lastName: String!, $provider: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, provider: $provider, email: $email, password: $password) {
        firstName
        lastName
        email
        }
    }
  `

//add new message
export const ADD_MESSAGE = gql`
    mutation ($email: String!, $to: String!, $date: String!, $time: String!, $content: String!) {
        addMessage (email: $email, to: $to, date: $date, time: $time, content: $content) {
        firstName
        middleName
        lastName
        messages {
            to
            content
        }
        }
    }
  `