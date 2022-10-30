# My-Kids-Rx

INCLUDE MOCK IMAGE OF HOMEPAGE HERE

---

## Description
The purpose of this application is to provide an electronic system for patients to keep track of their health records. Like other electronic health record (EHR) systems, features include viewing upcoming and past appointments, medications, vaccines, and vital signs. Patients can also send and recive messages from their physician. What makes Kids-RX different is that it is specifically designed for use in pediatrics and includes features that were implemented with children in mind, including games for them to play while in a waiting room. This application currently only has a patient login, as it was built in one week, but future development will include linking it with our Kids-Rx provider application. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Collaborators](#collaborators)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

N/A

### What's included

Within this repository you'll find the following directories and files:
~~~
My-Kids-Rx (Patient Side)
.
├── CHANGELOG.md
├── README.md
├── client
│   ├── public
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── src
│   │   ├── assets
│   │   │   └── images
│   │   │       ├── site-design-images
│   │   │       │   ├── about-us-whale.svg
│   │   │       │   ├── animal-bg.png
│   │   │       │   ├── HeartPtLogin.gif
│   │   │       │   ├── kidsrx-logo.svg
│   │   │       │   └── plain-animal.bg.svg
│   │   │       ├── brain.jpg
│   │   │       ├── ear.jpg
│   │   │       ├── heart.jpg
│   │   │       ├── lungs.jpg
│   │   │       ├── o.png
│   │   │       ├── stomach.jpg
│   │   │       ├── toes.jpg
│   │   │       └── x.png
│   │   ├── components
│   │   │   ├── Appt.js
│   │   │   ├── CustomBtn.js
│   │   │   ├── Disease.js
│   │   │   ├── Fact.js
│   │   │   ├── Footer.js
│   │   │   ├── Grid.js
│   │   │   ├── Header
│   │   │   ├── HeaderAppBar.js
│   │   │   ├── Navbar.js
│   │   │   ├── NavBurger.js
│   │   │   └── Note.js
│   │   ├── pages
│   │   │   ├── AccountCreate.js
│   │   │   ├── AccountLoginPatient.js
│   │   │   ├── Appointment.js
│   │   │   ├── Game.js
│   │   │   ├── Homepage.js
│   │   │   ├── Imaging.js
│   │   │   ├── Jeopardy.js
│   │   │   ├── Lab.js
│   │   │   ├── Matching.js
│   │   │   ├── Medical.js
│   │   │   ├── Messaging.js
│   │   │   ├── Profile.js
│   │   │   ├── Resources.js
│   │   │   └── TTT.js
│   │   ├── utils
│   │   │   ├── jeopardyData.js
│   │   │   ├── mutations.js
│   │   │   └── queries.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
├── server
~~~

---

## Usage
To access this application, visit the following URL: [https://my-kids-rx-emr.herokuapp.com/](https://my-kids-rx-emr.herokuapp.com/). Browse the homepage for business information, or select one of the options in the navigation bar at the top of the page.
---
Select "Patient Login" to login as a patient, or the user may create a new account. Only patients with an email on file with their physician's office will be able to create an account.
[insert screen shot]
---
Once the user is logged in they may choose from the following options view profile, view medical information, view appointments, view imaging results, view lab results, play games, view resources, and send/view messages.
[insert screen shots]
--- 
The profile page will show account information and have the options to change password and delete account. In order to carry out either of these options, the user must enter their current password correctly.
[insert screen shot]
---
The medical information page shows allergies, medical history, medications, vaccines, and vital signs that are on file with their physician.
[insert screen shot]
---
The appointments page shows upcoming appointments as well as reports from previous appointments.
[insert screen shot]
---
The imaging results page shows imaging results that are on file with their physician.
[insert screen shot]
---
The lab results page shows lab results that are on file with their physician.
[insert screen shot]
---
The games page has a few of games from the user to choose from. Click on the corresponding button to be directed to a specific game.
[insert 3 screen shots]
---
The resources page will show a randomly generated childhood illness from our database, as well as a randomly generated fun fact.
[insert screen shot]
---
The messages page will display messages that the user previously sent to their physician. They can also send out a new message by filling out the form.
[insert screen shot]
---
The user may log out at any time by visiting the navigation bar.

## Collaborators
- [Rita Pecuch](https://github.com/rpecuch)
- [Nick Stevens](https://github.com/stezzzy)
- [Kevin Crespo](https://github.com/kcrespo15)

## Credits
This project was built using the following Node.js packagesg

The [Mayo Clinic](https://www.mayoclinic.org/diseases-conditions) website was used to build our database of childhood illness information.
The [National Geographic Kids](https://www.natgeokids.com/uk/discover/science/general-science/15-facts-about-the-human-body/) website was used while building our database of human body fun facts.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application is covered under the MIT license.
To view a description of this license type, refer to the repository or click [♡ here ♡](https://opensource.org/licenses/MIT).

---

## Badges
![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

## Contributing

Ways to contribute include suggesting bug fixes and ideas for new features. 

## Questions
If you have any questions or would like to provide feedback, do not hesitate to contact any of the collaborators.
  - Clarence Go: cmarie.go97@gmail.com
  - Rita Pecuch: rpecuch@comcast.net
  - Nick Stevens: nickyapril123@gmail.com
  - Kevin Crespo: KevinCrespo15@gmail.com