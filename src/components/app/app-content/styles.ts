import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    topBar: {
      display: 'flex',
      alignItems: 'center',
      padding: spacing(2.25, 3),
      backgroundColor: 'white',
    },
    grow: {
      flexGrow: 1,
    },
    breadcrumbs: {},
    breadcrumbsLink: {
      color: 'blue03',
    },
    breadcrumbsName: {
      color: 'grey06',
    },
    content: {
      flexGrow: 1,
      padding: spacing(4, 3, 0),
    },
    versionInfo: {
      padding: spacing(1, 3),
      fontSize: 12,
      color: 'grey07',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'AppContent' });

export default useStyles;
