import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  margin-bottom: ${getBottomSpace()};
`;

export const Title = styled.Text`
  font-size: ${RFValue(26)}px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  margin: 20px 0;
`;
