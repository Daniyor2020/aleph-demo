/**
 * Backward-compatible theme bridge for existing template components.
 * New code should import from `@/theme` directly.
 */

import '@/global.css';

import { Platform } from 'react-native';

import { colors, colorsDark } from '@/theme/colors';
import { BottomTabInset, MaxContentWidth } from '@/theme/layout';
import { spacing } from '@/theme/spacing';

export const Colors = {
  light: {
    text: colors.text,
    background: colors.background,
    backgroundElement: colors.surface,
    backgroundSelected: colors.border,
    textSecondary: colors.textSecondary,
  },
  dark: {
    text: colorsDark.text,
    background: colorsDark.background,
    backgroundElement: colorsDark.surface,
    backgroundSelected: colorsDark.border,
    textSecondary: colorsDark.textSecondary,
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

/** @deprecated Use `spacing` from `@/theme` instead */
export const Spacing = {
  half: spacing.xs / 2,
  one: spacing.xs,
  two: spacing.sm,
  three: spacing.md,
  four: spacing.lg,
  five: spacing.xl,
  six: 64,
} as const;

export { BottomTabInset, MaxContentWidth };
