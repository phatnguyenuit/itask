import { Button, Box, Typography } from '@mui/material';

import useLoginWatcher from 'hooks/auth/useLoginWatcher';
import MyInput from 'components/common/my-input';
import AuthContent from 'components/auth/auth-content';
import Spin from 'ui/spin';

import { useLoginForm } from './utils';
import useStyles from './styles';

const Login: React.FC = () => {
  const classes = useStyles();
  const { form, handleLogin, loading } = useLoginForm();

  useLoginWatcher();

  return (
    <AuthContent title="Login">
      <Box className={classes.root}>
        <Typography className={classes.title} variant="h2" color="primary">
          Welcome back
        </Typography>
        <Spin loading={loading}>
          <form className={classes.form} onSubmit={handleLogin}>
            <MyInput
              fullWidth
              autoFocus
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              control={form.control}
              rules={{
                required: true,
              }}
              InputProps={{ autoComplete: 'off' }}
            />
            <MyInput
              fullWidth
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              margin="normal"
              control={form.control}
              rules={{
                required: true,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </form>
        </Spin>
      </Box>
    </AuthContent>
  );
};

export default Login;
