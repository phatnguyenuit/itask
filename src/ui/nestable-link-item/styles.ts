import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const styles = (theme: Theme) =>
  createStyles({
    listPadding: {
      padding: 0,
    },
    item: {
      fontSize: 14,
      color: 'white',
    },
    iconWrapper: {
      minWidth: 34,
    },
    icon: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    selectedItem: {
      fontWeight: 'bold',
    },
    text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.common.black,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'NestableLinkItem' });

export default useStyles;
