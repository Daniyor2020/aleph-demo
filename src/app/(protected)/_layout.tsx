import { Redirect, Stack } from 'expo-router';

import { routes } from '@/navigation/routes';
import { useAuthStore } from '@/store/authStore';

export default function ProtectedLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href={routes.login} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="details/[id]" options={{ presentation: 'card' }} />
    </Stack>
  );
}
