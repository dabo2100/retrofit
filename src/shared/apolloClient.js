import { HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client/core';
import { SetContextLink } from '@apollo/client/link/context';
import { domain } from './store';

const authLink = new SetContextLink((prev) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...prev.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});

const httpLink = new HttpLink({
  uri: `${domain}/graphql`,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
