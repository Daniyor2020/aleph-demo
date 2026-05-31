import React, { memo, useMemo } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { useThemeColors } from '@/hooks/use-theme-colors';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

export type AppButtonVariant = 'primary' | 'secondary' | 'outline';
export type AppButtonSize = 'sm' | 'md' | 'lg';

export type AppButtonProps = Omit<PressableProps, 'children'> & {
  label: string;
  variant?: AppButtonVariant;
  size?: AppButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

function AppButtonComponent({
  label,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  containerStyle,
  ...rest
}: AppButtonProps) {
  const themeColors = useThemeColors();
  const isDisabled = disabled || loading;

  const variantStyle = useMemo(() => {
    switch (variant) {
      case 'secondary':
        return { backgroundColor: themeColors.surface, borderColor: 'transparent' };
      case 'outline':
        return { backgroundColor: 'transparent', borderColor: themeColors.primary };
      default:
        return { backgroundColor: themeColors.primary, borderColor: 'transparent' };
    }
  }, [variant, themeColors]);

  const pressableStyle = useMemo(
    () => [
      styles.base,
      sizeStyles[size],
      variantStyle,
      fullWidth && styles.fullWidth,
      isDisabled && styles.disabled,
      containerStyle,
    ],
    [size, variantStyle, fullWidth, isDisabled, containerStyle],
  );

  const labelColor = useMemo(() => {
    if (isDisabled) {
      return themeColors.textSecondary;
    }
    if (variant === 'primary') {
      return themeColors.background;
    }
    return themeColors.primary;
  }, [isDisabled, variant, themeColors]);

  return (
    <Pressable
      accessibilityRole="button"
      disabled={isDisabled}
      style={({ pressed }) => [pressableStyle, pressed && !isDisabled && styles.pressed]}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={labelColor} />
      ) : (
        <AppText variant="body" color={labelColor} style={styles.label}>
          {label}
        </AppText>
      )}
    </Pressable>
  );
}

export const AppButton = memo(AppButtonComponent);

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    borderWidth: 1,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    fontWeight: '600',
  },
});

const sizeStyles = StyleSheet.create({
  sm: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    minHeight: spacing.xl,
  },
  md: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    minHeight: spacing.xxl,
  },
  lg: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    minHeight: spacing.xxl + spacing.sm,
  },
});
