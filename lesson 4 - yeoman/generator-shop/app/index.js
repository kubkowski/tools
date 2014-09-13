'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ShopGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the praiseworthy Shop generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'includeBooks',
      message: 'Would you like to include books?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.includeBooks = props.includeBooks;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.mkdir('app');
      this.mkdir('app/templates');

      this.copy('_package.json', 'package.json');
      this.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
      this.copy('editorconfig', '.editorconfig');
      this.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = ShopGenerator;
