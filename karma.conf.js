//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'lib/angular/angular.js',
      'lib/angular-aria/angular-aria.js',
      'lib/angular-animate/angular-animate.js',
      'lib/angular-messages/angular-messages.js',
      'lib/angular-material/angular-material.js',
      'lib/angular-route/angular-route.js',
      'app.js',
      'resume/resume.module.js',
      'resume/resume-layout/resume-layout.component.js',
      'resume/header/header.component.js',
      'resume/education/education.component.js',
      'resume/experience/experience.component.js',
      'resume/skills/skills.component.js',
      'resume/**/*.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      '**/*.html': ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      
      moduleName: "my.templates"
    },
    logLevel: config.LOG_DEBUG

  });
};
