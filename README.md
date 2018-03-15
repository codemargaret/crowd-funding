# Crowd Funding

#### _A crowd-funding platform for artistic projects, 11.02.2017_

#### By _**Margaret Berry and Sara Spink**_

## Description
_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0._

## Project Goals
* Generate an app using Angular CLI.
* Store data in and retrieve data from Firebase.
* Sort data with pipes.

## Setup/Installation Requirements
_Run the following commands in Terminal:_

1. `$ git clone` [this repository](https://github.com/codemargaret/crowd-funding.git)
2. `$ cd crowd-funding`
3. `$ npm install`
4. `$ bower install`
5. _Firebase setup:_
  * _Go to [firebase](https://console.firebase.google.com) and login or create a free account._
  * _Create a project called 'crowd-funding'._
  * _Click 'add firebase to your web app'._
  * `$ touch src/app/api-keys.ts`
  * _Add the following code and replace the x's with your information:_
    - `export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx" };`
  * _Add the following code to your .gitignore file:_
    - `#Firebase credentials
    /src/app/api-keys.ts`
  * _Visit the Firebase console, click 'online-store,' and click the database option from the navbar on the lefthand side of the menu._
  * _Click the blue navbar 'Realtime Database,' then 'Rules.' Set the value of .read and .write to 'true' and click 'publish.'_
  * _'Click 'Data,' then click the three dots in the upper righthand corner of the gray window. Select 'Import JSON' and navigate to 'sample-projects.json' from this project._
6. `$ ng serve`
7. _Navigate to localhost:4200_

## Known Bugs
_There are no known bugs at this time._

## Support and contact details
_If you have issues, questions, ideas, or concerns, please contact [Margaret](codeberry1@gmail.com). Feel free to make a contribution to the code._

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used
* _JavaScript_
* _TypeScript_
* _Node_
* _Bower_
* _Angular CLI_

### License
*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Margaret Berry and Sara Spink_**
