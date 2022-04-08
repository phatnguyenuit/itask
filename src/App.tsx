import { useCallback, useState } from 'react';

import AppBar from 'components/app-bar';
import HelloInput from 'components/hello-input';
import HelloWidget from 'components/hello-widget';
import TodosContainer from 'components/todos-container';
import UsersContainer from 'components/users-container';
import { User } from 'types/user';

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
