'use strict';

const schemas = require("./schema.js")
const gqlAzure = require('apollo-server-azure-functions')

const schema = schemas.schema;

module.exports.endpoint = function (context, request) {
    context.log('JavaScript HTTP trigger function processed a request.');

    gqlAzure.graphqlAzureFunctions({ schema })(context, request);
};
