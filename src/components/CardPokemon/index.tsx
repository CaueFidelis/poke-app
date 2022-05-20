import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { APIParams } from '../../screens/Home';
import imageNoPicture from '../../../assets/no-picture.png';
import {
  ContainerCard,
  ContainerLeftCard,
  ContainerRightCard,
  PokemonImage,
  PokemonName,
  PokemonTypes,
} from './styles';

export function CardPokemon({ name, url }: APIParams) {
  const navigation = useNavigation();
  const [pokemonInfo, setPokemonInfo] = useState({
    id: 0,
    name: '',
    types: [],
    srcImage: '',
  });

  async function loadPokemonInfo() {
    const response = await axios.get(`${url}`);
    let pokemonTypes = [
      response.data.types[0].type.name,
      response.data.types[1] !== undefined
        ? response.data.types[1].type.name
        : '',
    ].filter(function (i) {
      return i;
    });
    setPokemonInfo({
      id: response.data.id,
      name: response.data.name,
      types: pokemonTypes,
      srcImage: response.data.sprites.other.home.front_default,
    });
  }

  useEffect(() => {
    loadPokemonInfo();
  }, []);

  return (
    <ContainerCard
      onPress={() =>
        navigation.navigate('Pokemon Details', {
          url: url,
        })
      }
    >
      <ContainerLeftCard>
        <PokemonImage
          source={
            pokemonInfo.srcImage !== ''
              ? { uri: `${pokemonInfo.srcImage}` }
              : imageNoPicture
          }
        />
      </ContainerLeftCard>
      <ContainerRightCard>
        <PokemonName>{name}</PokemonName>
        <PokemonTypes>
          Types: {pokemonInfo.types.toString().replace(/(,)/, ' & ')}
        </PokemonTypes>
      </ContainerRightCard>
    </ContainerCard>
  );
}
