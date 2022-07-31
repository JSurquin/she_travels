const path = require('path');
const alias = require(`./src/config/aliases.js`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [
        key,
        path.resolve(__dirname, value),
    ])
);

module.exports = {
    webpack: {
        alias: resolvedAliases,
    },
};
