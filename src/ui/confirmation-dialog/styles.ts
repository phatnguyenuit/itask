import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      maxWidth: 440,
      margin: spacing(2),
      padding: spacing(2.5, 5, 5),
    },
    title: {
      margin: spacing(2.5, 0, 1.5),
      padding: 0,
      color: palette.secondary.main,
      textAlign: 'center',
    },
    titleText: {
      fontWeight: 500,
      lineHeight: 1,
    },
    content: {
      margin: 0,
      padding: 0,
      textAlign: 'center',
      color: 'grey08',
      overflowY: 'visible',
    },
    actions: {
      justifyContent: 'stretch',
      margin: spacing(3, 0, 0),
      padding: 0,
    },
    formButtons: {
      flexGrow: 1,
      minWidth: 328,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'ConfirmationDialog' });

export default useStyles;
