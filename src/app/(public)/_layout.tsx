import { Redirect, Stack } from 'expo-router';

import { routes } from '@/navigation/routes';
import { useAuthStore } from '@/store/authStore';

export default function PublicLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect href={routes.home} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
