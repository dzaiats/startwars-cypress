# QA Engineer Assessment Solution

* The whole solution was done in 4 hours. Also spent ~1 hour on cleanup
* Additionally, was implemented Github Actions workflow for continues testing
* Cleaned-up the framework from unused dependencies and frameworks (Karma, e.g)
* The scenarios for the Planets validations are developed in Cucumber using Gherkin approach
* The scenarios for the People validations are developed using Jasmine parametrized approach
* To run the whole solution you need to:
  - install dependencies: `npm ci`
  - start NG server: `npm run start`
  - run the tests: `npm run test:run`
  - run cucumber only tests: `npm run test:e2e:run`
  - run integration only tests: `npm run test:integration:run`

### What can be improved
* Add HTML reporting
* Implement search operation as Cypress command
* Add Env variables into Github actions for splitting the execution
