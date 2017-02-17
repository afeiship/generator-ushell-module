'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yoHelper = require('yeoman-generator-helper');
var nx = require('next-js-core2');


module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ultimate ' + chalk.red('generator-ushell-module') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'module_name',
      message: 'Your project name?',
      default: yoHelper.discoverRoot
    },{
      type: 'input',
      name: 'description',
      message: 'Your project description?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('./**'),
      this.destinationPath('./'),
      this.props
    )
  },

  install: function () {
    //this.installDependencies();
  },
  end:function () {
    console.log('enjoy it!');
  }
});
