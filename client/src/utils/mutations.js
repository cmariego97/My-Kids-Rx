import { gql } from '@apollo/client';

//add new user
export const ADD_USER = gql`
  mutation addProfile($firstName: String!, $lastName: String!, $gender: String!, $provider: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, gender: $gender, provider: $provider, email: $email, password: $password) {
      token
      profile {
        provider
        email
      }
    }
  }
  `
//existing user login
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        provider
        email
      }
    }
  }
`;

//add new message
export const ADD_MESSAGE = gql`
    mutation ($email: String!, $to: String!, $date: String!, $time: String!, $content: String!) {
        addMessage (email: $email, to: $to, date: $date, time: $time, content: $content) {
        messages {
            to
            date
            time
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