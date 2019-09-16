import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
      <Routes />
    </Fragment>
  );
};

export default App;
