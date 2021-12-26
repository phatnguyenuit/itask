import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import authService from 'services/auth';
import useBackendServiceCallback from 'hooks/useBackendServiceCallback';

const initialLoginValues: LoginFormData = {
  email: 'fast.nguyen@gmail.com',
  password: 'New=Password!@123',
};

export const useLoginForm = () => {
  const form = useForm<LoginFormData>({ defaultValues: initialLoginValues });
  const [{ loading }, login] = useBackendServiceCallback(authService.login);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLogin = useMemo(() => form.handleSubmit(login), [login]);

  return { form, handleLogin, loading };
};

export interface LoginFormData {
  email: string;
  password: string;
}
