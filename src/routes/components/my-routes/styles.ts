import { makeStyles, createStyles } from '@mui/styles';

const styles = createStyles({
  loadingPage: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

const useStyles = makeStyles(styles, { classNamePrefix: 'Routes' });

export default useStyles;
