import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ScreenLayout } from '@/components/layout';
import { AppButton } from '@/components/ui';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useThemeColors } from '@/hooks/use-theme-colors';
import { spacing } from '@/theme/spacing';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  const themeColors = useThemeColors();

  return (
    <ScreenLayout
      backgroundColor={themeColors.background}
      contentContainerStyle={styles.screenContent}>
      <ThemedView style={styles.heroSection}>
        <AnimatedIcon />
        <ThemedText type="title" style={styles.title}>
          Welcome to&nbsp;Expo
        </ThemedText>
      </ThemedView>

      <ThemedText type="code" style={styles.code}>
        get started
      </ThemedText>

      <ThemedView type="backgroundElement" style={styles.stepContainer}>
        <HintRow
          title="Try editing"
          hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
        />
        <HintRow title="Dev tools" hint={getDevMenuHint()} />
        <HintRow
          title="Fresh start"
          hint={<ThemedText type="code">npm run reset-project</ThemedText>}
        />
      </ThemedView>

      <AppButton label="Get Started" containerStyle={styles.ctaButton} />

      {Platform.OS === 'web' && <WebBadge />}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  screenContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
    paddingBottom: BottomTabInset + spacing.md,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  ctaButton: {
    alignSelf: 'stretch',
  },
});
