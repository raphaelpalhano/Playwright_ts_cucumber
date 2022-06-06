# Cucumber base with playwright

# Record Videos

## Config: src/core/config

~~~js

const VIDEO = true ? 'record': 'not record';

~~~

# Reports

## Html

- run the command `npm run report`.

## Allure

### At least in Lubuntu 20.04 to open the html report

- Modify the `package.json` in `"report": "xdg-open reports/report.html"`

## To view allure report

- run the command `npm run allure`.

# Base reference project

<a href="<https://github.com/Tallyb/cucumber-playwright"> Tally Barak</a>
