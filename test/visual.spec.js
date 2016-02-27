var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
// This is your api key, make sure you use it in all your tests.
eyes.setApiKey(process.env.APPLITOOLS_KEY);

beforeEach(function() {
        browser.ignoreSynchronization = true;
});

describe('visual diff for docs', function() {
    it('go to each major section', function() {
        console.log("test")
        // Start visual testing with browser viewport set to 1024x768.
        eyes.open(browser, 'Good Will Docs', 'Visual UI for each component', {width: 1024, height: 768});
        browser.get('http://willchen90.github.io/goodwill/');

        // Visual validation point #1
        eyes.checkWindow('Initial');
        
        // End visual testing. Validate visual correctness.
        eyes.close();
        expect(1).toEqual(1);
    });
});