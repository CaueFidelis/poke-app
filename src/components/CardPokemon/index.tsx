import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
import { propsStack } from '../../routes/models';

export function CardPokemon({ name, url }: APIParams) {
  const navigation = useNavigation<propsStack>();
  const [pokemonInfo, setPokemonInfo] = useState({
    id: 0,
    name: '',
    types: [],
    srcImage: '',
  });

  async function loadPokemonInfo() {
    const response = await axios.get(`${url}`);
    setPokemonInfo({
      id: response.data.id,
      name: response.data.name,
      types: response.data.types.map((data: any) => data.type.name),
      srcImage: response.data.sprites.other.home.front_default,
    });
  }

  useEffect(() => {
    loadPokemonInfo();
  }, []);

  return (
    <ContainerCard
      onPress={() =>
        navigation.navigate('PokemonDetails', {
          name,
          url,
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
