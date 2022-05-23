import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import axios from 'axios';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Container, Title } from '../../globalStyles';
import imageNoPicture from '../../../assets/no-picture.png';
import { propsNavigationStack } from '../../routes/models';
import { ContainerInfoPokemon, PokemonStatus, SideInfoPokemon } from './styles';

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

    setPokemonDetails({
      id: response.data.id,
      name: response.data.name,
      srcImage: response.data.sprites.other.home.front_default,
      types: response.data.types.map((data) => data.type.name),
      abilities: response.data.abilities.map((data) => data.ability.name),
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
    loadPokemonInfo();
  }, []);

  return (
    <Container>
      <Title>{route.params?.name}</Title>
      <Image
        style={{ width: 170, height: 170, marginBottom: 30 }}
        source={
          pokemonDetails.srcImage !== ''
            ? { uri: `${pokemonDetails.srcImage}` }
            : imageNoPicture
        }
      />

      <ContainerInfoPokemon>
        <SideInfoPokemon>
          <PokemonStatus>
            Types: {'\n'} {pokemonDetails.types.join(' & ')}
          </PokemonStatus>
          <PokemonStatus>
            HP: {'\n'} {pokemonDetails.stats.hp}
          </PokemonStatus>
          <PokemonStatus>
            Defense: {'\n'} {pokemonDetails.stats.defense}
          </PokemonStatus>
          <PokemonStatus>
            Special-Defense: {'\n'}
            {pokemonDetails.stats.specialDefense}
          </PokemonStatus>
        </SideInfoPokemon>
        <SideInfoPokemon>
          <PokemonStatus>
            Abilities: {'\n'} {pokemonDetails.abilities.join(' & ')}
          </PokemonStatus>
          <PokemonStatus>
            Speed: {'\n'} {pokemonDetails.stats.speed}
          </PokemonStatus>
          <PokemonStatus>
            Attack: {'\n'} {pokemonDetails.stats.attack}
          </PokemonStatus>
          <PokemonStatus>
            Special-Attack: {'\n'} {pokemonDetails.stats.specialAttack}
          </PokemonStatus>
        </SideInfoPokemon>
      </ContainerInfoPokemon>
    </Container>
  );
}
