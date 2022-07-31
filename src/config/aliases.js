const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components`,
    '@config': `${prefix}/config`,
    '@pages': `${prefix}/pages`,
    '@hooks': `${prefix}/hooks`,
    '@styled': `${prefix}/styled`,
});

module.exports = aliases;
