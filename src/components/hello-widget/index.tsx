import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectHelloMessage } from 'selectors/hello';

import classes from './styles.module.css';

const HelloWidget: React.FC = () => {
  const helloMessage = useSelector(selectHelloMessage);

  return (
    <Typography variant="body1" className={classes.root}>
      Hello, {helloMessage}!
    </Typography>
  );
};

export default HelloWidget;
