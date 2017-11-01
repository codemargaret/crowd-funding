# CrowdFunding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Setup the project

- $ npm install
- Go to firebase and create project called "crowd-funding"
- click "add firebase to your web app"
- create file src/app/api-keys.ts
- in src/app/api-keys place this code:
<code>
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
</code>
  but replace xx's with your api details from firebase (obvi!)
- add src/app/api-keys.ts to your gitignore like this:
<code>
  #Firebase credentials
  /src/app/api-keys.ts
</code>
- visit our Firebase Console once more, select "crowd-funding".
- select the Database option from the navbar on the left-hand side.
- find blue navbar reading Realtime Database. Below this, select the option that reads RULES.
- Change both the ".read", and ".write" properties here to "true", like this:
<code>
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
</code>
- in firebase go to your "realtime database". make sure you are in the data tab, click the three dots in the upper right corner of the gray window.
- choose import JSON
- navigate to and import the sample-projects.json file from this project
