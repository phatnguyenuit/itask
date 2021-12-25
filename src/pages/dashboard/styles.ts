import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import IntroBackground from 'assets/images/intro_background.svg';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main,
      backgroundImage: `url(${IntroBackground})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
    },
    text: {
      marginTop: theme.spacing(1),
      fontWeight: 500,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Dashboard' });

export default useStyles;
