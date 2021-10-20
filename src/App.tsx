import { useCallback, useState } from 'react';

import { User } from 'types/user';

import AppBar from 'components/app-bar';
import HelloWidget from 'components/hello-widget';
import HelloInput from 'components/hello-input';
import UsersContainer from 'components/users-container';
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
    <>
      <AppBar />
      <div className="App">
        <HelloWidget />
        <HelloInput />
        <UsersContainer activeUser={activeUser} onClick={handleChooseUser} />
        {activeUser && <TodosContainer user={activeUser} />}
      </div>
    </>
  );
}

export default App;
