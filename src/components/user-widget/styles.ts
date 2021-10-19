import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      border: '2px solid transparent',
      backgroundColor: 'cadetblue',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1, 2),
      cursor: 'pointer',
      boxSizing: 'border-box',

      '&:hover,&$active': {
        borderColor: 'blue',
      },
    },
    active: {},
  });

export default makeStyles(styles, { classNamePrefix: 'user-widget' });
