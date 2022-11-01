# My-Kids-Rx

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

![home page](./client/src/assets/images/readme/home.png)

## Description
The purpose of this application is to provide an electronic system for patients to keep track of their health records. Like other electronic health record (EHR) systems, features include viewing upcoming and past appointments, medications, vaccines, and vital signs. Patients can also send and recive messages from their physician. What makes Kids-RX different is that it is specifically designed for use in pediatrics and includes features that were implemented with children in mind, including games for them to play while in a waiting room. This application currently only has a patient login, as it was built in one week, but future development will include linking it with our Kids-Rx provider application. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Collaborators](#collaborators)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

N/A

## Usage
To access this application, visit the following URL: [https://my-kids-rx-emr.herokuapp.com/](https://my-kids-rx-emr.herokuapp.com/). Browse the homepage for business information, or select one of the options in the navigation bar at the top of the page.

Select "Patient Login" to login as a patient, or the user may create a new account.

![login page](./client/src/assets/images/readme/login.png)

![create account page](./client/src/assets/images/readme/create.png)

Once the user is logged in they may choose from the following options: view profile, view medical information, view appointments, view imaging results, view lab results, play games, view resources, and send/view messages.

The profile page will show account information and basic medical information, along with the options to change password and delete account. In order to carry out either of these options, the user must enter their current password correctly.

![profile page](./client/src/assets/images/readme/profile.png)

The appointments page shows upcoming appointments as well as reports from previous appointments.

![appointments page](./client/src/assets/images/readme/appt.png)

The imaging results page shows imaging results that are on file with their physician.

![imaging results page](./client/src/assets/images/readme/imaging.png)

The lab results page shows lab results that are on file with their physician.

![lab results page](./client/src/assets/images/readme/lab.png)

The games page has a few of options for the user to choose from: Matching, Tic-Tac-Toe, and Operation. Click on the corresponding button to be directed to a specific game.

![game options page](./client/src/assets/images/readme/games.png)

![operation page](./client/src/assets/images/readme/op.png)

![tic tac toe page](./client/src/assets/images/readme/ttt.png)

![matching game page](./client/src/assets/images/readme/match.png)

The resources page will show a randomly generated childhood illness from our database, as well as a randomly generated fun fact.

![resources page](./client/src/assets/images/readme/resources.png)

The messages page will display messages that the user previously sent to their physician. They can also send out a new message by filling out the form.

![messaging page](./client/src/assets/images/readme/message.png)

The user may log out at any time by visiting the navigation bar.

## Collaborators
- [Rita Pecuch](https://github.com/rpecuch)
- [Nick Stevens](https://github.com/stezzzy)
- [Kevin Crespo](https://github.com/kcrespo15)

## Credits
This project was built using the following Node.js packages: apollo-server-express, dotenv, express, graphql, jsonwebtoken, mongoose, apollo/client, emotion/react emotion/styled, fontsource/roboto, font awesome, material-ui, mui, jwt-decode, moment, react, react-dom react-external-link, react-scripts, and react-scroll.

The [Mayo Clinic](https://www.mayoclinic.org/diseases-conditions) website was used to build our database of childhood illness information.

The [National Geographic Kids](https://www.natgeokids.com/uk/discover/science/general-science/15-facts-about-the-human-body/) website was used while building our database of human body fun facts.

## License

This application is covered under the MIT license.
To view a description of this license type, refer to the repository or click [♡ here ♡](https://opensource.org/licenses/MIT).

## Contributing

Ways to contribute include suggesting bug fixes and ideas for new features. 

## Questions
If you have any questions or would like to provide feedback, do not hesitate to contact any of the collaborators.
  - Clarence Go: cmarie.go97@gmail.com
  - Rita Pecuch: rpecuch@comcast.net
  - Nick Stevens: nickyapril123@gmail.com
  - Kevin Crespo: KevinCrespo15@gmail.com
