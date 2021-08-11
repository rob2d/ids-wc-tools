#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const args = yargs(hideBin(process.argv)).argv;
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const replaceInFileSync = require('../lib/files/replaceInFileSync');

const { namespace } = args;
const type = args.type || 'component';

if(namespace === undefined) {
  throw new Error(
    `!missing ${chalk.bold('namespace')} cmd argument; e.g. ${chalk.bold('--namespace="ids-draggable"')}`
  );
}

const srcDirs = require(`../mappings/${type}/srcDirs`)(args);
const srcFiles = require(`../mappings/${type}/srcFiles`)(args);
const replacements = require(`../mappings/${type}/replacements`)(args);

for(const { relativeDir } of srcDirs) {
  const dirPath = path.join(process.cwd(), relativeDir);

  if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log(`> ${chalk.bold(dirPath)} not found; created directory.`);
  }
}

for(const { targetPath, templatePath } of srcFiles) {
  const absoluteTemplatePath = path.join(
    __dirname,
    '../module-template',
    templatePath
  );
  const absoluteTargetPath = path.join(
    process.cwd(),
    targetPath
  );

  if(!fs.existsSync(absoluteTargetPath)) {
    fs.copyFileSync(absoluteTemplatePath, absoluteTargetPath);
    console.log(`> ${chalk.bold(absoluteTargetPath)} not found; created file.`);
  }

  for(const { input, replacer } of replacements) {
    replaceInFileSync({
      filePath: absoluteTargetPath,
      input,
      replacer
    });
  }
}
