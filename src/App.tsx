import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './app/store';
import {Navigation} from './settings/navigation';
import {Toast} from './components/base/Toast';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
        <Toast />
      </PersistGate>
    </Provider>
  );
};

export default App;
