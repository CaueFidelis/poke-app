import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ContainerInfoPokemon = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 30px 0 30px;
`;

export const SideInfoPokemon = styled.View`
  width: 50%;
`;

export const PokemonStatus = styled.Text`
  font-size: ${RFValue(16)}px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 20px;
`;
