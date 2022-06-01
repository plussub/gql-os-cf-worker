import { ApolloServer } from 'apollo-server-cloudflare';

import { graphqlCloudflare } from 'apollo-server-cloudflare/dist/cloudflareApollo';

import {TmdbApi} from '../datasources/tmdbApi';
import {OpenSubtitlesApi} from '../datasources/openSubtitlesApi';
import {TrackApi} from '../datasources/trackApi';

import {KVCache} from '../kv-cache';
import { resolvers } from '../resolvers';

import {schema} from '../schema';

const dataSources = () => ({
    tmdbApi: new TmdbApi(),
    openSubtitlesApi: new OpenSubtitlesApi(),
    trackApi: new TrackApi()
})

const kvCache = { cache: new KVCache() }

const createServer = graphQLOptions =>
  new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    dataSources,
    ...(graphQLOptions.kvCache ? kvCache : {}),
  })

export const apollo = (request, graphQLOptions) => {
  const server = createServer(graphQLOptions)
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)
}