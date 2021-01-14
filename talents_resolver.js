const { invokeLambdaAsync} = require('./invoke')

const talents_resolver = () => invokeLambdaAsync('talents', {});

module.exports = { talents_resolver}