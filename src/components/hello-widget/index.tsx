import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectHelloMessage } from 'selectors/hello';

import useStyles from './styles';

const HelloWidget: React.FC = () => {
  const classes = useStyles();
  const helloMessage = useSelector(selectHelloMessage);

  return (
    <Typography variant="body1" className={classes.root}>
      Hello, {helloMessage}!
    </Typography>
  );
};

export default HelloWidget;
