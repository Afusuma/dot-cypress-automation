const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false, 
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 120000, 
    setupNodeEvents(on, config) {
    },
  },
})
