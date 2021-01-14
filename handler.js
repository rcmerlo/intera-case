const { ApolloServer } = require('apollo-server-lambda');
const { schema }  = require('./schema');
const { resolvers } = require('./resolvers');




const createHandler = () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    playground: true,  //TODO: get this from environment variable
    introspection: true, //TODO: get this from environment variable
  });

  return server.createHandler({ cors: {
    origin: '*',
    credentials: false,
  }});
}

module.exports.graphqlHandler = createHandler()

