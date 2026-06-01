import { useColorScheme as useSystemColorScheme } from 'react-native';

import { resolveColorScheme, type ColorScheme } from '@/hooks/color-scheme';
import { useThemeStore } from '@/store/themeStore';

export type { ColorScheme } from '@/hooks/color-scheme';

export function useColorScheme(): ColorScheme {
  const preference = useThemeStore((state) => state.preference);
  const systemScheme = useSystemColorScheme();

  return resolveColorScheme(preference, systemScheme);
}
