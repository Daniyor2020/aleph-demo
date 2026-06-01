export const radius = {
  sm: 6,
  md: 12,
  lg: 16,
} as const;

export type Radius = keyof typeof radius;
