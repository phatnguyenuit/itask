import { Provider } from 'react-redux';

import store from 'states/store';

import HelloWidget from 'components/hello-widget';
import HelloInput from 'components/hello-input';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>iTask Management</h2>
        <HelloWidget />
        <HelloInput />
      </div>
    </Provider>
  );
}

export default App;
