import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Home: undefined,
  PokemonDetails: {
    url: string
  }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>