const twilio = require('twilio');
const { Logger } = require('eazy-logger');
const prop = require('dot-prop');
const tfunk = require('tfunk');

const log = Logger({});

function format(data, fields) {
  let dataRows = [];
  if (fields.length > 0) {
    dataRows = fields.map(field => ({
      key: field,
      value: prop.get(data, field),
    }));
  } else {
    dataRows = Object.keys(data).map(key => {
      const value = data[key];
      return { key, value };
    });
  }

  const dataString = dataRows
    .map(({ key, value }) => {
      const padding = key.length > 8 ? '\t' : '\t\t';
      const val = typeof value === 'object' ? JSON.stringify(value) : value;
      return tfunk(`{bold:${key}}${padding}${val}`);
    })
    .join('\n');
  console.log(dataString); // eslint-disable-line
}

function lookupCli(number, options) {
  const client = twilio();
  const fields = (options.fields || '').split(',').filter(x => x);

  const opts = {};
  if (options.carrier) {
    opts.type = 'carrier';
  }

  return client.lookups.v1
    .phoneNumbers(number)
    .fetch(opts)
    .then(resp => format(resp.toJSON(), fields))
    .catch(err => log.error('Could not retrieve details. %s', err.message));
}

module.exports = {
  default: lookupCli,
  lookupCli,
};
