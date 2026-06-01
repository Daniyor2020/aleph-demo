import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

import { useThemeColors } from '@/hooks/use-theme-colors';

export default function TabsLayout() {
  const themeColors = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: themeColors.textSecondary,
        tabBarStyle: {
          ...styles.tabBar,
          backgroundColor: themeColors.background,
          borderTopColor: themeColors.border,
        },
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
