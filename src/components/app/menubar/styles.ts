import { Theme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { makeStyles, createStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
    toolbar: {
      display: 'flex',
      padding: theme.spacing(0, 2),
    },
    toggleSidebarButton: {
      minWidth: 24,
      marginRight: theme.spacing(1),
      padding: theme.spacing(1),

      '& .MuiIcon-root': {
        fontSize: 24,
        color: theme.palette.common.white,
      },
    },
    divider: {
      height: 24,
    },
    grow: {
      flexGrow: 1,
    },
    profileButton: {
      padding: theme.spacing(1),
    },
    avatar: {
      width: 36,
      height: 36,
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Menubar' });

export default useStyles;
