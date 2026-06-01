import { useEffect, useState } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

import { resolveColorScheme, type ColorScheme } from '@/hooks/color-scheme';
import { useThemeStore } from '@/store/themeStore';

export type { ColorScheme } from '@/hooks/color-scheme';

/**
 * Re-calculates on the client for static web rendering.
 */
export function useColorScheme(): ColorScheme {
  const preference = useThemeStore((state) => state.preference);
  const systemScheme = useSystemColorScheme();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  if (!hasHydrated) {
    return 'light';
  }

  return resolveColorScheme(preference, systemScheme);
}
