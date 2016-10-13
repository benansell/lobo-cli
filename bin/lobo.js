#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

var lobo = path.join(process.cwd(), 'node_modules', 'lobo', 'bin', 'lobo.js');

var errorStyle = chalk.red;

if (!fs.existsSync(lobo)) {
  console.log(errorStyle('Unable to find the lobo package for this application, please install it by running:'));
  console.log(errorStyle('> npm install lobo --save-dev'));
  process.exit(1);
}

require(lobo);
