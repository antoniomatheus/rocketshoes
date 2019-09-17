import React from 'react';
import { Touchable, LogoImage, Container } from './styles';

export default function LogoButton({ onPress }) {
  return (
    <Touchable onPress={onPress}>
      <Container>
        <LogoImage />
      </Container>
    </Touchable>
  );
}
