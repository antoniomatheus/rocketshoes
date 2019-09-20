import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from './store';

import './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
      <Routes />
    </Provider>
  );
};

export default App;
