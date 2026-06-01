import React, { memo, useMemo } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useThemeColors } from '@/hooks/use-theme-colors';
import { MaxContentWidth } from '@/theme/layout';
import { spacing } from '@/theme/spacing';

export type ScreenLayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  keyboardAvoiding?: boolean;
  disableHorizontalPadding?: boolean;
  backgroundColor?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

function ScreenLayoutComponent({
  children,
  scroll = false,
  keyboardAvoiding = false,
  disableHorizontalPadding = false,
  backgroundColor,
  contentContainerStyle,
}: ScreenLayoutProps) {
  const themeColors = useThemeColors();
  const resolvedBackground = backgroundColor ?? themeColors.background;

  const containerStyle = useMemo(
    () => [styles.container, { backgroundColor: resolvedBackground }],
    [resolvedBackground],
  );

  const contentStyle = useMemo(
    () => [
      styles.content,
      styles.contentMaxWidth,
      disableHorizontalPadding ? styles.noHorizontalPadding : styles.horizontalPadding,
      contentContainerStyle,
    ],
    [disableHorizontalPadding, contentContainerStyle],
  );

  const innerContent = scroll ? (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={contentStyle}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={contentStyle}>{children}</View>
  );

  const wrappedContent = keyboardAvoiding ? (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {innerContent}
    </KeyboardAvoidingView>
  ) : (
    innerContent
  );

  return (
    <SafeAreaView style={containerStyle} edges={['top', 'left', 'right']}>
      {wrappedContent}
    </SafeAreaView>
  );
}

export const ScreenLayout = memo(ScreenLayoutComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  contentMaxWidth: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
  },
  horizontalPadding: {
    paddingHorizontal: spacing.md,
  },
  noHorizontalPadding: {
    paddingHorizontal: 0,
  },
});
