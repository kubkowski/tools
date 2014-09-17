'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ShopGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the shop subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.src.copy('somefile.js', 'somefile.js');
  }
});

module.exports = ShopGenerator;
