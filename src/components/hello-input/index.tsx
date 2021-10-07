import {
  useCallback,
  useState,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
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
    <div>
      <label htmlFor="userName">What's your name ?</label>
      <br />
      <input
        id="userName"
        value={userName}
        onChange={handleChange}
        onBlur={handleSave}
      />
    </div>
  );
};

export default HelloInput;
