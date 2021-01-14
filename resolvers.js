const { openjobs_resolver} = require('./openjobs_resolver')
const { talents_resolver} = require('./talents_resolver')

const version = () => "1.0.0";


const resolvers = {
    Query: {
      version,
      openJobs: openjobs_resolver,
      talents: talents_resolver
    }
  };





module.exports = { resolvers } ;