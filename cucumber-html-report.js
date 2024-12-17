const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/reports',
    reportPath: './cypress/reports/cucumber-html-report',
    metadata: {
        browser: {
            name: 'chrome',
            version: '104.0'
        },
        device: 'Local test machine',
        platform: {
            name: '',
            version: ''
        }
    }
});