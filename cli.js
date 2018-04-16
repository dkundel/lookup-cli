#!/usr/bin/env node
'use strict';
const meow = require('meow');
const { lookupCli } = require('.');

const cli = meow(
  `
    Usage
      $ lookupCli <input>

    Options
      --rainbow, -r  Include a rainbow

    Examples
      $ lookupCli unicorns --rainbow
      🌈 unicorns 🌈
`,
  {
    flags: {
      rainbow: {
        type: 'boolean',
        alias: 'r',
      },
    },
  }
);

lookupCli(cli.input[0], cli.flags);
