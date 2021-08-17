import React from 'react';
import Main from './src/Router/Main';
import {Store, Persistor} from './src/Redux/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
