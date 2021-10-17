import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid transparent',
      backgroundColor: 'cadetblue',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1, 2),
    },
  });

export default makeStyles(styles, { classNamePrefix: 'user-widget' });
