import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import store from 'states/store';

import AppBar from 'components/app-bar';
import HelloWidget from 'components/hello-widget';
import HelloInput from 'components/hello-input';
import UsersContainer from 'components/users-container';

import './App.css';
import theme from 'theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar />
        <div className="App">
          <HelloWidget />
          <HelloInput />
          <UsersContainer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
