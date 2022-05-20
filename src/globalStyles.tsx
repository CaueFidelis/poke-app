import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: ${RFValue(26)};
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  margin: 20px 0;
`;
