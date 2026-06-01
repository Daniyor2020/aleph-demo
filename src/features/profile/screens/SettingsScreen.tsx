import { StyleSheet, View } from 'react-native';

import { ScreenLayout } from '@/components/layout';
import { AppText, ThemeToggle } from '@/components/ui';
import { useThemeColors } from '@/hooks/use-theme-colors';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

export function SettingsScreen() {
  const themeColors = useThemeColors();

  return (
    <ScreenLayout scroll contentContainerStyle={styles.content}>
      <AppText variant="h2">Settings</AppText>
      <ThemeToggle />
      <View
        style={[
          styles.card,
          { backgroundColor: themeColors.surface, borderColor: themeColors.border },
        ]}>
        <AppText variant="body" color="textSecondary">
          More app preferences will live here.
        </AppText>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: spacing.lg,
    gap: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  card: {
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
  },
});
