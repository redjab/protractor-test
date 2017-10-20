// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 11000,
  specs: [
    './out-tsc/e2e/**/*.e2e-spec.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  noGlobals: true
};
