
const yoHelper = require("@jswork/yeoman-generator-helper");

require('@jswork/next')
require("@jswork/next-registry-choices");

module.exports = [
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
