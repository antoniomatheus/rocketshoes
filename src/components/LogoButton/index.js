import React from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';

export default function LogoButton({ logo, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image source={logo} />
    </TouchableWithoutFeedback>
  );
}
