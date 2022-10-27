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

//change to this when ready to implement login
// mutation addProfile($firstName: String!, $lastName: String!, $provider: String!, $email: String!, $password: String!) {
//   addProfile(firstName: $firstName, lastName: $lastName, provider: $provider, email: $email, password: $password) {
//     token
//     profile {
//       email
//     }
//   }
// }

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       profile {
//         email
//       }
//     }
//   }
// `;

//add new message
export const ADD_MESSAGE = gql`
    mutation ($email: String!, $to: String!, $date: String!, $time: String!, $content: String!) {
        addMessage (email: $email, to: $to, date: $date, time: $time, content: $content) {
        messages {
            to
            content
        }
        }
    }
  `
  //update password 
  export const UPDATE_PASS = gql`
    mutation ($email: String!, $password: String!) {
        updateUser(email: $email, password: $password) {
        email
        password
        }
  }
  `
  //delete user
  export const DEL_USER = gql`
    mutation ($email: String!) {
        deleteUser(email: $email){
        email
        password
        }
    }
  `