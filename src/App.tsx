import { useCallback, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import store from 'states/store';
import { User } from 'types/user';

import AppBar from 'components/app-bar';
import HelloWidget from 'components/hello-widget';
import HelloInput from 'components/hello-input';
import UsersContainer from 'components/users-container';
import WithTheme from 'components/with-theme';
import TodosContainer from 'components/todos-container';

import './App.css';

function App() {
  const [activeUser, setActiveUser] = useState<User>();

  const handleChooseUser = useCallback(
    (user: User) => () => {
      setActiveUser(user);
    },
    [],
  );

  return (
    <Provider store={store}>
      <WithTheme>
        <CssBaseline />
        <AppBar />
        <div className="App">
          <HelloWidget />
          <HelloInput />
          <UsersContainer activeUser={activeUser} onClick={handleChooseUser} />
          {activeUser && <TodosContainer user={activeUser} />}
        </div>
      </WithTheme>
    </Provider>
  );
}

export default App;
