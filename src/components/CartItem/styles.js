import styled from 'styled-components';

export const Container = styled.View`
  padding: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const InfoContainer = styled.View`
  justify-content: center;
  flex: 1;
  padding: 10px;
`;

export const Title = styled.Text``;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin: 0;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 4px;
`;

export const Quantity = styled.TextInput.attrs({
  keyboardType: 'number-pad',
})`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 0 10px;
`;

export const SubTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
