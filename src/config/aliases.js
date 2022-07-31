const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components`,
    '@config': `${prefix}/config`,
    '@pages': `${prefix}/pages`,
    '@hooks': `${prefix}/hooks`,
    '@styled': `${prefix}/styled`,
    '@scss': `${prefix}/assets/scss`,
    '@src': `${prefix}`,
});

module.exports = aliases;
