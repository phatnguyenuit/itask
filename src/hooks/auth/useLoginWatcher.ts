import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import useAuthData from './useAuthData';

const useLoginWatcher = () => {
  const authData = useAuthData();
  const navigate = useNavigate();

  useEffect(() => {
    if (authData) {
      const redirectTo =
        new URLSearchParams(window.location.search).get('redirect') || '/';
      navigate(redirectTo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authData]);
};

export default useLoginWatcher;
