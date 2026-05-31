import { colors, colorsDark, type ColorToken } from '@/theme/colors';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useThemeColors() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? 'dark' : 'light';

  return theme === 'dark' ? colorsDark : colors;
}

export type ThemeColors = typeof colors;
export type { ColorToken };
