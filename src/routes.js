import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LogoButton from './components/LogoButton';

import Home from './views/Home';
import Cart from './views/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#fff',
        headerLeft: <LogoButton onPress={() => navigation.navigate('Home')} />,
      }),
    }
  )
);

export default Routes;
