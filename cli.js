#!/usr/bin/env node
const meow = require('meow');
const { lookupCli } = require('.');

const cli = meow(
  `
    Usage
      $ lookup <input>

    Options
      --carrier, -c  Include carrier info
      --fields, -f Comma-List of properties

    Examples
      $ lookup +18312161886
`,
  {
    flags: {
      carrier: {
        type: 'boolean',
        alias: 'c',
      },
      fields: {
        type: 'string',
        alias: 'f',
      },
    },
  }
);

lookupCli(cli.input[0], cli.flags);
