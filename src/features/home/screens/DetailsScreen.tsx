import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenLayout } from '@/components/layout';
import { AppButton, AppText } from '@/components/ui';
import { spacing } from '@/theme/spacing';

export function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <ScreenLayout contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <AppText variant="h2">Details</AppText>
        <AppText variant="body" color="textSecondary">
          Item ID: {id ?? 'unknown'}
        </AppText>
      </View>
      <AppButton label="Go back" variant="secondary" onPress={() => router.back()} fullWidth />
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
