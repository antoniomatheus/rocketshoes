import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  Image,
  Title,
  Price,
  ButtonView,
  QuantityText,
  AddText,
} from './styles';

export default function Item({ item }) {
  return (
    <Container>
      <Image source={{ uri: item.image }} />
      <Title>{item.title}</Title>
      <Price>{item.price}</Price>
      <TouchableOpacity>
        <ButtonView>
          <QuantityText>3</QuantityText>
          <AddText>ADICIONAR</AddText>
        </ButtonView>
      </TouchableOpacity>
    </Container>
  );
}
