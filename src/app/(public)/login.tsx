import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenLayout } from '@/components/layout';
import { AppButton, AppText } from '@/components/ui';
import { useThemeColors } from '@/hooks/use-theme-colors';
import { routes } from '@/navigation/routes';
import { useAuthStore } from '@/store/authStore';
import { spacing } from '@/theme/spacing';

export default function LoginScreen() {
  const router = useRouter();
  const themeColors = useThemeColors();
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login();
    router.replace(routes.home);
  };

  return (
    <ScreenLayout
      backgroundColor={themeColors.background}
      keyboardAvoiding
      contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <AppText variant="h2">Sign in</AppText>
        <AppText variant="body" color="textSecondary">
          Use the button below to simulate authentication.
        </AppText>
      </View>
      <AppButton label="Log in" onPress={handleLogin} fullWidth />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.xl,
  },
  header: {
    gap: spacing.sm,
  },
});
