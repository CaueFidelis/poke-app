import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ContainerCard = styled.TouchableOpacity`
  flex-direction: row;
  max-width: 90%;
  margin-bottom: 10px;
`;

export const ContainerLeftCard = styled.View`
  justify-content: center;
  background-color: #fff;
  border: 1px solid rgba(51, 54, 58, 0.3);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px;
`;

export const PokemonImage = styled.Image`
  width: 110px;
  height: 110px;
`;

export const ContainerRightCard = styled.View`
  justify-content: center;
  background-color: #fff;
  border: 1px solid rgba(51, 54, 58, 0.3);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 25px;
`;

export const PokemonName = styled.Text`
  font-size: ${RFValue(24)};
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 10;
`;

export const PokemonTypes = styled.Text`
  font-size: ${RFValue(14)};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 5;
`;
