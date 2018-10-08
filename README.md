## Getting started

This application was generated using the Azure tools, Apollo and a miniature graphql/express server to expose a GraphiQL endpoint. 

You'll need the azure functions toolkit. On OSX:

    brew tap azure/functions
    brew install azure-functions-core-tools

    # to create an fn
    func init # add -n flag to prevent git init
    func new

Run the function locally:

    func start 

Run the GrapiQL server:

    npm run graphiql

NOTE that if you change schemas or resolvers you will need to `CTRL-C` and re-run the command; it doesn't hot reload and needs to initialize with the schema and hooks.

Then, in a browser, hit:

    http://localhost:3000/graphql

You can then explore the options available to you. 

If you copy a cURL from GraphiQL it should be executable against your running function:

```
curl 'http://localhost:7071/api/graphqlEndpoint' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-binary '{"query":"{\n  addressById(id: 1){\n  address1\n}}"}' --compressed
```

Will return:

```
{"data":{"addressById":{"address1":"High Street"}}}
```
