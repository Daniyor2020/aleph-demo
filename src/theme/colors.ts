export const colors = {
  background: '#FFFFFF',
  surface: '#F8F9FA',
  primary: '#2563EB',
  text: '#111827',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
} as const;

export const colorsDark = {
  background: '#000000',
  surface: '#212225',
  primary: '#3B82F6',
  text: '#FFFFFF',
  textSecondary: '#B0B4BA',
  border: '#2E3135',
} as const;

export type ColorToken = keyof typeof colors;
