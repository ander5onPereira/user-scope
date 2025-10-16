import { ENV } from '@/utils/env';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: ENV.VITE_API_URL_GRAPHQL,
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
