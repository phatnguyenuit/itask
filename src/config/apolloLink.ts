import { HttpLink, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { ITASK_API_URL } from 'constants/common';
import authService from 'services/auth';
import toastService from 'services/toast';

export const httpLink = new HttpLink({
  uri: `${ITASK_API_URL}/graphql`,
});

export const authLink = new ApolloLink((operation, forward) => {
  operation.setContext((context: Record<string, any>) => ({
    headers: {
      ...context.headers,
      'x-access-token': authService.getAuthData()?.token,
    },
  }));

  return forward(operation);
});

// Log any GraphQL errors or network error that occurred
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ extensions, message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
        )}, Path: ${path}`,
      );

      if (extensions?.response?.status.toString().match(/^40[13]/)) {
        toastService.notify(extensions?.response?.body?.message, 'error');

        setTimeout(() => authService.logout(), 1000);
      }
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const apolloLink = from([authLink, errorLink, httpLink]);

export default apolloLink;
