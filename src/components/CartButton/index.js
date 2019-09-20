import React from 'react';
import { connect } from 'react-redux';
import { Touchable, Container, Number } from './styles';

function CartButton({ cartSize, onPress }) {
  return (
    <Touchable onPress={onPress}>
      <Container>
        <Number>{cartSize}</Number>
      </Container>
    </Touchable>
  );
}

const mapStateToProps = state => {
  const { cart } = state;
  return {
    cartSize: cart.length,
  };
};

export default connect(mapStateToProps)(CartButton);
