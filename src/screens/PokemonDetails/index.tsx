import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Title } from '../../globalStyles';
import imageNoPicture from '../../../assets/no-picture.png';
import { propsNavigationStack } from '../../routes/models';

export default function PokemonDetails() {
  const route = useRoute<RouteProp<propsNavigationStack, 'PokemonDetails'>>();
  const [pokemonDetails, setPokemonDetails] = useState({
    id: 0,
    name: '',
    srcImage: '',
    types: [],
    abilities: [],
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
  });

  async function loadPokemonInfo() {
    const response = await axios.get(`${route?.params?.url}`);

    // Filter arrays Types and Abilities
    const pokemonTypes = [
      response.data.types[0].type.name,
      response.data.types[1] !== undefined
        ? response.data.types[1].type.name
        : '',
    ].filter((i) => i);

    const pokemonAbilties = [
      response.data.abilities[0].ability.name,
      response.data.abilities[1] !== undefined
        ? response.data.abilities[1].ability.name
        : '',
    ].filter((i) => i);

    setPokemonDetails({
      id: response.data.id,
      name: response.data.name,
      srcImage: response.data.sprites.other.home.front_default,
      types: pokemonTypes,
      abilities: pokemonAbilties,
      stats: {
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        specialAttack: response.data.stats[3].base_stat,
        specialDefense: response.data.stats[4].base_stat,
        speed: response.data.stats[5].base_stat,
      },
    });
  }

  useEffect(() => {
    console.log(route);
    loadPokemonInfo();
  }, []);

  return (
    <Container>
      <Title>Pokemon Details</Title>
      <Image
        style={{ width: 110, height: 110 }}
        source={
          pokemonDetails.srcImage !== ''
            ? { uri: `${pokemonDetails.srcImage}` }
            : imageNoPicture
        }
      />
      <Text
        style={{
          fontSize: RFValue(16),
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        Types: {pokemonDetails.types.join(' & ')}
      </Text>
      <Text
        style={{
          fontSize: RFValue(16),
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        Abilities (Just Two): {pokemonDetails.abilities.join(' & ')}
      </Text>
      <Text
        style={{
          fontSize: RFValue(16),
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        HP: {pokemonDetails.stats.hp}
      </Text>
      <Text
        style={{
          fontSize: RFValue(16),
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        Speed: {pokemonDetails.stats.speed}
      </Text>
      <Text
        style={{
          fontSize: RFValue(16),
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        Defense: {pokemonDetails.stats.defense}
      </Text>
      <Text
        style={{
          fontSize: RFValue(16),
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        Attack: {pokemonDetails.stats.attack}
      </Text>
      <Text
        style={{
          fontSize: RFValue(16),
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        Special-Defense: {pokemonDetails.stats.specialDefense}
      </Text>
      <Text
        style={{
          fontSize: RFValue(16),
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        Special-Attack: {pokemonDetails.stats.specialAttack}
      </Text>
    </Container>
  );
}
