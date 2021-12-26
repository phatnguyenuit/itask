import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useCallback, useState } from 'react';

import { ITASK_API_URL } from './constants/common';
import AppBar from './components/app-bar';
import HelloWidget from './components/hello-widget';
import HelloInput from './components/hello-input';
import UsersContainer from './components/users-container';
import TodosContainer from './components/todos-container';

import { User } from './types/user';

import './App.css';

const client = new ApolloClient({
  uri: `${ITASK_API_URL}/graphql`,
  // uri: 'https://itask-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-access-token': '',
  },
});

function App() {
  const [activeUser, setActiveUser] = useState<User>();

  const handleChooseUser = useCallback(
    (user: User) => () => {
      setActiveUser(user);
    },
    [],
  );

  return (
    <ApolloProvider client={client}>
      <AppBar />
      <div className="App">
        <HelloWidget />
        <HelloInput />
        <UsersContainer activeUser={activeUser} onClick={handleChooseUser} />
        {activeUser && <TodosContainer user={activeUser} />}
      </div>
    </ApolloProvider>
  );
}

export default App;
