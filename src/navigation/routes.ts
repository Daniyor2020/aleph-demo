import type { Href } from 'expo-router';

/**
 * Canonical route paths for navigation, deep linking, and push notifications.
 * Scheme: mobileprototype://<path> (see app.json)
 */
export const routes = {
  welcome: '/welcome',
  login: '/login',
  home: '/home',
  profile: '/profile',
  settings: '/settings',
} as const satisfies Record<string, Href>;

export type AppRoute = (typeof routes)[keyof typeof routes];
