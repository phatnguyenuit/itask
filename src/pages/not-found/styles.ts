import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      minHeight: '560px',
      padding: spacing(4, 3),
    },
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: 'white',
    },
    logo: {
      marginBottom: spacing(5),
    },
    subtitle: {
      marginTop: spacing(1.5),
      marginBottom: spacing(3),
    },
    homeButton: {
      width: '144px',
    },
    versionInfo: {
      position: 'absolute',
      bottom: spacing(2),
      textAlign: 'center',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'NotFound' });

export default useStyles;
