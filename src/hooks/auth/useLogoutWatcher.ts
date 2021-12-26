import { useApolloClient } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import useAuthData from './useAuthData';
import { authPaths } from 'routes/paths';

const useLogoutWatcher = () => {
  const authData = useAuthData();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  useEffect(() => {
    if (!authData) {
      apolloClient.resetStore().then(() => {
        let redirectTo = encodeURIComponent(
          window.location.pathname + window.location.search,
        );
        if (redirectTo.localeCompare(authPaths.login().path) === 0)
          redirectTo = '/';
        navigate(authPaths.login(redirectTo).path);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authData]);
};

export default useLogoutWatcher;
