gqlDT = require('graphql-iso-date')

var GraphQLDateTime = gqlDT.GraphQLDateTime

// roll up, roll up, get yr resolvers here
// we jam in a DT type for iso datetimes
resolvers = {
  Query: {
    addressById: function (_, {id}) {
      return fakeAddresses[id];
    }
  },
  DateTime: GraphQLDateTime,
};

module.exports.resolvers = resolvers;


var fakeAddresses = {
  1: {
    id: 1,
    number: 6,
    address1: "High Street",
    postcode: "M4 1EF"
  },
  2: {
    id: 2,
    number: 4,
    address1: "High Street",
    postcode: "M4 1EF"
  }
};

