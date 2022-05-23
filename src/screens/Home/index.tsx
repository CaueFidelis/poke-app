import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Container, Title } from '../../globalStyles';
import { CardPokemon } from '../../components/CardPokemon';
import { Loading } from '../../components/Loading';

export interface APIParams {
  name: string;
  url: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';
  const [initialData, setInitialData] = useState<APIParams[]>([]);
  const [offset, setOffset] = useState(0);

  async function loadPokemonList() {
    if (isLoading) return;
    setIsLoading(true);
    const response = await axios.get(`${baseURL}/?offset=${offset}&limit=20`);
    setInitialData([...initialData, ...response.data.results]);
    setOffset(offset + 20);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPokemonList();
  }, []);

  function renderItem({ item }: ListRenderItemInfo<APIParams>) {
    return <CardPokemon name={item.name} url={item.url} />;
  }

  return (
    <Container>
      <FlatList
        data={initialData}
        renderItem={renderItem}
        onEndReached={loadPokemonList}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={<Title>POKEMON LIST</Title>}
        ListFooterComponent={<Loading isLoading={isLoading} />}
      />
    </Container>
  );
}
