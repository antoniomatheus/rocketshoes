import styled from 'styled-components';

import Logo from '../../assets/logo.svg';

export const Touchable = styled.TouchableWithoutFeedback`
  padding-left: 15px;
`;

export const LogoImage = styled(Logo).attrs({
  width: 180,
  height: 90,
  fill: '#fff',
})`
  padding-left: 15px;
`;
