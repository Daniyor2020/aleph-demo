import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenLayout } from '@/components/layout';
import { AppButton, AppText } from '@/components/ui';
import { routes } from '@/navigation/routes';
import { spacing } from '@/theme/spacing';

export function WelcomeScreen() {
  const router = useRouter();

  return (
    <ScreenLayout contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <AppText variant="h1">Welcome</AppText>
        <AppText variant="body" color="textSecondary" style={styles.subtitle}>
          A minimal production-ready foundation for your mobile app.
        </AppText>
      </View>
      <AppButton label="Get Started" onPress={() => router.push(routes.login)} fullWidth />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.xl,
  },
  hero: {
    gap: spacing.sm,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
});
