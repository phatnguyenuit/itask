import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    users: {
      marginTop: theme.spacing(2),
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: theme.spacing(2),
    },
  });

export default makeStyles(styles, { classNamePrefix: 'users-container' });
