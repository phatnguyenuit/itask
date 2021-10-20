import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      '&~&': {
        marginTop: theme.spacing(0.5),
      },
    },
  });

export default makeStyles(styles, { classNamePrefix: 'todo-widget' });
