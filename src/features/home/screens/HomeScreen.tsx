import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenLayout } from '@/components/layout';
import { AppButton, AppText } from '@/components/ui';
import { routes } from '@/navigation/routes';
import { spacing } from '@/theme/spacing';

export function HomeScreen() {
  const router = useRouter();

  return (
    <ScreenLayout contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <AppText variant="h1">Home</AppText>
        <AppText variant="body" color="textSecondary">
          Your protected dashboard placeholder.
        </AppText>
      </View>
      <AppButton
        label="View details"
        onPress={() => router.push(routes.details('123'))}
        fullWidth
      />
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
