import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
    },
    homeLink: {
      lineHeight: 0,
      color: theme.palette.getContrastText(theme.palette.common.white),
      textTransform: 'none',
      textDecoration: 'none',
    },
    menuItem: {
      color: theme.palette.common.black,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Sidebar' });

export default useStyles;
