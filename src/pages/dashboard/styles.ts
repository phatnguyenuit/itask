import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import dashboardBackground from 'assets/images/undraw_taking_notes_re_bnaf.svg';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main,
      backgroundImage: `url(${dashboardBackground})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
      height: '100%',
    },
    text: {
      marginTop: theme.spacing(1),
      fontWeight: 500,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Dashboard' });

export default useStyles;
