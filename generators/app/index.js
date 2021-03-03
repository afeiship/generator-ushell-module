"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const yoHelper = require("@jswork/yeoman-generator-helper");

require("@jswork/next-registry-choices");

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

    const prompts = [
      {
        type: "input",
        name: "scope",
        message: "Your scope (eg: `babel` )?",
        default: "jswork",
      },
      {
        type: "list",
        name: "registry",
        message: "Your registry",
        choices: nx.RegistryChoices.gets(),
      },
      {
        type: "input",
        name: "module_name",
        message: "Your project name?",
        default: yoHelper.discoverRoot,
      },
      {
        type: "input",
        name: "description",
        message: "Your project description?",
      },
    ];

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
