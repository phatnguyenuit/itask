import {
  ChangeEventHandler,
  FocusEventHandler,
  useCallback,
  useState,
} from 'react';

import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { hello } from 'states/hello';

const HelloInput: React.FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setUserName(event.target.value);
    },
    [],
  );

  const handleSave = useCallback<FocusEventHandler<HTMLInputElement>>(
    (event) => {
      dispatch(hello(event.target.value));
    },
    [dispatch],
  );

  return (
    <TextField
      variant="filled"
      id="userName"
      label="What's your name ?"
      value={userName}
      onChange={handleChange}
      onBlur={handleSave}
    />
  );
};

export default HelloInput;
