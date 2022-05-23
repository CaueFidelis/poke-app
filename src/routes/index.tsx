import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider } from 'react-query';
import Home from '../screens/Home';
import PokemonDetails from '../screens/PokemonDetails';
import { queryClient } from '../services/queryClients';
import { propsNavigationStack } from './models';

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function Routes() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
