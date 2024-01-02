const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Pom Model run',
    embeddedScreenshots: true, 
    inlineAssets: true, //Adds the asserts inline
  },
  screenshotOnRunFailure: false, // if yo make it as false only when it fails screenshots are capture
  screenshotsFolder:"ss_folder",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io",
  },
});
