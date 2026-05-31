import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenLayout } from '@/components/layout';
import { AppButton, AppText } from '@/components/ui';
import { useThemeColors } from '@/hooks/use-theme-colors';
import { routes } from '@/navigation/routes';
import { useAuthStore } from '@/store/authStore';
import { spacing } from '@/theme/spacing';

export default function ProfileScreen() {
  const router = useRouter();
  const themeColors = useThemeColors();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace(routes.login);
  };

  return (
    <ScreenLayout backgroundColor={themeColors.background} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <AppText variant="h2">Profile</AppText>
        <AppText variant="body" color="textSecondary">
          Manage your account and session.
        </AppText>
      </View>
      <AppButton label="Log out" variant="outline" onPress={handleLogout} fullWidth />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: spacing.lg,
    gap: spacing.xl,
  },
  header: {
    gap: spacing.sm,
  },
});
