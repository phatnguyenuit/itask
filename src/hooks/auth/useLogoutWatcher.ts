import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuthData from './useAuthData';
import { authPaths } from 'routes/paths';

const useLogoutWatcher = () => {
  const authData = useAuthData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authData) {
      let redirectTo = encodeURIComponent(
        window.location.pathname + window.location.search,
      );
      if (redirectTo.localeCompare('login') === 0) redirectTo = '/';
      navigate(authPaths.login(redirectTo).path);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authData]);
};

export default useLogoutWatcher;
