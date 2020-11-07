'use strict';
const Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yoHelper = require('@feizheng/yeoman-generator-helper');


module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ultimate ' + chalk.red('generator-ushell-module') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'scope',
      message: 'Your project scope name?',
      default: 'jswork'
    },
    {
      type: 'input',
      name: 'module_name',
      message: 'Your project name?',
      default: yoHelper.discoverRoot
    }, {
      type: 'input',
      name: 'description',
      message: 'Your project description?'
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
      yoHelper.extendProps(this);
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**'),
      this.destinationPath(),
      this.props,
      null,
      { globOptions: { dot: true } }
    )
  }
}
