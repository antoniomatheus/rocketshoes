import styled from 'styled-components';

import Logo from '../../assets/logo.svg';

export const Touchable = styled.TouchableWithoutFeedback``;

export const LogoImage = styled(Logo).attrs({
  width: 180,
  height: 90,
  fill: '#fff',
})``;

export const Container = styled.View`
  padding-left: 15px;
`;
