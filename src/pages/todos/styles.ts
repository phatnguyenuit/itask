import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
    todos: {
      marginTop: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Todos' });

export default useStyles;
