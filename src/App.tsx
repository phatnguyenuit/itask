import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useCallback, useState } from 'react';

import AppBar from './components/app-bar';
import HelloWidget from './components/hello-widget';
import HelloInput from './components/hello-input';
import UsersContainer from './components/users-container';
import TodosContainer from './components/todos-container';

import { User } from './types/user';
import { getEnv } from './utils/common';

import './App.css';

const client = new ApolloClient({
  uri: getEnv('REACT_APP_ITASK_GRAPHQL_URL'),
  cache: new InMemoryCache(),
  headers: {
    'x-access-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiZmFzdC5uZ3V5ZW5AZ21haWwuY29tIiwibmFtZSI6IkZhc3QgTmd1eWVuIiwiaWF0IjoxNjQwNDMxOTcyLCJleHAiOjE2NDA1MTgzNzJ9.4XpuCCyFyCeI6-vGpTkE19bn9DG7iYIPqx8aZRVQ1qg',
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
