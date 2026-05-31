import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, type TextProps, type TextStyle } from 'react-native';

import { useThemeColors } from '@/hooks/use-theme-colors';
import { colors as lightColors, type ColorToken } from '@/theme/colors';
import { typography, type TypographyVariant } from '@/theme/typography';

export type AppTextProps = TextProps & {
  variant?: TypographyVariant;
  color?: ColorToken | string;
};

function AppTextComponent({
  variant = 'body',
  color = 'text',
  style,
  ...rest
}: AppTextProps) {
  const themeColors = useThemeColors();

  const textColor = useMemo(() => {
    if (color in lightColors) {
      return themeColors[color as ColorToken];
    }
    return color;
  }, [color, themeColors]);

  const textStyle = useMemo(
    () => [typography[variant], styles.base, { color: textColor }, style],
    [variant, textColor, style],
  );

  return <Text style={textStyle} {...rest} />;
}

export const AppText = memo(AppTextComponent);

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
