// Reference Configuration File
//
// This file shows all of the configuration options that may be passed
// to Protractor.
//
// Because this file shows all of the options, if used in practice some
// will be overridden or ignored. If you're looking for a seed configuration
// file, see example/conf.js

exports.config = {
  // ---------------------------------------------------------------------------
  // ----- How to connect to Browser Drivers -----------------------------------
  // ---------------------------------------------------------------------------
  //
  // Protractor needs to know how to connect to Drivers for the browsers
  // it is testing on. This is usually done through a Selenium Server.
  // There are five options - specify one of the following:
  //
  // 1. seleniumServerJar - to start a standalone Selenium Server locally.
  // 2. seleniumAddress - to connect to a Selenium Server which is already
  //    running.
  // 3. sauceUser/sauceKey - to use remote Selenium Servers via Sauce Labs.
  // 4. browserstackUser/browserstackKey - to use remote Selenium Servers via BrowserStack.
  // 5. directConnect - to connect directly to the browser Drivers.
  //    This option is only available for Firefox and Chrome.

  // ---- 2. To connect to a Selenium Server which is already running ----------
  // The address of a running Selenium Server. If specified, Protractor will
  // connect to an already running instance of Selenium. This usually looks like
  // seleniumAddress: 'http://localhost:4444/wd/hub'
  seleniumAddress: "http://localhost:4444/wd/hub",

  // ---------------------------------------------------------------------------
  // ----- What tests to run ---------------------------------------------------
  // ---------------------------------------------------------------------------

  // Spec patterns are relative to the location of this config.
  specs: [
    '../*.spec.js'
  ]

  // // ---------------------------------------------------------------------------
  // // ----- The test framework --------------------------------------------------
  // // ---------------------------------------------------------------------------

  // // Test framework to use. This may be one of:
  // // jasmine, mocha or custom.
  // //
  // // When the framework is set to "custom" you'll need to additionally
  // // set frameworkPath with the path relative to the config file or absolute
  // //  framework: 'custom',
  // //  frameworkPath: './frameworks/my_custom_jasmine.js',
  // // See github.com/angular/protractor/blob/master/lib/frameworks/README.md
  // // to comply with the interface details of your custom implementation.
  // //
  // // Jasmine is fully supported as test and assertion frameworks.
  // // Mocha has limited support. You will need to include your
  // // own assertion framework (such as Chai) if working with Mocha.
  // framework: 'jasmine',

  // // Options to be passed to jasmine.
  // //
  // // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
  // // for the exact options available.
  // jasmineNodeOpts: {
  //   // If true, print colors to the terminal.
  //   showColors: true,
  //   // Default time to wait in ms before a test fails.
  //   defaultTimeoutInterval: 30000,
  //   // Function called to print jasmine results.
  //   print: function() {},
  //   // If set, only execute specs whose names match the pattern, which is
  //   // internally compiled to a RegExp.
  //   grep: 'pattern',
  //   // Inverts 'grep' matches
  //   invertGrep: false
  // },

  // // See docs/plugins.md
  // plugins: [],

  // // Turns off source map support.  Stops protractor from registering global
  // // variable `source-map-support`.  Defaults to `false`
  // skipSourceMapSupport: false,

  // // Turns off WebDriver's environment variables overrides to ignore any
  // // environment variable and to only use the configuration in this file.
  // // Defaults to `false`
  // disableEnvironmentOverrides: false
};