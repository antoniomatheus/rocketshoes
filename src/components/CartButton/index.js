import React from 'react';
import { Touchable, Container, Number } from './styles';

export default function CartButton({ quantity, onPress }) {
  return (
    <Touchable onPress={onPress}>
      <Container>
        <Number>{quantity}</Number>
      </Container>
    </Touchable>
  );
}
