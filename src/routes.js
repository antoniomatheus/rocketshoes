import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './views/Home';
import Cart from './views/Cart';
import LogoButton from './components/LogoButton';

import logo from './assets/logo.svg';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: '#141419',
          },
          headerTintColor: '#fff',
          headerLeft: (
            <LogoButton onPress={navigation.navigate('Home')} logo={logo} />
          ),
        };
      },
    }
  )
);

export default Routes;
