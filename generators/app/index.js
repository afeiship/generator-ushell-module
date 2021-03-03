"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const yoHelper = require("@jswork/yeoman-generator-helper");
const prompts = require("./prompts");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        "Welcome to the ultimate " +
          chalk.red("generator-ushell-module") +
          " generator!"
      )
    );

    return this.prompt(prompts).then((props) => {
      this.props = props;
      yoHelper.extendProps(this);
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("**"),
      this.destinationPath(),
      this.props,
      null,
      { globOptions: { dot: true } }
    );
  }
};
