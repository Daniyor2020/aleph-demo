import React, { memo, useCallback, useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { useThemeColors } from '@/hooks/use-theme-colors';
import { useThemeStore, type ThemePreference } from '@/store/themeStore';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

const OPTIONS: { value: ThemePreference; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

function ThemeToggleComponent() {
  const themeColors = useThemeColors();
  const preference = useThemeStore((state) => state.preference);
  const setPreference = useThemeStore((state) => state.setPreference);

  const containerStyle = useMemo(
    () => [
      styles.container,
      { backgroundColor: themeColors.surface, borderColor: themeColors.border },
    ],
    [themeColors.border, themeColors.surface],
  );

  const handleSelect = useCallback(
    (value: ThemePreference) => {
      setPreference(value);
    },
    [setPreference],
  );

  return (
    <View style={containerStyle}>
      <AppText variant="body" style={styles.title}>
        Appearance
      </AppText>
      <View style={styles.options}>
        {OPTIONS.map((option) => {
          const isSelected = preference === option.value;
          return (
            <Pressable
              key={option.value}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
              onPress={() => handleSelect(option.value)}
              style={({ pressed }) => [
                styles.option,
                {
                  backgroundColor: isSelected ? themeColors.primary : themeColors.background,
                  borderColor: themeColors.border,
                },
                pressed && styles.pressed,
              ]}>
              <AppText
                variant="caption"
                color={isSelected ? themeColors.background : 'text'}
                style={styles.optionLabel}>
                {option.label}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export const ThemeToggle = memo(ThemeToggleComponent);

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    gap: spacing.md,
  },
  title: {
    fontWeight: '600',
  },
  options: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xs,
    borderRadius: radius.sm,
    borderWidth: 1,
  },
  optionLabel: {
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.85,
  },
});
