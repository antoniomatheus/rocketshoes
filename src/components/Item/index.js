import React from 'react';
import { connect } from 'react-redux';
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

import { addToCart } from '../../store/modules/cart/actions';

function Item({ item, quantity, onPress }) {
  return (
    <Container>
      <Image source={{ uri: item.image }} />
      <Title>{item.title}</Title>
      <Price>{item.price}</Price>
      <TouchableOpacity onPress={onPress}>
        <ButtonView>
          <QuantityText>{quantity}</QuantityText>
          <AddText>ADICIONAR</AddText>
        </ButtonView>
      </TouchableOpacity>
    </Container>
  );
}

const mapStateToProps = (state, props) => {
  const { cart } = state;
  return {
    quantity: (() => {
      const productIndex = cart.findIndex(p => p.id === props.item.id);
      if (productIndex >= 0) {
        return cart[productIndex].amount;
      }
      return 0;
    })(),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { item } = props;
  return {
    onPress: () => dispatch(addToCart(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
