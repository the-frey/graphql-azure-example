const graphql = require('graphql');
const gqlTools = require('graphql-tools');
const res = require("./resolvers.js")

// query language schema
typeDefs = `

  type Address {
    id: Int!
    number: Int
    address1: String
    postcode: String
  }

  scalar DateTime

  type Query {
    addressById(id: Int): Address
  }

  `;

var resolvers = res.resolvers;

module.exports.schema = gqlTools.makeExecutableSchema({
  typeDefs,
  resolvers,
});

// exports
module.exports.typeDefs = typeDefs;
