const express = require('express');
const graphqlHTTP = require('express-graphql');
const appSchema = require("../graphqlEndpoint/schema.js");
const res = require("../graphqlEndpoint/resolvers.js");
const apollo = require("apollo-server-express");

var typeDefs = appSchema.typeDefs;
var resolvers = res.resolvers

const server = new apollo.ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
const port = 3000;
server.applyMiddleware({ app });

app.use('/graphql', graphqlHTTP({
  schema: appSchema.schema,
  graphiql: true,
  rootValue: appSchema.resolvers
}));

app.listen(
  {port: port},
  () => console.log(`GrapiQL app listening at localhost:${port}s${server.graphqlPath}!`)
);