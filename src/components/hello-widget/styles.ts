import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'right',
      margin: 0,
    },
  });

export default makeStyles(styles, { classNamePrefix: 'hello-widget' });
