import React from 'react';
import { View } from 'react-native';
import { Touchable, LogoImage } from './styles';

import Logo from '../../assets/logo.svg';

export default function LogoButton({ onPress }) {
  return (
    <Touchable onPress={onPress}>
      <View style={{ paddingLeft: 15 }}>
        <LogoImage />
      </View>
    </Touchable>
  );
}
