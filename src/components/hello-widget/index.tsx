import { useSelector } from 'react-redux';
import { selectHelloMessage } from 'selectors/hello';

import classes from './styles.module.css';

const HelloWidget: React.FC = () => {
  const helloMessage = useSelector(selectHelloMessage);

  return <p className={classes.root}>Hello, {helloMessage}!</p>;
};

export default HelloWidget;
