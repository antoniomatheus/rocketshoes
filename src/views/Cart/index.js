import React from 'react';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';
import {
  Container,
  CardContainer,
  TotalText,
  TotalValue,
  ButtonView,
  ButtonText,
} from './styles';
import CartItem from '../../components/CartItem';

function Cart({ cart }) {
  return (
    <Container>
      <CardContainer>
        <FlatList
          data={cart}
          renderItem={({ item }) => {
            return <CartItem item={item} />;
          }}
          keyExtractor={item => `${item.id}`}
        />
        <TotalText>TOTAL</TotalText>
        <TotalValue>R$ 1000</TotalValue>
        <TouchableOpacity>
          <ButtonView>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </ButtonView>
        </TouchableOpacity>
      </CardContainer>
    </Container>
  );
}

const mapStateToProps = state => {
  const { cart } = state;
  return { cart };
};

export default connect(mapStateToProps)(Cart);
