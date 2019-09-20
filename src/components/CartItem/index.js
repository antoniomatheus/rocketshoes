import React from 'react';
import { connect } from 'react-redux';
import { updateAmount } from '../../store/modules/cart/actions';
import {
  Container,
  Header,
  ProductImage,
  InfoContainer,
  Title,
  Price,
  Footer,
  Quantity,
  SubTotal,
} from './styles';

function CartItem({ item, onKeyPress, amount }) {
  return (
    <Container>
      <Header>
        <ProductImage source={{ uri: item.image }} />
        <InfoContainer>
          <Title>{item.title}</Title>
          <Price>{item.price}</Price>
        </InfoContainer>
      </Header>
      <Footer>
        <Quantity
          onKeyPress={(event, amount) => onKeyPress(event, amount)}
          value={amount.toString()}
        />
        <SubTotal>{item.amount * item.price}</SubTotal>
      </Footer>
    </Container>
  );
}

const mapStateToProps = (state, props) => {
  const { item } = props;
  const { cart } = state;
  const productIndex = cart.findIndex(p => p.id === item.id);
  return {
    amount: cart[productIndex].amount,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { item } = props;
  return {
    onKeyPress: (event, amount) => {
      if (event.key === 'Enter') {
        const newAmount = Number(amount);
        if (newAmount) {
          dispatch(updateAmount(item.id, newAmount));
        }
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
