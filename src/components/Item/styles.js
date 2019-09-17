import styled from 'styled-components';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 4px;
  height: 70%;
  width: 250px;
  margin-left: 20px;
  padding: 10px;
  justify-content: space-around;
`;

export const Image = styled.Image`
  width: 100%;
  height: 250px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin: 0 5px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 21px;
  margin: 5px 5px 5px 5px;
`;

export const ButtonView = styled.View`
  margin: auto;
  flex-direction: row;
  border-radius: 4px;
`;

export const QuantityText = styled.Text`
  text-align: right;
  padding: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex: 1;
  background-color: #5a479a;
  color: #fff;
`;

export const AddText = styled.Text`
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  flex: 3;
  background-color: #7159c1;
  color: #fff;
`;
