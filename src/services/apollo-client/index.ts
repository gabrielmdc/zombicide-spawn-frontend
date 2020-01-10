import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';
import { Graphql } from '../../config';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  // This will avoid the 'heuristic problem'
  // source: https://spectrum.chat/apollo/apollo-client/simple-heuristic-fragment-matcher-but-your-queries-contain-union-or-interface-types~8537e840-f75e-445f-bc1f-31e316984891
  introspectionQueryResultData: {
    __schema: {
      types: [],
    },
  },
});

const cache = new InMemoryCache({
  fragmentMatcher
});

export const apolloClient = new ApolloClient({
  uri: Graphql.URI,
  cache
});
