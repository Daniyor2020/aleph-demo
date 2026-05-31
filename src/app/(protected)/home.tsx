import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenLayout } from '@/components/layout';
import { AppButton, AppText } from '@/components/ui';
import { useThemeColors } from '@/hooks/use-theme-colors';
import { routes } from '@/navigation/routes';
import { spacing } from '@/theme/spacing';

export default function HomeScreen() {
  const router = useRouter();
  const themeColors = useThemeColors();

  return (
    <ScreenLayout backgroundColor={themeColors.background} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <AppText variant="h1">Home</AppText>
        <AppText variant="body" color="textSecondary">
          Your protected dashboard placeholder.
        </AppText>
      </View>
      <View style={styles.actions}>
        <AppButton
          label="Profile"
          variant="secondary"
          onPress={() => router.push(routes.profile)}
          fullWidth
        />
        <AppButton
          label="Settings"
          variant="outline"
          onPress={() => router.push(routes.settings)}
          fullWidth
        />
      </View>
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
  actions: {
    gap: spacing.md,
  },
});
