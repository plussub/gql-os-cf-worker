const { ApolloServer } = require('apollo-server-cloudflare')
const { graphqlCloudflare } = require('apollo-server-cloudflare/dist/cloudflareApollo')

const KVCache = require('../kv-cache')
const TmdbAPI = require('../datasources/tmdbApi')
const TrackAPI = require('../datasources/trackApi')
const OpensubtitlesAPI = require('../datasources/opensubtitlesApi')
const LegacyOpenSubtitlesApi = require('../datasources/legacyOpenSubtitlesApi')
const resolvers = require('../resolvers')
const typeDefs = require('../schema')

const dataSources = () => ({
    tmdbAPI: new TmdbAPI(),
    openSubtitlesAPI: new OpensubtitlesAPI(),
    legacyOpenSubtitlesAPI: new LegacyOpenSubtitlesApi(),
    trackAPI: new TrackAPI()
})

const kvCache = { cache: new KVCache() }

const createServer = graphQLOptions =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    dataSources,
    ...(graphQLOptions.kvCache ? kvCache : {}),
  })

const handler = (request, graphQLOptions) => {
  const server = createServer(graphQLOptions)
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)
}

module.exports = handler
