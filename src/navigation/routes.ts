import type { Href } from 'expo-router';

/**
 * Canonical paths for navigation, deep linking, and push notifications.
 * Scheme: mobileprototype://<path> (see app.json)
 */
export const routes = {
  welcome: '/welcome',
  login: '/login',
  home: '/home',
  profile: '/profile',
  settings: '/settings',
  details: (id: string) => `/details/${id}` as Href,
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
