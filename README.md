### Install
`npm install`
`npm install -g allure-commandline --save-dev`
`npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register`

### For using Allure reporter you need Java 8 or higher on your PC

### Run tests
all tests:

`npm test`

specific file:

`npx wdio wdio.conf.js --spec <path to file>`

for example:

`npx wdio wdio.conf.js --spec specs/tests/1_registration.js`
`npx wdio wdio.conf.js --spec specs/tests/2_registration_ddd.js`
`npx wdio wdio.conf.js --spec specs/tests/3_login.js`

### Generate allure
`npm run report`

### Run REPL with Chrome
`npm run repl`

### SITE
[https://anatoly-karpovich.github.io/HiqoMeetup/]
