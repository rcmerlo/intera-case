const { invokeLambdaAsync} = require('./invoke')

const openjobs_resolver = () => invokeLambdaAsync('openjobs', {});


module.exports = { openjobs_resolver}