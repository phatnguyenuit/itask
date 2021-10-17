import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import store from 'states/store';

import AppBar from 'components/app-bar';
import HelloWidget from 'components/hello-widget';
import HelloInput from 'components/hello-input';
import UsersContainer from 'components/users-container';
import WithTheme from 'components/with-theme';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <WithTheme>
        <CssBaseline />
        <AppBar />
        <div className="App">
          <HelloWidget />
          <HelloInput />
          <UsersContainer />
        </div>
      </WithTheme>
    </Provider>
  );
}

export default App;
