import { ActivityIndicator, View } from 'react-native';

interface LoadingProps {
  isLoading: boolean;
}

export function Loading({ isLoading }: LoadingProps) {
  if (isLoading) return null;

  return (
    <View style={{ padding: 10 }}>
      <ActivityIndicator size={25} color="#000" />
    </View>
  );
}
